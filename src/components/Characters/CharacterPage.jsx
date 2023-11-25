import React, { useEffect, useState } from "react";
import axios from "axios";
import { CharacterCard } from "./CharacterCard";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/characters/"
        );
        setCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-dark">
      <div className="d-flex flex-wrap justify-content-center m-3 p-3 bg-dark">
        {characters && console.log(characters)}
        {characters &&
          characters?.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
      </div>
    </div>
  );
};

export default CharactersPage;
