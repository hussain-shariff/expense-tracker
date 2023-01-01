import React from "react";
import Header from "./components/Header";
import History from "./components/History";

function App() {
  return (
    <>
      <h2>Expense Tracker</h2>
      <div class="container">
        <Header/>
        <History/>
        
      </div>
    </>
  );
}

export default App;
