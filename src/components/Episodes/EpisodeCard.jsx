import { Card, Button } from "react-bootstrap";
// import "../App.css";

export function EpisodeCard({ episode }) {
  const getRandomImage = (title) => {
    title = title.split(" ");
    let random;
    if (title === "The ") {
      random = title[1];
    } else {
      random = title;
    }
    return `https://source.unsplash.com/random/400x300/?${random}`;
  };

  return (
    <Card className="m-2 tardis-card">
      {episode.image ? (
        <Card.Img variant="top" src={episode.image} alt={episode.title} />
      ) : (
        <Card.Img
          variant="top"
          src={getRandomImage(episode.title)}
          alt="Random Image"
        />
      )}
      <Card.Body className="p-3">
        <Card.Title className="text-center h4 fst-italic">
          {episode.title}
        </Card.Title>
        <div className="d-flex">
          <Card.Text className="h5">
            S{episode.series}E{episode.seriesEpisode}
          </Card.Text>
          <Card.Text className="text-center">
            Rating: {episode.rating}/10
          </Card.Text>
        </div>
        <Card.Text>Written by: {episode.writer}</Card.Text>
        <Card.Text>Directed by: {episode.director}</Card.Text>
        <Card.Text>Synopsis: {episode.synopsis}</Card.Text>
      </Card.Body>
      <Card.Footer className="ms-auto p-3">
        <Button variant="warning" onclick="{episode.imdbLink}">
          IMDB
        </Button>
      </Card.Footer>
    </Card>
  );
}
