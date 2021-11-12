# Interview-zone

    An Interview platform where two people can conduct interview( one as Interviewer other as candidate). 


Setup 

     git clone http://codernishchay/interview-zone 
     cd interview-zone 
     cd InterviewService 
     npm i  // install packages required. 
     yarn dev 
     // http://localhost://3001 
     
     cd frontend   // new terminal tab 
     npm i 
     yarn start   
     // http://localhost:3000 
     


Backend endpoints : 
     
     /login 
     /sigup
     /addUser 
     /saveInterviewDetails  
     /getquestions 
     /savequestions
     /getUser?id="" 

Middleware 

     verifyToken 


Frontend Routes 

     <Route path="/notfound" component={page_not_found}></Route>

     <Route path="/home" component={HomePage} />

     <Route path="/signup" component={Register} />

     <Route path="/signin" component={Login} />

     <Route path="/addproblem" component={addQuestion} />

     <Route path="/interview/:id" component={InterviewPage} />

     <Route path="/timer" component={Timer} />
