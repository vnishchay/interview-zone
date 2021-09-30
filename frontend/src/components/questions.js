
import React from 'react'
import "../styles/questions.css"
import {useEffect, useState } from 'react';
const axios = require("axios") ; 

export default function Questions() {
  
    const [questions, setquestions] = useState([]); 
    useEffect(() => {
      const getquestion = async()=>{
        const url = "http://localhost:3001/getquestion" ; 
       
       await  axios.post(url,{
              "level": "easy" 
       }, {
           headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("jwt"), 
            // 'Content-Type': 'application/x-www-form-urlencoded'
           }, 
       }).then((res)=>{
            if(res.message === "Invalid Token"){
                console.log("Invalid Token")
            }
            setquestions(res.data);             
        })
    }
    getquestion(); 
}, [])
console.log(questions)
// [ {},  {}]
// undefined
// undefined

// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {_id: '6155ecc18a3891089b530a29', dateOfQuestionAddition: '30-09-2021', question: 'req.bodydafdsfdsfasdfgaedf.qsdfdsfsdsfadsfdfgartggdaferewdsdfuestion', questionLevel: 'easy', questionOutput: 'req.DAFdfADFSDFGADGfdgfdsgFDSbody.ADFGAFDquestiddaFDFDSAFDGsfdafonOutput', …}
// 1: {_id: '6155ece18a3891089b530a2f', dateOfQuestionAddition: '30-09-2021', question: 'dsafreqdsf.bodydafdsfdsfasdfgaedf.qdsafadsfsdfdsfsdsfadsfdfgartggdaferewdsdfuestion', questionLevel: 'easy', questionOutput: 'dsafsdareq.DAFdfADFSDFGADGfdgfdsgFDSbody.ADFGAFDquestiddaFDFDSAFDGsfdafonOutput', …}
// 2: {_id: '6155ecdb8a3891089b530a2d', dateOfQuestionAddition: '30-09-2021', question: 'dsafreqdsf.bodydafdsfdsfasdfgaedf.qdsafadsfsdfdsfsdsfadsfdfgartggdaferewdsdfuestion', questionLevel: 'easy', questionOutput: 'dsafsdareq.DAFdfADFSDFGADGfdgfdsgFDSbody.ADFGAFDquestiddaFDFDSAFDGsfdafonOutput', …}
// 3: {_id: '6155ecb98a3891089b530a27', dateOfQuestionAddition: '30-09-2021', question: 'req.bodydafdsfaedf.qsdfdsfsdsfadsfdfgartggdaferewdsdfuestion', questionLevel: 'easy', questionOutput: 'req.DAFdfADFSDFGADGFDSbody.ADFGAFDquestiddaFDFDSAFDGsfdafonOutput', …}
// 4: {_id: '6155ece58a3891089b530a31', dateOfQuestionAddition: '30-09-2021', question: 'dsafreqdsf.bodydafdsfdsfasdfgaedf.qdsafadsfsdfdsfsdsfadsfdfgartggdaferewdsdfuestion', questionLevel: 'easy', questionOutput: 'dsafsdadsfadsfreq.DAFdfADFSDFGADGfdgfdsgFDSbody.ADFGAFDquestiddaFDFDSAFDGsfdafonOutput', …}
// length: 5


return (
        <div className="question-container"> 
            {questions[0].dateOfQuestionAddition}
        </div>
         
     )
}





// questions.js:45 Uncaught TypeError: Cannot read properties of undefined (reading 'dateOfQuestionAddition')
//     at Questions (questions.js:45)
//     at renderWithHooks (react-dom.development.js:14985)
//     at mountIndeterminateComponent (react-dom.development.js:17811)
//     at beginWork (react-dom.development.js:19049)
//     at HTMLUnknownElement.callCallback (react-dom.development.js:3945)
//     at Object.invokeGuardedCallbackDev (react-dom.development.js:3994)
//     at invokeGuardedCallback (react-dom.development.js:4056)
//     at beginWork$1 (react-dom.development.js:23964)
//     at performUnitOfWork (react-dom.development.js:22776)
//     at workLoopSync (react-dom.development.js:22707)
//     at renderRootSync (react-dom.development.js:22670)
//     at performSyncWorkOnRoot (react-dom.development.js:22293)
//     at react-dom.development.js:11327
//     at unstable_runWithPriority (scheduler.development.js:468)
//     at runWithPriority$1 (react-dom.development.js:11276)
//     at flushSyncCallbackQueueImpl (react-dom.development.js:11322)
//     at flushSyncCallbackQueue (react-dom.development.js:11309)
//     at flushSync (react-dom.development.js:22467)
//     at Object.scheduleRoot (react-dom.development.js:24444)
//     at react-refresh-runtime.development.js:284
//     at Set.forEach (<anonymous>)
//     at Object.performReactRefresh (react-refresh-runtime.development.js:263)
//     at RefreshUtils.js:62
// Questions @ questions.js:45
// renderWithHooks @ react-dom.development.js:14985
// mountIndeterminateComponent @ react-dom.development.js:17811
// beginWork @ react-dom.development.js:19049
// callCallback @ react-dom.development.js:3945
// invokeGuardedCallbackDev @ react-dom.development.js:3994
// invokeGuardedCallback @ react-dom.development.js:4056
// beginWork$1 @ react-dom.development.js:23964
// performUnitOfWork @ react-dom.development.js:22776
// workLoopSync @ react-dom.development.js:22707
// renderRootSync @ react-dom.development.js:22670
// performSyncWorkOnRoot @ react-dom.development.js:22293
// (anonymous) @ react-dom.development.js:11327
// unstable_runWithPriority @ scheduler.development.js:468
// runWithPriority$1 @ react-dom.development.js:11276
// flushSyncCallbackQueueImpl @ react-dom.development.js:11322
// flushSyncCallbackQueue @ react-dom.development.js:11309
// flushSync @ react-dom.development.js:22467
// scheduleRoot @ react-dom.development.js:24444
// (anonymous) @ react-refresh-runtime.development.js:284
// performReactRefresh @ react-refresh-runtime.development.js:263
// (anonymous) @ RefreshUtils.js:62
// setTimeout (async)
// enqueueUpdate @ RefreshUtils.js:60
// (anonymous) @ questions.js:8
// ./src/components/questions.js @ questions.js:8
// __webpack_require__ @ bootstrap:851
// fn @ bootstrap:150
// (anonymous) @ index.js:16
// ./src/pages/InterviewPage.js @ InterviewPage.js:11
// __webpack_require__ @ bootstrap:851
// hotApplyInternal @ bootstrap:749
// hotApplyInternal @ bootstrap:790
// hotApply @ bootstrap:411
// (anonymous) @ bootstrap:386
// Promise.then (async)
// hotUpdateDownloaded @ bootstrap:385
// hotAddUpdateChunk @ bootstrap:361
// webpackHotUpdateCallback @ bootstrap:57
// (anonymous) @ main.3e1f17b6f4e94ad589ed.hot-update.js:1