import "../StyleSheet/FeedbackIteam.css";
import Card from "./Shared/Card";

function FeedbackIteam({ item }) {
  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
}

export default FeedbackIteam;
