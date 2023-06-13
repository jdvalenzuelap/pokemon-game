import path from "path";
import { useRouter } from "next/router";
import { useState } from "react";
import { promises as fs } from "fs";
import axios from "axios";

const LeaderBoard = ({ names, points }) => {
  const router = useRouter();
  const { score } = router.query;
  const [name, setName] = useState("");
  const winner = score > points[points.length - 1];


  const handleButtonClick = async () => {
    names[names.length - 1] = name;
    points[points.length - 1] = score;
    //sort the arrays by the points
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points.length - 1; j++) {
        if (points[j] < points[j + 1]) {
          let temp = points[j];
          points[j] = points[j + 1];
          points[j + 1] = temp;
          temp = names[j];
          names[j] = names[j + 1];
          names[j + 1] = temp;
        }
      }
    }


    //write the contents of names and points to the file
    try {
      await axios.post("/api/leaderboard", { names, points });
      console.log("File written successfully");
      router.push("/leaderboard");
    } catch (error) {
      console.error("Error writing to file:", error);
    }
  };

  return (
    <div className="mt-5 flex justify-center">
      <div>
        <p className="my-6 mx-auto text-3xl font-bold dark:text-gray-400">
          <span className="text-pokeBlue">Ranking</span> de los campeones
        </p>
        <div className="flex flex-col">
          {names &&
            names.map((name, index) => (
              <div key={index} className="flex justify-between">
                <div className="text-xl  mb-4">
                  {index + 1}. {name}
                </div>
                <div className="text-xl mb-4 font-bold text-pokeBlue">
                  {points[index]}
                </div>
              </div>
            ))}
        </div>
        {winner && (
          <div className="flex flex-col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-2 my-4"
              placeholder="Ingresa tu nombre"
            />
            <button
              onClick={handleButtonClick}
              className="border-4 min-w-[200px] min-h-[40px] rounded-full hover:bg-pokeBlue hover:border-pokeYellow hover:text-white"
            >
              Guardar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const fileContent = await fs.readFile(
    path.join(process.cwd(), "public/leaderboard.txt"),
    "utf-8"
  );
  const text = fileContent.toString();
  const namesBefore = text.split("\n").filter((name) => name !== "");

  //make this code better

  const points = namesBefore.map((name) => {
    const [names, points] = name.split(",");
    return parseInt(points);
  });

  const names = namesBefore.map((name) => {
    const [names, points] = name.split(",");
    return names;
  });

  return {
    props: {
      names,
      points,
    },
  };
}

export default LeaderBoard;
