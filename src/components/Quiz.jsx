import React, { useEffect, useState } from "react";
import checkCircle from "../assets/CheckCircleOutline.svg";
import clock from "../assets/ClockOutline.svg";

const Quiz = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [types, setTypes] = useState([]);
  const [typeIndex, setTypeIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizNumber, setQuizNumber] = useState(0);

  const getPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon", {
      method: "GET",
    });

    const data = await res.json();

    setPokemons(data.results);
  };

  const getPokemon = async (url) => {
    const res = await fetch(url, {
      method: "GET",
    });

    const data = await res.json();

    setPokemon({
      abilities: data.abilities,
      sprites: data.sprites,
      types: data.types,
    });
  };

  const getTypes = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/type", {
      method: "GET",
    });

    const data = await res.json();

    setTypes(data.results);
  };

  useEffect(() => {
    getPokemons();
    getTypes();
  }, []);

  useEffect(() => {
    if (pokemons.length > 0) {
      getPokemon(pokemons[quizNumber].url);
    }
  }, [pokemons]);

  useEffect(() => {
    if (types?.length > 0 && pokemon?.types?.length > 0) {
      setAnswers([
        ...types?.slice(typeIndex, 3),
        { name: pokemon?.types[0]?.type?.name },
      ]);
    }
  }, [types, typeIndex, pokemon]);

  return (
    <div className="quiz-wrapper">
      <h1>PokeTypes</h1>
      <h2>Guess the type of this pokemon</h2>

      <div className="question">
        <div className="images">
          <img src={pokemon?.sprites?.front_default} alt="pokemon" />
          <img src={pokemon?.sprites?.back_default} alt="pokemon" />
        </div>
        <h3>{pokemons[quizNumber]?.name}</h3>
        <h4>Abilities</h4>
        <div className="abilities">
          {pokemon?.abilities?.map((ablt) => (
            <div className="ability" key={ablt?.ability?.name}>
              <span>{ablt?.ability?.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="icons">
        <div className="clock">
          <img src={clock} alt="clock icon" />
          <span>13:37</span>
        </div>
        <div className="check">
          <img src={checkCircle} alt="check icon" />
          <span>01</span>
        </div>
      </div>
      <div className="answers">
        {answers?.map((answer) => (
          <span key={answer?.name}>{answer?.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
