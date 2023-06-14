import PokemonButton from "../components/PokemonButton";
import Image from "next/image";
import pikachu from "../public/images/pikachu.jpg";
import snorlax from "../public/images/snorlax.png";
import ditto from "../public/images/ditto.png";
import charizard from "../public/images/Charizard.png";
import Link from "next/link";
const Home = () => {
  return (
    <div className="grid grid-cols-2 grid-flow-col gap-4 h-screen content-center justify-items-center items-center">
      <div className="sm:px-16 xl:px-48">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          ¡Bienvenido!
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          ¿Listo para adivinar el <span className="text-pokeBlue">Pokémon</span>
          ?
        </p>
        <Link href="adivina">
          <PokemonButton>Empezar</PokemonButton>
        </Link>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <Image src={pikachu} width={200} height={200} alt="logo" />
        </div>
        <div>
          <Image src={snorlax} width={200} height={200} alt="logo" />
        </div>
        <div>
          <Image src={ditto} width={200} height={200} alt="logo" />
        </div>
        <div>
          <Image src={snorlax} width={200} height={200} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
