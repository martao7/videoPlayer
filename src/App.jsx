import { useState } from "react";
import React from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import VideoPicture from "./components/VideoPicture";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <>
      <div className="App">
        <VideoPicture />
        <div className="videoFrame">
          <div id="video">
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
