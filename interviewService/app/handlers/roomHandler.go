package handlers

import (
	"log"
	"math/rand"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

type Participant struct {
	Host bool
	Conn *websocket.Conn
}

type RoomMap struct {
	Mutex sync.RWMutex
	Map   map[string][]Participant
}

// init initialises the room struct
func (r *RoomMap) Init() {
	r.Map = make(map[string][]Participant)
}

//Get all the array of participants in room
func (r *RoomMap) Get(roomID string) []Participant {
	r.Mutex.RLock()
	defer r.Mutex.RUnlock()
	return r.Map[roomID]
}

// generate the unique id and insert in hashmap
func (r *RoomMap) CreateRoom() string {
	r.Mutex.Lock()
	defer r.Mutex.Unlock()
	rand.Seed(time.Now().UnixNano())
	var letters = []rune("abdenfigniklmnopqurstowxfg")
	b := make([]rune, 8)
	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}
	roomID := string(b)
	r.Map[roomID] = []Participant{}
	return roomID
}

func (r *RoomMap) InsertInRoom(roomID string, host bool, conn *websocket.Conn) {
	r.Mutex.Lock()
	defer r.Mutex.Unlock()
	p := Participant{Host: host, Conn: conn}
	log.Println("inserting into room with room ID", roomID)

	r.Map[roomID] = append(r.Map[roomID], p)

}

func (r *RoomMap) DeleteRoom(roomID string) {
	r.Mutex.Lock()
	defer r.Mutex.Unlock()
	delete(r.Map, roomID)
}
