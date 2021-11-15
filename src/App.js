import "./App.css";
import Router from "./router";
import { Footer } from "components/footer";
import { NavBar } from "components/header";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
