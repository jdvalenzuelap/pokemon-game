import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import Pokeball from "../public/images/pokeball.png";
import Pikachu from "../public/images/pikachu.png";
import PokemonButton from "@/components/PokemonButton";
import { useState } from "react";
import pokeGuide from "../resources/pokeGuide.json";

const Adivina = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [attemptsRemaining, setAttemptsRemaining] = useState(3);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const currentPokemonData = pokeGuide.pictures[currentQuestionIndex];
  console.log(pokeGuide.pictures.length, 'length');

  useEffect(() => {
    setAnswers(generateRandomAnswers(currentPokemonData.name, score));
  }, [currentQuestionIndex]);

  const generateRandomAnswers = (rightAnswer, score) => {
    const answers = [rightAnswer];
    while (answers.length < 3 + Math.floor(score / 5)) {
      const randomPokemon =
        pokeGuide.pictures[
          Math.floor(Math.random() * pokeGuide.pictures.length)
        ];
      if (!answers.includes(randomPokemon.name)) {
        answers.push(randomPokemon.name);
      }
    }
    return answers.sort(() => Math.random() - 0.5);
  };
  const handleAnswerClick = (answer) => {
    if (answer !== currentPokemonData.name) {
      // Check if answer is incorrect
      setAttemptsRemaining(attemptsRemaining - 1); // Reduce attemptsRemaining by 1
    }
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  const handleNextQuestionClick = () => {
    if (selectedAnswer === currentPokemonData.name) {
      setScore(score + 1);
    }
    if (currentQuestionIndex >= pokeGuide.pictures.length || attemptsRemaining === 0) {
      setFinished(true);
    }
    setSelectedAnswer("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswered(false);
  };

  if (finished) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>¡Juego Terminado!</h1>
        <p>Tu puntaje es {score}</p>
      </div>
    );
  }

  return (
    <div className="mt-5 flex justify-center h-screen">
      <div>
        <div className="flex flex-col  justify-center">
          <p className="my-1 mx-auto text-3xl font-bold dark:text-gray-400">
            ¿Quién es el <span className="text-pokeBlue">Pokémon</span>?
          </p>
          <p className=" mx-auto text-3xl font-bold dark:text-gray-400 self-center">
            Nivel: {Math.floor(score / 5) + 1}
          </p>
        </div>
        <div className="flex justify-center my-8">
          {[...Array(attemptsRemaining)].map((_, i) => (
            <Image
              key={i}
              className="mx-2"
              src={Pokeball}
              alt="pokeball"
              width={45}
              height={45}
            />
          ))}
        </div>
        {answered ? (
          <Image
            className="mx-auto my-10"
            src={require("../public/pokeImages/pokemonColor/" +
              currentPokemonData.fileName)}
            alt="pikachu"
            width={200}
            height={200}
          />
        ) : (
          <Image
            className="mx-auto my-10"
            src={require("../public/pokeImages/pokemonBW/" +
              currentPokemonData.fileName)}
            alt="pikachu"
            width={200}
            height={200}
          />
        )}

        <ul>
          {answers.map((answer) => (
            <PokemonButton
              key={answer}
              onClick={() => handleAnswerClick(answer)}
              className="my-2"
              clicked={selectedAnswer === answer}
              disabled={answered}
            >
              {answer}
            </PokemonButton>
          ))}
        </ul>
        {answered && (
          <button
            onClick={handleNextQuestionClick}
            disabled={!selectedAnswer}
            className=" mt-7 border-4  w-full min-w-[180px] min-h-[40px] rounded-full hover:bg-pokeBlue hover:border-pokeYellow hover:text-white"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Adivina;
