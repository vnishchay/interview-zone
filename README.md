# Interview-zone

    An Interview platform where two people can conduct interview( one as Interviewer other as candidate). 


#Backend endpoints : 
     
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
