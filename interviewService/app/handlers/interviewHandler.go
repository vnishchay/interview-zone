package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

// this is global for the server
var AllRooms RoomMap

func CreateRoomRequestHandler(c *gin.Context) {

	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")

	roomID := AllRooms.CreateRoom()

	type res struct {
		RoomID string `json: "roomID"`
	}

	// log.Println(AllRooms.Map)
	json.NewEncoder(c.Writer).Encode(res{RoomID: roomID})
	// crete a room and return room id
}

var upgrader = websocket.Upgrader{

	CheckOrigin: func(r *http.Request) bool {

		return true
	},
}

type broadCastMsg struct {
	Message map[string]interface{}
	RoomID  string
	Client  *websocket.Conn
}

var broadCast = make(chan broadCastMsg)

func broadcaster() {
	for {
		msg := <-broadCast
		for _, cliet := range AllRooms.Map[msg.RoomID] {
			if cliet.Conn != msg.Client {
				err := cliet.Conn.WriteJSON(msg.Message)

				if err != nil {
					log.Fatal(err)
					cliet.Conn.Close()
				}
			}
		}
	}
}

// join room request hadnelr : helper to join room
func JoinRoomRequestHandler(c *gin.Context) {
	roomID, ok := c.Request.URL.Query()["roomID"]

	if !ok {
		log.Println("Room ID missing")
		return
	}
	fmt.Println("WebSocket Connecting")
	ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	fmt.Println("Every thing fine here")
	if err != nil {
		log.Println("Error getting websockets connection")
		log.Fatal(err)
	}

	AllRooms.InsertInRoom(roomID[0], false, ws)
	fmt.Println(" H ere all fine")

	go broadcaster()
	fmt.Println("WHere is the issue")

	for {
		var msg broadCastMsg
		err := ws.ReadJSON(&msg.Message)
		fmt.Println(err)
		if err != nil {
			log.Fatal("Read Error")
		}
		msg.Client = ws
		msg.RoomID = roomID[0]
		broadCast <- msg
	}
}
