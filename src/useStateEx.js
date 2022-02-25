import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");
  // console.log(emotion);
  const [secondary, setSecondary] = useState("tried");
  useEffect(() => {
    console.log(`It's ${emotion} aound here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary])
  return (
    <>
      <h1>current feeling is {emotion, secondary}</h1>
      <button onClick={() => setSecondary("Crabby")}>Make Crabby</button>
      <button onClick={() => setEmotion("Sad")}>Sad</button>
      <button onClick={() => setEmotion("Energetic")}>Energetic</button>
    </>
  );
}

export default App;
