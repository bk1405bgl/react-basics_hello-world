import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorld />;
}

function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        This is rendered by <strong>React!</strong>
      </p>
    </div>
  );
}
