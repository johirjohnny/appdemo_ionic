import React from "react";
import { useParams } from "react-router-dom";

const ReleaseDetails = ({ data }) => {
  const { name } = useParams();
  return (
    <div className="full-detail">
      <div className="explore-container">
        {data
          .filter((list) => list.name === name)
          .map((list) => (
            <div className="full-card" key={list.id}>
              <h2>Name: {list.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReleaseDetails;
