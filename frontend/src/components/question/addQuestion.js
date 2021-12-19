import React from 'react'
import "./addQuestion.css"; 

export default function addQuestion() {
   

  return (
        <div className="question-body">
            <div class="card">
  <h2>Add Question</h2>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label>Question-Name</label>
        <input type="text"/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Question</label>
        <input type="text"/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Inputs</label>
        <input type="text"/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Output</label>
        <input type="text"/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Test case</label>
        <textarea></textarea>
      </div>
    </div>

    <div class="col">
      <input type="submit" value="Submit"/>
    </div>
  </div>
</div>
        </div>
    )
}
