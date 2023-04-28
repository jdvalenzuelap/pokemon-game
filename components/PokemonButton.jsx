const PokemonButton = ({ children, ...props }) => {
  return (
    <button className=" bg-pokeYellow border-4 border-pokeBlue  min-w-[180px] min-h-[40px] rounded-full" {...props}>
      {children}
    </button>
  );
};

export default PokemonButton;
