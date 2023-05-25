import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Welcome to Fugglehump's Emporium</h1>
        <h2>Site is brewing and may take some time check in later</h2>
        <p>Apps coming soon</p>
      </div>
    </>
  );
}

export default App;
