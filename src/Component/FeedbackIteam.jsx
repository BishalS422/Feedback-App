import "../StyleSheet/FeedbackIteam.css";

function FeedbackIteam({ item }) {
  return (
    <>
      <div className="card">
        <div>
          {item.rating}
          {item.text}
        </div>
      </div>
    </>
  );
}

export default FeedbackIteam;
