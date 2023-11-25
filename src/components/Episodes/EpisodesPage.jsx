import React, { useEffect, useState } from "react";
import axios from "axios";
import { EpisodeCard } from "./EpisodeCard";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/episodes/");
        setEpisodes(response.data);
      } catch (error) {
        console.error("Error fetching episodes: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-dark">
      <div className="d-flex flex-wrap justify-content-center m-3 p-3 bg-dark">
        {episodes && console.log(episodes)}
        {episodes &&
          episodes?.map((episode) => (
            <EpisodeCard episode={episode} key={episode.id} />
          ))}
      </div>
    </div>
  );
};

export default EpisodesPage;
