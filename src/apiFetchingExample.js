import { useState, useEffect } from "react";
import "./App.css";

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if(!login) return; 
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(()=> setLoading(false))
      .catch(setError);
  }, [login]);

  if(loading) return <h1>Loading ..</h1>
  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  if (data) {
    return (<div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src ={'https://http.cat/405'} height ={'300'}/>
    </div>);
  }
  return <div> No data here</div>;
}

export default App;
