import PokemonButton from '../components/PokemonButton'
<<<<<<< Updated upstream

const Home = () => {
  return (
    <div className="sm:px-16 xl:px-48">
      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">¡Bienvenido!</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">¿Listo para adivinar el <span className="text-pokeBlue">Pokémon</span>?</p>
      <PokemonButton>Empezar</PokemonButton>
=======
import Image from "next/image";
import pikachu from '../public/images/pikachu.jpg'
import snorlax from '../public/images/snorlax.png'
import ditto from '../public/images/ditto.png'
import charizard from '../public/images/Charizard.png'
const Home = () => {
  return (
    <div class="grid grid-cols-2 grid-flow-col gap-4 h-screen content-center justify-items-center">
      <div class="sm:px-16 xl:px-48">
        <h1 class="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">¡Bienvenido!</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">¿Listo para adivinar el <span className="text-pokeBlue">Pokémon</span>?</p>
        <PokemonButton>Empezar</PokemonButton>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div class="..."><Image src={pikachu} width={200} height={200} alt="logo" /></div>
        <div class="..."><Image src={snorlax} width={200} height={200} alt="logo" /></div>
        <div class="..."><Image src={ditto} width={200} height={200} alt="logo" /></div>
        <div class="..."><Image src={snorlax} width={250} height={250} alt="logo" /></div>
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Home;
