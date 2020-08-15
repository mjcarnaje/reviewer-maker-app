import React from "react";
import Layout from "./hoc/Layout/Layout";
// import HomeContainer from "./containers/HomeContainer/HomeContainer";
import QuestionContainer from "./containers/QuestionContainer/QuestionContainer";

function App() {
  return (
    <div className="App">
      <Layout>
        {
          // <HomeContainer />
          <QuestionContainer />
        }
      </Layout>
    </div>
  );
}

export default App;
