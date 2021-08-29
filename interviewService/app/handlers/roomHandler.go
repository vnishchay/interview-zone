package handlers

import (
	"fmt"
	"log"
	"math/rand"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

// Participant describes a single entity in the hashmap
type Participant struct {
	Host   bool
	inRoom bool
	Conn   *websocket.Conn
}

type Room struct {
	P1 Participant
	P2 Participant
}

// RoomMap is the main hashmap [roomID string] -> [[]Participant]
type RoomMap struct {
	Mutex sync.RWMutex
	Map   map[string]Room
}

// Init initialises the RoomMap struct
func (r *RoomMap) Init() {
	r.Map = make(map[string]Room)
}

// Get will return the array of participants in the room
func (r *RoomMap) Get(roomID string) Room {
	r.Mutex.RLock()
	defer r.Mutex.RUnlock()

	return r.Map[roomID]
}

// CreateRoom generate a unique room ID and return it -> insert it in the hashmap
func (r *RoomMap) CreateRoom() string {
	r.Mutex.Lock()
	defer r.Mutex.Unlock()

	rand.Seed(time.Now().UnixNano())
	var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")
	b := make([]rune, 8)

	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}

	roomID := string(b)
	r.Map[roomID] = Room{}

	return roomID
}

// InsertIntoRoom will create a participant and add it in the hashmap
func (r *RoomMap) InsertIntoRoom(roomID string, host bool, conn *websocket.Conn) {
	r.Mutex.Lock()
	defer r.Mutex.Unlock()
	fmt.Println(r.Map[roomID], "1")
	log.Println("Inserting into Room with RoomID: ", roomID)
	if r.Map[roomID].P1.inRoom && r.Map[roomID].P2.inRoom {
		fmt.Println(r.Map[roomID], "2")
		return
	}
	if !r.Map[roomID].P1.inRoom {
		fmt.Println(r.Map[roomID], "3")
		r.Map[roomID] = Room{P1: Participant{host, true, conn}, P2: Participant{}}
		fmt.Println(r.Map[roomID], "4")
		// fmt.Println("heree some error ??", "joined as users")
	} else {
		fmt.Println(r.Map[roomID], "5")
		p := r.Map[roomID].P1
		r.Map[roomID] = Room{P2: Participant{host, true, conn}, P1: p}
		fmt.Println(r.Map[roomID], "6")
	}

}

// DeleteRoom deletes the room with the roomID
func (r *RoomMap) DeleteRoom(roomID string) {
	r.Mutex.Lock()
	defer r.Mutex.Unlock()

	delete(r.Map, roomID)
}

///int solution()
// {
//     int n, mxVowel, mxConso, cntVowel, cntConso;
//     string s;
//     cin >> s;

//     n = s.size();

//     vector<int> letter(26, 0);

//     for (int i = 0; i < n; i += 1)
//     {
//         letter[s[i] - 'A'] += 1;
//     }

//     mxVowel = mxConso = cntVowel = cntConso = 0;
//     for (int i = 0; i < 26; i += 1)
//     {
//         if (letter[i])
//         {
//             if (i == 0 or i == 4 or i == 8 or i == 14 or i == 20)
//             {
//                 mxVowel = max(mxVowel, letter[i]);
//                 cntVowel += letter[i];
//             }
//             else
//             {
//                 mxConso = max(mxConso, letter[i]);
//                 cntConso += letter[i];
//             }
//         }
//     }

//     int res = (n - mxConso + (cntConso - mxConso));
//     res = min(res, (n - mxVowel + (cntVowel - mxVowel)));
//     return res;
// }

/**
 *    author:  tourist1256
 *    created: 27.08.2021 22:34:40
**/
/**
#include <bits/stdc++.h>

using namespace std;

#ifdef LOCAL
#define debug(...) cerr << "[" << #__VA_ARGS__ << "]:", debug_out(__VA_ARGS__)
#else
#define debug(...) 2351
#endif

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    int tt;
    cin >> tt;
    for (int x = 1; x <= tt; x++) {
        cout << "Case #" << x << ": ";
        string str;
        cin >> str;
        if (count(str.begin(), str.end(), str[0]) == (int)str.length()) {
            cout << "0\n";
            continue;
        }
        set<char> vowel = {'A', 'E', 'I', 'O', 'U'};
        map<char, int> v, c;
        int cntV = 0, cntC = 0;
        for (auto &ch : str) {
            if (vowel.find(ch) != vowel.end()) {
                cntV += 1;
                v[ch] += 1;
            } else {
                cntC += 1;
                c[ch] += 1;
            }
        }
        if (v.empty()) {
            cout << (int)str.length() << "\n";
            continue;
        }
        int maxi = 0;
        char termV, termC;
        for (auto &it : c) {
            if (maxi < it.second) {
                termC = it.first;
                maxi = it.second;
            }
        }
        maxi = 0;
        for (auto &it : v) {
            if (maxi < it.second) {
                termV = it.first;
                maxi = it.second;
            }
        }
        // cerr << termC << " " << termV << "\n";
        auto change = [&](char toChange) {
            int steps = 0;
            for (auto &it : str) {
                if (it == toChange) {
                    continue;
                }
                if (vowel.find(it) != vowel.end()) {
                    if (vowel.find(toChange) != vowel.end()) {
                        steps += 2;
                    } else {
                        steps += 1;
                    }
                } else {
                    if (vowel.find(toChange) != vowel.end()) {
                        steps += 1;
                    } else {
                        steps += 2;
                    }
                }
            }
            return steps;
        };
        int ans1 = change(termC);
        int ans2 = change(termV);
        cout << min(ans1, ans2) << "\n";
    }
    return 0;
}
**/
