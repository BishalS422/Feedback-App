import "../StyleSheet/FeedbackList.css";
import FeedbackIteam from "./FeedbackIteam";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <h2> No feedback found</h2>;
  }

  return (
    <div>
      {feedback.map((item) => (
        <FeedbackIteam key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
export default FeedbackList;
