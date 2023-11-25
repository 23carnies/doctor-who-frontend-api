import react from "react";
import { CgGhostCharacter } from "react-icons/cg";
import CharactersPage from "../Characters/CharacterPage";

function Characters() {
  return (
    <>
      <div className="characters">
        <h1 className="h1">Characters</h1>
        <CgGhostCharacter className="page-icon" />
      </div>
      <CharactersPage />
    </>
  );
}

export default Characters;
