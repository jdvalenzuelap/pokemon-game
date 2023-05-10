const PokemonButton = ({ children, ...props }) => {
  return (
    <div {...props}>
      <button className=" bg-pokeYellow border-4 border-pokeBlue w-full min-w-[180px] min-h-[40px] rounded-full hover:bg-pokeBlue hover:border-pokeYellow hover:text-white">
        {children}
      </button>
    </div>
  );
};

export default PokemonButton;
