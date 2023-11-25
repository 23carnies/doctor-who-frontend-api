import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import EpisodesPage from "../Episodes/EpisodesPage";

function Episodes() {
  return (
    <>
    <div className="episodes">
      <h1>Episodes</h1>
      <AiOutlineMail className="page-icon" />
    </div>
      <EpisodesPage />
    </>
  );
}

export default Episodes;
