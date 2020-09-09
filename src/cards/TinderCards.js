import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { db } from "../firebase";
import "./TinderCard.css";
import SwipeButton from "./SwipeButton";
const TinderCards = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("peoples").onSnapshot((snapshot) => {
      setPeoples(snapshot.docs.map((doc) => doc.data()));
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <React.Fragment>
      <div className="tinderCards">
        <div className="tinderCards__cardContainer">
          {peoples.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${person.url})` }}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      <SwipeButton />
    </React.Fragment>
  );
};

export default TinderCards;
