import React from "react";

function FeedbackStatus({ feedback }) {
  let sum = 0;

  for (let value of feedback) {
    sum = value.rating + value.rating;
  }

  const average = (sum / feedback.length).toPrecision(3);

  return (
    <div>
      <h2> {feedback.length} Review</h2>
      <h2> Average Review:{average}</h2>
    </div>
  );
}

export default FeedbackStatus;
