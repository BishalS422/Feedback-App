import React from "react";
import "../StyleSheet/FeedbackForm.css";
import Button from "./Shared/Button";

function FeedbackForm() {
  return (
    <div>
      <form className="feedbackForm">
        <input type="text" className="feedbackInput" />
        <div className="btn-form">
          <Button> send </Button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
