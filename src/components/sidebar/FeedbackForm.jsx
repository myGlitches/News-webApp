import React from "react"

function FeedbackForm() {
  return (
    <div className="feedbackContainer">
      <div className="feedbackTitle">
        Thank you so much for taking the time!
      </div>
      <div className="feedbackformContainer">
        <div className="formElements">
          <p className="formelementTitle">First Name: </p>
          <input type="text" placeholder="Ex: John" />
        </div>
        <div className="formElements">
          <p className="formelementTitle">Last Name: </p>
          <input type="text" placeholder="Ex: Doe" />
        </div>
        <div className="formElements">
          <p className="formelementTitle">Address: </p>
          <input
            className="addressinputField"
            type="text"
            placeholder="Ex: 13/A Tres Passex"
          />
        </div>
        <div className="formElements">
          <p className="formelementTitle">Country: </p>
          <input type="text" placeholder="Ex: India" />
        </div>
        <div className="formElements">
          <p className="formelementTitle">Email ID: </p>
          <input type="text" placeholder="Ex: abc@xyz.com" />
        </div>
        <div className="formElements">
          <p className="formelementTitle">Phone Number: </p>
          <input type="text" placeholder="Ex: 990887654" />
        </div>
        <button className="submitFormButton">Submit Feedback</button>
      </div>
    </div>
  )
}

export default FeedbackForm
