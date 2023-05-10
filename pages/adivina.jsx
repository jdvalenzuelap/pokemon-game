import Image from "next/image";
import Pokeball from "../public/images/pokeball.png";
import Pikachu from "../public/images/pikachu.png";
import PokemonButton from "@/components/PokemonButton";

const Adivina = () => {
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
            alt="pokeball"
            width={45}
            height={45}
          />
          <Image
            className="mx-2"
            src={Pokeball}
            alt="pokeball"
            width={45}
            height={45}
          />
          <Image
            className="mx-2"
            src={Pokeball}
            alt="pokeball"
            width={45}
            height={45}
          />
        </div>
        <Image
          className="mx-auto my-10"
          src={Pikachu}
          alt="pokeball"
          width={200}
          height={200}
        />
        <div className="flex flex-col">
          <PokemonButton className="my-2 mx-auto min-w-[300px]">
            Empezar
          </PokemonButton>
          <PokemonButton className="my-2 mx-auto min-w-[300px]">
            Empezar
          </PokemonButton>
          <PokemonButton className="my-2 mx-auto min-w-[300px]">
            Empezar
          </PokemonButton>
          <PokemonButton className="my-2 mx-auto min-w-[300px]">
            Empezar
          </PokemonButton>
        </div>
      </div>
    </div>
  );
};

export default Adivina;
