package handlers

import (
	"encoding/json"
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
		RoomID string `json: "room_id"`
	}
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
	ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		log.Fatal("Web Socket Upgrade failed")
	}
	AllRooms.InsertInRoom(roomID[0], false, ws)
	go broadcaster()
	for {
		var msg broadCastMsg
		err := ws.ReadJSON(msg.Message)
		if err != nil {
			log.Fatal("Read Error")
		}
		msg.RoomID = roomID[0]
		broadCast <- msg
	}
}
