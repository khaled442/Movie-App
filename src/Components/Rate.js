import React from "react";

const Rate = ({ handelRate, searchRating }) => {
  const Stars = (n) => {
    var star = [];
    for (let index = 1; index <= 5; index++) {
      if (index <= n) {
        star.push(
          <span
            key={index}
            onClick={() => handelRate(index)}
            style={{ color: "gold", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else {
        star.push(
          <span
            key={index}
            onClick={() => handelRate(index)}
            style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      }
    }
    return star;
  };
  return <div>{Stars(searchRating)}</div>;
};

export default Rate;
