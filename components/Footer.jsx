const Footer = () => {
  return (
    <footer className="fixed bottom-0 mt-auto h-20 w-full bg-gray-800 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
        <div className="relative left-0">
          <p className="flex whitespace-nowrap text-xl font-bold text-white">
            POKEMON
          </p>
        </div>
        <div className="relative right-4 bottom-0 text-[9px]">
          <p className="text-white">All rights reserved @TEC EQUIPO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
