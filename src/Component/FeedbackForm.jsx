import React from "react";
import "../StyleSheet/FeedbackForm.css";
import Button from "./Shared/Button";

function FeedbackForm() {
  const [text, setText] = React.useState(""); // get text from input and set on text using use state

  const handleChangetext = (e) => {
    setText(e.target.value); //set teh input value in setText
  };
  return (
    <div>
      <form className="feedbackForm">
        <input
          type="text"
          className="feedbackInput"
          onChange={handleChangetext}
          placeholder="write your review hear"
        />
        <div className="btn-form">
          <Button> send </Button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
