import { useState } from "react";
import React from "react";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="like-it">
        <p>If you like this video, click here:</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Like {count}
        </button>
        <button id="sub" onClick>
          Subscribe
        </button>
      </div>
    </>
  );
}

export default Footer;
