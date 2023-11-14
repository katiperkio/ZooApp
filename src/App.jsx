import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import { animals } from "./AnimalsList.js";
import { birds } from "./AnimalsList.js";

function App() {
  const [animalsData, setAnimals] = useState(animals);
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

  return (
    <>
      <Header logo="Animals" />
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

// Likes:
// When you click the likes, you have to know what animal was clicked.
// Function is taking the name and loops through the state to find the object that was clicked.
// Open the object, replace the likes and put the object back to updated array.
// You can have only one function for like and dislike. LikeHandler can handle both, it's a matter of + and -.
// e.g. addLikes{() => likesHandler(animal.name, "add")} and removeLikes{() => likesHandler(animal.name, "remove")}.
