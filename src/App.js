import "./App.css";
import Header from "./components/Header/Header";
import SwipeButton from "./components/SwipeButton/SwipeButton";
import SwipeCard from "./components/SwipeCard/SwipeCard";

function App() {
  //BEM className Naming Convention
  return (
    <div className="app">
      <Header />
      <SwipeCard />
      <SwipeButton />
    </div>
  );
}

export default App;
