import ResultSection from "./components/ResultSection";
import SummarySection from "./components/Summary/SummarySection";
import ContinueButton from "./components/ContinueButton";
import "./styles.css";

//Allows access to a module outside
export default function App() {
  return (
    <div className="App">
      {/*Adds components made with react-js + other html elements*/}
      <ResultSection />
      <SummarySection />
      <ContinueButton />
    </div>
  );
}
