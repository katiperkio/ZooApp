import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import { animals } from "./AnimalsList.js";
import { birds } from "./AnimalsList.js";

function App() {
  const allAnimals = [...animals, ...birds];
  const [animalsData, setAnimals] = useState(allAnimals);
  const [search, setSearch] = useState("");

  const removeHandler = (name) => {
    const updatedArray = animalsData.filter((animal) => animal.name !== name);
    setAnimals(updatedArray);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const likesHandler = (name, action) => {
    const updatedArray = animalsData.map((animal) => {
      if (animal.name === name) {
        if (action === "like") {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });
    setAnimals(updatedArray);
  };

  const displayAnimalsHandler = (display) => {
    if (display === "animals") {
      setAnimals(animals);
    } else if (display === "birds") {
      setAnimals(birds);
    } else {
      setAnimals(allAnimals);
    }
  };

  return (
    <>
      <Header displayAnimalsHandler={displayAnimalsHandler} />
      <main>
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={searchHandler}
        />
        <div className="cards">
          {animalsData
            .filter((animal) =>
              animal.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((animal) => (
              <Card
                key={animal.name}
                {...animal}
                close={() => removeHandler(animal.name)}
                like={() => likesHandler(animal.name, "like")}
                dislike={() => likesHandler(animal.name, "dislike")}
                votes={animal.likes}
              />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
