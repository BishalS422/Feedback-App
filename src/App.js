import Header from "./Component/Header";
import React from "react";
import { FeedbackData } from "./Data/FeedbackData";
import FeedbackList from "./Component/FeedbackList";
import FeedbackStatus from "./Component/FeedbackStatus";

function App() {
  const [feedback, setFeedback] = React.useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <FeedbackStatus feedback={feedback} />

      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}
export default App;
