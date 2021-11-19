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
     /createInterview
     /getUser?id="" 

Middleware 

     verifyToken 

High level Diagram 

![interviewzone](https://user-images.githubusercontent.com/56715777/141655426-b532ee2f-86f9-48ca-99a7-62912a8af851.png)

Interview Service 

![interviewSErvice](https://user-images.githubusercontent.com/56715777/141655432-66bc494f-3f62-4836-8441-97456a6cc292.png)




Frontend Routes 

      <Route path="/home" component={HomePage} />

     <Route path="/signup" component={Register} />

     <Route path="/signin" component={Login} />

     <Route path="/addproblem" component={addQuestion} />

     <Route path="/interview/:id" component={InterviewPage} />
