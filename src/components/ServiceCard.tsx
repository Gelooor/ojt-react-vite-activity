import ButtonStyle from "./ButtonStyle";

interface IServiceProps {
  imageUrl: string;
  haircut: string;
}

export default function ServiceCard({
  imageUrl,
  haircut,
}: IServiceProps): JSX.Element {
  return (
    <section className='flex flex-col justify-center gap-10 border-2 border-gray-200 border-solid pb-4 hover:shadow-xl'>
      <img src={imageUrl} alt='' />
      <div className='flex flex-col items-center justify-center gap-2 px-14 sm:px-4'>
        <h3 className='uppercase text-base text-gray-800 font-bold'>
          {haircut}
        </h3>
        <p className='text-gray-500 text-xs pb-2'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ButtonStyle color={"gray-800"} hoverColor={"yellow-500"} />
      </div>
    </section>
  );
}
