import React from "react";

function FeedbackStatus({ feedback }) {
  // hear we use reduce fuction to add rating of all feedback
  const sumRating = feedback.reduce(
    (total, feedback) => total + feedback.rating,
    0
  );
  console.log(sumRating);

  const average = (sumRating / feedback.length).toPrecision(3);

  return (
    <div>
      <h2> {feedback.length} Review</h2>

      <h2> Average Review:{average}</h2>
    </div>
  );
}

export default FeedbackStatus;
