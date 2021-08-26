package models

type User struct {
	ID            string `json:"id"`
	Name          string `json: "name"`
	Username      string `json: "username"`
	Country       string `json: "country"`
	Language      string `json: "language"`
	Ratings       int    `json:"rating"`
	NoOfInterview int    `json:"noofinterview"`
}
