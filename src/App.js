import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';

import Menu from "./components/Menu/Menu";
import Intro from "./components/Intro/Intro";
import Timeline from "./components/Timeline/Timeline";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'TimelineData.json',
      );
      setData(result.data.timelineCards);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="Sidebar__container">
        <Menu />
        <Intro />
        </div>
        <Timeline timelineCardData={data}/>
    </div>
  );
}

export default App;
