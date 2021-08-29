package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

// AllRooms is the global hashmap for the server
var AllRooms RoomMap

// CreateRoomRequestHandler Create a Room and return roomID
func CreateRoomRequestHandler(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	roomID := AllRooms.CreateRoom()

	type resp struct {
		RoomID string `json:"room_id"`
	}

	log.Println(AllRooms.Map)
	json.NewEncoder(c.Writer).Encode(resp{RoomID: roomID})
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type broadcastMsg struct {
	Message map[string]interface{}
	RoomID  string
	Client  *websocket.Conn
}

var broadcast = make(chan broadcastMsg)

func broadcaster() {
	fmt.Println("BroadCastMessage")
	for {
		msg := <-broadcast
		cl1 := AllRooms.Map[msg.RoomID].P1
		cl2 := AllRooms.Map[msg.RoomID].P2
		fmt.Println(cl1, cl2, "7")
		// for _, client := range AllRooms.Map[msg.RoomID] {
		if cl1.Conn != nil {
			if cl1.Conn != msg.Client {
				err := cl1.Conn.WriteJSON(msg.Message)
				fmt.Println("Message", err)
				if err != nil {
					log.Fatal(err)
					cl1.Conn.Close()
				}
			}

		}
		if cl2.Conn != nil {
			if cl2.Conn != msg.Client {
				err := cl2.Conn.WriteJSON(msg.Message)

				if err != nil {
					log.Fatal(err)
					cl2.Conn.Close()
				}
			}
		}
		// }

	}
}

// JoinRoomRequestHandler will join the client in a particular room
func JoinRoomRequestHandler(c *gin.Context) {
	roomID, ok := c.Request.URL.Query()["roomID"]

	fmt.Println(roomID, "ROOMID")

	if !ok {
		log.Println("roomID missing in URL Parameters")
		return
	}

	if AllRooms.Map[roomID[0]].P1.inRoom && AllRooms.Map[roomID[0]].P2.inRoom {
		return
	}

	ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		log.Fatal("Web Socket Upgrade Error", err)
	}
	fmt.Println(ws, "web sockets upgrade")
	AllRooms.InsertIntoRoom(roomID[0], false, ws)

	go broadcaster()

	for {
		var msg broadcastMsg

		err := ws.ReadJSON(&msg.Message)
		if err != nil {
			log.Fatal("Read Error: ", err)
		}

		msg.Client = ws
		msg.RoomID = roomID[0]

		fmt.Println(msg.Message, "message here!!!")

		broadcast <- msg
		// data race??  // sending data to broadcaster go routine...
		//
	}
}
