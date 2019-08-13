//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [down, setDown] = useState(0);
  const [quarter, setQuarter] = useState(0);
  const [toGo, setToGo] = useState(0);
  const [ballOn, setBallOn] = useState(0);
  

  const handleReset = e => {
    e.preventDefault();
    setHomeScore(0);
    setAwayScore(0);
    setDown(0);
    setQuarter(0);
    setToGo(0);
    setBallOn(0);
  };
  const [toGoNum, setToGoNum] = useState(0);
  const [ballOnNum, setBallOnNum] = useState(0);

  const handleToGoChange = event => {
    setToGoNum(event.target.value);
  };

  const handleBallOnChange = event => {
    setBallOnNum(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setToGo(toGoNum);
    setBallOn(ballOnNum);;
  };


return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow
    down={down}
     toGo ={toGo} 
    ballOn ={ballOn}
     quarter = {quarter}
  />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=> setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=> setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=> setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=> setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
        <div className="bottomRowButtons">
          <button className="down" onClick={()=> {
            if(down===4){
              setDown(0);
            }else{setDown(down +1)
            }}}>
              Down</button>
          <button className="quarter" onClick={()=> {
            if(quarter===4){
              setQuarter(0);
            }else{setQuarter(quarter +1)
            }}}>Quarter</button>
        </div>
        <div>
        <form onSubmit={event => handleSubmit(event)}>
        <label>
          <p>To Go: </p>
          <input type="text" onChange={event => handleToGoChange(event)} />
        </label>
        <label>
        <p>Ball On: </p>
          <input type="text" onChange={event => handleBallOnChange(event)} />
        </label>
        <button className="submitButton">Submit!</button>
      </form>
      </div>
      </section>
      <section>
      <button className="Reset" onClick={handleReset}>Reset</button>
      </section>
    </div>
  );
}

export default App;
