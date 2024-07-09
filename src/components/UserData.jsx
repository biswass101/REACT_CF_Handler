import React from "react";
import Card from "./Card";

const UserData = ({ data }) => {
  let getData = [];
  if (Object.keys(data).length != 0) {
    // console.log(data);
    getData = data.result;
  }
//   console.log(getData[0]);
  return (
    <div className="user-data-container">
      {getData[0] ? (
        <Card 
            img={getData[0].avatar} 
            fName={getData[0].firstName}
            lName={getData[0].lastName}
            handle = {getData[0].handle}
            rating = {getData[0].rating}
            maxRating = {getData[0].maxRating}
            rank = {getData[0].rank}
            maxRank = {getData[0].maxRank}
        />
      ) : (
        <>Not Found</>
      )}
    </div>
  );
};

export default UserData;
