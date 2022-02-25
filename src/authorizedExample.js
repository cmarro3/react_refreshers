import "./App.css";

const checkList = ["Boots", "Headlamp", "Tent"];
console.log(checkList[1]);

const SecretComponent = () => {
  return <h1>Super secret componet for authorized users</h1>;
};

const RegualrComponent = () => {
  return <h1>Everyone can see this. This is for the public</h1>;
};
function App(props) {
  return <>{props.authorized ? <SecretComponent /> : <RegualrComponent />}</>;
}
//Write this in your App.js file. <App authorized={true}/>
export default App;
