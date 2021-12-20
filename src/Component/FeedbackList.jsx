import "../StyleSheet/FeedbackList.css";
import FeedbackIteam from "./FeedbackIteam";
function FeedbackList({ feedback }) {
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackIteam key={item.id} item={item} />
      ))}
    </div>
  );
}
export default FeedbackList;
