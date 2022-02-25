import "./App.css";
import burger from "./burger.jpg"

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <img src={burger} height={200} alt="food at a table"/>
      <ul style={{ textAlign: "center" }}>
        {props.dishes.map((dishes) => (
          <li key={dishes.id}>{dishes.title}</li>
        ))}
      </ul>
    </section>
  );
}
function Header(props) {
  return (
    <header>
      <h1>{props.name} Kitchen</h1>
    </header>
  );
}

const dishes = [
  "Turkey Sandwich",
  "Macaroni and Cheese",
  "Chicken Soup",
  "Cheeseburger",
];
const dishObjects = dishes.map((dishes, i) => ({ id: i, title: dishes }));

function App() {
  return (
    <div className="App">
      <Header name="Chris" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
