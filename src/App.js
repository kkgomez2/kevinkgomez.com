import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Sidebar/>
        </div>
        <div class="c-main">
          <div class="main">
            <h1>Kevin K Gomez does stuff.</h1>
            <div class="main__text">
              <p>
                I can make words with my voice, lines of code, and{" "}
                <a href="https://youtu.be/x5-QoCicNfI">spinach puffs</a>.
              </p>
              <p>
                Please contact me if you'd like me to make any of those things.
                I would love to.
              </p>
            </div>
            <div class="main__contact">
              <div>
                <a
                  href="media/Kevin Gomez Dev Resume (2016).pdf"
                  target="_blank"
                >
                  <b>Dev Resume</b>
                </a>
                |
                <a
                  href="media/Kevin Gomez Actors Resume (2020).pdf"
                  target="_blank"
                >
                  <b>Actors Resume</b>
                </a>
                |
                <a
                  href="https://soundcloud.com/smithu-1/sets/voice-over-demos"
                  target="_blank"
                >
                  <b>Voice Demos</b>
                </a>
              </div>
              <div>
                <a href="mailto:kkristoffergomez@gmail.com">Email</a> |
                <a href="mailto:kevinkgomezvo@gmail.com">Voice Over Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
