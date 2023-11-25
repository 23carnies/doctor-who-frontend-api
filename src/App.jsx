import "./App.css";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import EpisodesPage from "./components/Episodes/EpisodePage";

function App() {
  // const navigate = useNavigate();
  // const [episodes, setEpisodes] = useState();
  // useEffect(() => {
  //   axios
  //     .get("./episodes.json")
  //     .then((res) => setEpisodes(res.episodes))
  //     .catch((err) => console.log(err));
  // },[]);

  return <EpisodesPage />;
}

export default App;
