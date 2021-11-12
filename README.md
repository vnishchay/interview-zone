# Interview-zone

An Interview platform where two people can conduct interview( one as Interviewer other as candidate). 

Routes 

router.route("/signup").post(userAddition);

router.route("/login").post(userLogin);

router.route("/authstatus").post(verifyToken, authstatus);

// ?

router.route("/addUser").post(verifyToken, savingUser);

router.route("/addquestion").post(verifyToken, savingQuestion);

// route to get question

router.route("/getquestion").post(verifyToken, getQuestions);

// webscraping route

router.route("/scrap").get(verifyToken, webscrapping);

//interview details adding route

router.route("/addInterviewDetails").post(verifyToken, savingInterviewDetails);

 

endpoints : 

 userlogin 

 userAddition 

savingInterviewDetails  

getquestions 

savingquestions 

savingUser 

middleware 

verifyToken 

sockets-event-listeners 

socket.on(videoCall) 

socket.on(chat-room)  

on get-document 

on audio-call 

on callUser 

on answerCall 

frontend Routes 

<Route path="/notfound" component={page_not_found}></Route>

<Route path="/home" component={HomePage} />

<Route path="/signup" component={Register} />

<Route path="/signin" component={Login} />

<Route path="/addproblem" component={addQuestion} />

<Route path="/interview/:id" component={InterviewPage} />

<Route path="/timer" component={Timer} />
