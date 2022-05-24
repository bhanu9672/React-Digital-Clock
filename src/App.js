import React, { useState } from "react";

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime,setCtime] = useState(time);

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(UpdateTime,1000);

  return(
    <>
      <div className="clock-main-div">
        <h1 className="clock-title"> Digital Clock </h1>
        <h1 className="clock-h1"> {ctime} </h1>
      </div>
    </>
  )

}

export default App;