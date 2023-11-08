import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import { animals } from "./AnimalsList.js";
import { birds } from "./AnimalsList.js";

function App() {
  const [animalsData, setAnimals] = useState(animals);

  const removeHandler = (name) => {
    const updatedArray = animalsData.filter((animal) => animal.name !== name);
    setAnimals(updatedArray);
  };

  return (
    <>
      <Header logo="Animals" />
      <main>
        <div className="cards">
          {animalsData.map((animal) => (
            <Card
              key={animal.name}
              {...animal}
              close={() => removeHandler(animal.name)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
