import PokemonButton from '../components/PokemonButton'
const Home = () => {
  return (
    <div className="sm:px-16 xl:px-48">
      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">¡Bienvenido!</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">¿Listo para adivinar el <span className="text-pokeBlue">Pokémon</span>?</p>
      <PokemonButton>Empezar</PokemonButton>
    </div>
  );
};

export default Home;
