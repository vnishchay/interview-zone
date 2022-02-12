import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import "./addQuestion.css";



export default function AddQuestion() {

  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async data => {
    axios.post("http://localhost:3001/question/create", data).then((res) => {
      console.log(res.data)
    })
  };

  // router.route('/question/create').post(questionController.addquestion)
  return (
    <div className="question-body">
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Question</h2>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>Question-Name</label>
                <input {...register("questionTitle", { required: true })} />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Question Category</label>

                <input {...register("questionCategory", { required: true })} />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Question Level</label>

                <input {...register("questionLevel", { required: true })} />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Examples</label>

                <input {...register("questionExample", { required: true })} />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Output</label>

                <input {...register("questionOutput", { required: true })} />
              </div>
            </div>

            {/* <div className="col">
            <div className="form-group">
              <label>Test case</label>

              <input {...register("dateOfQuestionAddition", { required: true })} />
            </div>
          </div> */}


            <div className="col">
              <div className="form-group">
                <label>Solution</label>

                <input {...register("bestSolution", { required: true })} />
              </div>
            </div>


            <div className="col">
              <input type="submit" value="Submit" />
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}


