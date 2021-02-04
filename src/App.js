import "./App.css";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav";
import { ModalProvider } from "./Components/ModalContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Router>
          <Nav />
          {/* Main contains side bas and main section */}
          <Main />
        </Router>
      </div>
    </ModalProvider>
  );
}

export default App;
