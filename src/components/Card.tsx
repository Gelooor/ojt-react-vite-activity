import { useState } from "react";
import ButtonStyle from "./ButtonStyle";

interface ICardProps {
  information: string[][];
}

export default function Card({ information }: ICardProps): JSX.Element {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActive((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10 sm:flex-row pt-10'>
      {information.map(([url, text, job], index) => (
        <div
          className={`flex flex-col items-center justify-center pb-4 gap-3 ${
            active === index && "border-2 border-black border-solid bg-gray-300"
          }`} // hover:shadow-xl]
          onClick={() => handleClick(index)}
        >
          <img src={url} alt='' />
          <div className='flex flex-col items-center justify-center gap-2 px-14 sm:px-4'>
            <p className='font-bold'>{text}</p>
            {job === undefined ? (
              <div>
                <p className='text-gray-500 text-xs pb-4 sm:w-72'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ButtonStyle color='black' hoverColor='yellow-500' />
              </div>
            ) : (
              <p className='text-black'>{job}</p>
            )}
          </div>
        </div>
      ))}
    </div>
    //   {texts.map(([url, text, job]: string, index: number) => (

    // ))}
  );
}
