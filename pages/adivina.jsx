import Image from "next/image";
import Pokeball from "../public/images/pokeball.png";
import Pikachu from "../public/images/pikachu.png";
import PokemonButton from "@/components/PokemonButton";
import { useState } from 'react'
import { pokemonData } from '../resources/pokemonData'

const Adivina = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [score, setScore] = useState(0)

  const currentPokemonData = pokemonData[currentQuestionIndex]

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer)
  }

  const handleNextQuestionClick = () => {
    if (selectedAnswer === currentPokemonData.correctAnswer) {
      setScore(score + 1)
    }
    setSelectedAnswer('')
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  if (currentQuestionIndex === pokemonData.length) {
    return (
      <div>
        <h1>Game completed!</h1>
        <p>Your score is {score} out of {pokemonData.length}</p>
      </div>
    )
  }

  return (
    <div className="mt-5 flex justify-center">
      <div>
        <p className="my-6 mx-auto text-3xl font-bold dark:text-gray-400">
          ¿Quién es el <span className="text-pokeBlue">Pokémon</span>?
        </p>
        <div className="flex justify-center my-8">
          <Image
            className="mx-2"
            src={Pokeball}
            id="1"
            alt="pokeball"
            width={45}
            height={45}
          />
          <Image
            className="mx-2"
            src={Pokeball}
            id="2"
            alt="pokeball"
            width={45}
            height={45}
          />
          <Image
            className="mx-2"
            src={Pokeball}
            id="3"
            alt="pokeball"
            width={45}
            height={45}
          />
        </div>
        <Image
          className="mx-auto my-10"
          src={currentPokemonData.image}
          alt="pikachu"
          width={200}
          height={200}
        />
        <ul>
          {currentPokemonData.answers.map((answer) => (
            <PokemonButton
              key={answer}
              onClick={() => handleAnswerClick(answer)}
              className={`my-2 ${selectedAnswer === answer ? 'bg-pokeBlue' : ''}`}
            >
              {answer}
            </PokemonButton>
          ))}
        </ul>
      <button
        onClick={handleNextQuestionClick}
        disabled={!selectedAnswer}
        className="bg-blue-500 text-white p-4 my-2 rounded-md disabled:bg-gray-400">
        Next Question
      </button>
      </div>
    </div>
  );
};

export default Adivina;
