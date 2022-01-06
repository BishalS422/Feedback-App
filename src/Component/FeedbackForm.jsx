import React from "react";
import "../StyleSheet/FeedbackForm.css";
import Button from "./Shared/Button";

function FeedbackForm() {
  const [text, setText] = React.useState(""); // get text from input and set on text using use state
  const [btnDisable, setBthDisable] = React.useState(false);
  const handleChangetext = (e) => {
    if (text === "") {
      setBthDisable(true);
    }
    if (text !== "" && text.trim().length <= 10) {
      setBthDisable(true);
    } else {
      setBthDisable(false);
    }
    //setText(e.target.value); //set teh input value in setText
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
          <Button isDisabled={btnDisable}> send </Button>
        </div>
        <h2>{text}</h2>
      </form>
    </div>
  );
}

export default FeedbackForm;
