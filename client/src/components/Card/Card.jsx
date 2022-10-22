import React from "react";
import { NavLink } from "react-router-dom";
import noImage from "../../img/noImage.png";

function Card(name, image, types, id) {
  return (
    <div>
      <NavLink to={`/pokemon/${id}`}>
        <div>
          <img
            src={image ? image : noImage}
            alt="img not found"
            width="250px"
            height="250vh"
          />
          <h2>{name.charAt(0).toUpperCase() + name.slice(1)} </h2>
          <div>
            {types?.map((e, k) => {
              return (
                <div key={k}>
                  <img src={e.img} alt="X" />
                  <p>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;
