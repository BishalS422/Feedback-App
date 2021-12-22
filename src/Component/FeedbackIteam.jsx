import "../StyleSheet/FeedbackIteam.css";
import Card from "./Shared/Card";
import { FaTrash } from "react-icons/fa";

function FeedbackIteam({ item, handleDelete }) {
  return (
    <>
      <Card>
        <div className="num-display">{item.rating} </div>
        <div className="text-display">{item.text}</div>
        <button onClick={() => handleDelete(item.id)} className="delete-btn">
          <FaTrash />
        </button>
      </Card>
    </>
  );
}

export default FeedbackIteam;
