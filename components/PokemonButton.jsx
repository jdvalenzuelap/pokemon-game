const PokemonButton = ({ children, disabled, clicked, ...props }) => {
  console.log(clicked);
  return (
    <div {...props}>
      <button
        className={`${
          clicked
            ? " bg-pokeBlue border-pokeYellow text-white"
            : "bg-pokeYellow border-pokeBlue"
        } border-4  w-full min-w-[180px] min-h-[40px] rounded-full hover:bg-pokeBlue hover:border-pokeYellow hover:text-white`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default PokemonButton;
