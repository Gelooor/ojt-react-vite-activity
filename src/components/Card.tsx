import { useState } from "react";
import ButtonStyle from "./ButtonStyle";
import { information } from "../interface/Types";

interface ICardProps {
  informations: object;
}

export default function Card({ informations }: ICardProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(informations);
  // const handleClick = (index: number) => {
  //   setActive((prevState) => ());
  // };

  const setActiveCard = (index: number) => {
    const tempArr = [...active];

    tempArr.forEach((e) => (e.isActive = false));

    tempArr[index].isActive = true;

    setActiveCard(tempArr);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10 sm:flex-row pt-10'>
      {activeCard.map((information: information, index: number) => {
        return (
          <div
            key={index}
            className={`flex flex-col items-center justify-center pb-4 gap-3 ${
              information.id === index &&
              "border-2 border-black border-solid bg-gray-300"
            }`}
            onClick={() => setActiveCard(index)} // hover:shadow-xl]
          >
            <img
              className={
                information.job === undefined ? "h-64 w-80" : "h-96 w-72"
              }
              src={information.imgUrl}
              alt=''
            />
            <div className='flex flex-col items-center justify-center gap-2 px-14 sm:px-4'>
              <p className='font-bold'>{information.name}</p>
              {information.job === undefined ? (
                <div>
                  <p className='text-gray-500 text-xs pb-4 sm:w-72'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ButtonStyle color='black' hoverColor='yellow-500' />
                </div>
              ) : (
                <p className='text-black'>{information.job}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
