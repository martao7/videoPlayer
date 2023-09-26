import { useState } from "react";
import React from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);

  const videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <>
      <div className="App">
        <div className="videoFrame">
          <h1>React Video Player</h1>
          <div id="video">
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        </div>

        <div className="like-it">
          <p>If you like this video, click here:</p>
          <button onClick={() => setCount((count) => count + 1)}>
            Like {count}
          </button>
          <button id="sub" onClick>
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
