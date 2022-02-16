import './App.css';
import React from "react"
import DownloadMenu from './Components/DownloadMenu';
import NavBar from "./Components/NavBar";
import EnvMenu from "./Components/EnvMenu";
import MyChart from './Components/MyChart';
import TagMenu from './Components/TagMenu';
import GraphMenu from './Components/GraphMenu';
import TimeSlider from './Components/TimeSlider';
import "./Components/TagMenu.css"
import "./Components/DownloadMenu.css"
import "./Components/EnvMenu.css"
import "./Components/MyChart.css"
// Should be able to put this in the components file and separate out the css
// Should be able to put this in the components file and separate out the css
// Should be able to put this in the components file and separate out the css

// Should be able to put this in the components file and separate out the css
// Should be able to put this in the components file and separate out the css
// Should be able to put this in the components file and separate out the css


function App() {
  return (
    <div className="App">
      <NavBar />
      <TimeSlider />
      <body className="App-header">
        <button className="Download-button">Download</button>
        <DownloadMenu />
        <MyChart />
        <GraphMenu />
        <EnvMenu />
        <TagMenu />
      </body>
    </div>
  );
}

export default App;
