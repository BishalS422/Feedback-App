import Header from "./Component/Header";
import FeedbackIteam from "./Component/FeedbackIteam";
import { FeedbackData } from "./Data/FeedbackData";
import FeedbackList from "./Component/FeedbackList";
function App() {
  const feedback = FeedbackData;
  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
    </>
  );
}
export default App;
