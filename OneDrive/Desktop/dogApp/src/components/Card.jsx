import "./card.css";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Card({ raza,isVisible }) {
  const [dog, setDog] = useState([]);
  const [load, setLoad] = useState(false);
  const changeLoad = () => {
    setLoad(!load);
  };
  console.log(dog)

  useEffect(() => {
    async function fetchDAta(raza) {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${raza}/images/random`
        );
        const data = await response.json();
        setDog(data);
      } catch (error) {
        console.error("error", error);
      }
    }
    fetchDAta(raza);
  }, [raza, load]);

    return (
        <>
        {isVisible ? (
            <div className="card-body">
            <h1>{raza}</h1>
            <img src={dog.message} height="250px" onClick={changeLoad} />
          </div>
        ) : (
            <h1 className="conditional">escoge un perro</h1>
        )}
        </>
      );
  }

export default Card;
