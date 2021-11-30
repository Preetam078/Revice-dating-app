import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./SwipeCard.css";

function SwipeCard() {
  const [people, setPeople] = useState([
    {
      name: "Chris Evans",
      url: "https://i0.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2020/07/defending-jacob-chris-evans.jpg?fit=646%2C431&ssl=1",
    },
    {
      name: "Robert Downey Jr",
      url: "https://images.news18.com/ibnlive/uploads/2017/06/1665.jpg?impolicy=website&width=510&height=356",
    },
    {
      name: "Scarlett Johansson",
      url: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/03/149444.jpg",
    },
    {
      name: "Gemma Chan",
      url: "https://assets.vogue.com/photos/5fb3e9aef90f3ca598330d61/16:9/w_4000,h_2250,c_limit/00-gemma-chan-square.jpg",
    },
    {
      name: "Richard Madden",
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/richard-madden-attends-the-the-eternals-uk-premiere-at-bfi-news-photo-1636574957.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="swipeCards">
      <div className="swipeCard__CardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default SwipeCard;
