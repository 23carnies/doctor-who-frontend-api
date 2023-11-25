import { Card, Button } from "react-bootstrap";
// import "../App.css";

export function CharacterCard({ character }) {
  const getRandomImage = (name,num) => {
    let random;
    if (name === "The Doctor") {
        random = num;
    } else {
        name = name.split(" ");
        random = name[0];
    }
    return `https://source.unsplash.com/random/400x300/?${random}`;
  };

  return (
    <Card className="m-2 tardis-card">
      {character.image ? (
        <Card.Img variant="top" src={character.image} alt={character.name} />
      ) : (
        <Card.Img
          variant="top"
          src={getRandomImage(character.name,character.doctorNumber)}
          alt="Random Image"
        />
      )}
      <Card.Body className="p-3">
        <div className="text-center">
        <Card.Title className="text-center h4 fst-italic">
          {character.charType === 'DOCTOR' ? 
            (typeof character.doctorNumber === 'number' ?
            `Doctor # ${character.doctorNumber}`
                : character.specialDoctor)
            : (character.name,character.charType)
          }
        </Card.Title>
          <Card.Text className="h5">{character.planetOfOrigin}</Card.Text>
          <Card.Text className="text-center">{character.actor}</Card.Text>
        </div>
        {/* <Card.Text>Written by: {character.writer}</Card.Text>
        <Card.Text>Directed by: {character.director}</Card.Text>
        <Card.Text>Synopsis: {character.synopsis}</Card.Text> */}
      </Card.Body>
      <Card.Footer className="ms-auto p-3">
        {/* <Button variant="warning" onclick="{character.imdbLink}">
          IMDB
        </Button> */}
      </Card.Footer>
    </Card>
  );
}
