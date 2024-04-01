import Layout from "./Components/LayOut";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Layout isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
