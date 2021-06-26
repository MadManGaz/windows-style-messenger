import "./App.css";
import { testData } from "./util/testData.json";

const NameList = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <div>
          <h1>
            {person.firstName} {person.lastName}
          </h1>
          <p>{person.age}</p>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameList people={testData} />
      </header>
    </div>
  );
}

export default App;
