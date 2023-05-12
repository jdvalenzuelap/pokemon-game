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
  const [attemptsRemaining, setAttemptsRemaining] = useState(3) // Add state variable


  const currentPokemonData = pokemonData[currentQuestionIndex]

  const handleAnswerClick = (answer) => {
    if (answer !== currentPokemonData.correctAnswer) { // Check if answer is incorrect
      setAttemptsRemaining(attemptsRemaining - 1) // Reduce attemptsRemaining by 1
    }
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
      <div className="flex justify-center items-center h-screen">
        <h1>¡Juego Terminado!</h1>
        <p>Tu puntaje es {score} de {pokemonData.length}</p>
      </div>
    )
  }

  return (
    <div className="mt-5 flex justify-center h-screen">
      <div>
        <p className="my-6 mx-auto text-3xl font-bold dark:text-gray-400">
          ¿Quién es el <span className="text-pokeBlue">Pokémon</span>?
        </p>
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
