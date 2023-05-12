import path from "path";
import { promises as fs } from "fs";

const LeaderBoard = ({ names }) => {

  return (
    <div className="mt-5 flex justify-center">
      <div>
        <p className="my-6 mx-auto text-3xl font-bold dark:text-gray-400">
          <span className="text-pokeBlue">Ranking</span> de los campeones
        </p>
        <div className="flex flex-col">
          {names && names.map((name, index) => (
            <div key={index} className="text-xl  mb-4">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const fileContent = await fs.readFile(path.join(process.cwd(), "public/leaderboard.txt"), "utf-8");
  const text = fileContent.toString();
  const names = text.split("\n").filter((name) => name !== "");
  console.log(names);
  return {
    props: {
      names,
    },
  };
}

export default LeaderBoard;