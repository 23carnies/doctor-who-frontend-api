import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function AddEpisode() {
  const navigate = useNavigate();
  const [episode, setEpisode] = useState({
    title: "",
    doctor: "",
    companion: "",
    summary: "",
  });

  const handleChange = (event) => {
    console.log(event);
    const { title, value } = event.target;
    setEpisode((prev) => {
      return {
        ...prev,
        [title]: value,
      };
    });
  };

  //   useEffect(() => {
  //     console.log(episode);
  //   }, [episode]);

  return (
    <div className="text-center w-50 bg-dark">
      <h1>Add Episode</h1>
      <Form>
        <Form.Group>
          <Form.Control
            name="title"
            value={episode.title}
            placeholder="Episode Title"
            onChange={handleChange}
          />
          <Form.Control
            name="doctor"
            value={episode.doctor}
            placeholder="Doctor Number"
            onChange={handleChange}
          />
          <Form.Control
            name="companion"
            value={episode.companion}
            placeholder="Companion Name"
            onChange={handleChange}
          />
          <Form.Control
            name="summary"
            value={episode.summary}
            placeholder="Episode Summary"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
}
