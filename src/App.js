import Header from "./Component/Header";
import React from "react";
import { FeedbackData } from "./Data/FeedbackData";
import FeedbackList from "./Component/FeedbackList";

function App() {
  const [feedback, setFeedback] = React.useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}
export default App;
