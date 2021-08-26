package main

import (
	"fmt"
	"interviewservice/app/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	handlers.AllRooms.Init()
	fmt.Println("Hello interview Service")
	router := gin.Default()
	router.GET("/create", handlers.CreateRoomRequestHandler)
	router.GET("/join", handlers.JoinRoomRequestHandler)
	router.Run("localhost: 8080")
}
