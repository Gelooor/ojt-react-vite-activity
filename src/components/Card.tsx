import ButtonStyle from "./ButtonStyle";

import { Iinformation } from "../interface/Types";

interface ICardProps {
  informations: Iinformation;
  index: number;
  toggleActiveCard: Function;
}

export default function Card({
  informations,
  index,
  toggleActiveCard,
}: ICardProps): JSX.Element {
  // const [activeCard, setActiveCard] = useState(informationss);

  // const toggleActiveCard = (index: number) => {
  //   setActiveCard((prev: Iinformations[]) => [
  //     ...prev.map((elem, i) => {
  //       if (i === index) {
  //         return {
  //           ...elem,
  //           isActive: !elem.isActive,
  //         };
  //       }
  //       return {
  //         ...elem,
  //         isActive: false,
  //       };
  //     }),
  //   ]);

  // const tempArr = [...activeCard];

  // tempArr.forEach((e) => (e.isActive = false));

  // // not working because of 0 iteration
  // if (tempArr[index].isActive === true) {
  //   setActiveCard({ ...tempArr[index], isActive: false });
  // } else {
  //   setActiveCard({ ...tempArr[index], isActive: true });
  // }
  // console.log(tempArr[index].id);
  // console.log(tempArr[index].isActive);
  // console.log(activeCard[index].isActive);

  // setActiveCard(tempArr);

  return (
    // {<div className='flex flex-col items-center justify-center gap-10 sm:flex-row pt-10'>
    //   {informationss.map((informations: Iinformations, index: number) => {}
    // return (
    <div
      // key={index}
      className={`flex flex-col items-center justify-center pb-4 gap-3 ${
        informations.isActive
          ? "border-2 border-black border-solid bg-gray-300"
          : "border-2 border-transparent border-solid"
      }`}
      onClick={() => toggleActiveCard(index)} // hover:shadow-xl]
    >
      <img
        className={informations.job === undefined ? "h-64 w-80" : "h-96 w-72"}
        src={informations.imgUrl}
        alt=''
      />
      <div className='flex flex-col items-center justify-center gap-2 px-14 sm:px-4'>
        <p className='font-bold'>{informations.name}</p>
        {informations.job === undefined ? (
          <div>
            <p className='text-gray-500 text-xs pb-4 sm:w-72'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonStyle color='black' hoverColor='yellow-500' />
          </div>
        ) : (
          <p className='text-black'>{informations.job}</p>
        )}
      </div>
    </div>
  );
  //   {})}
  // </div>}
  // );
}
