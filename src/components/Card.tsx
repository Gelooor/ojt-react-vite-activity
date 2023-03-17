import ButtonStyle from "./ButtonStyle";

interface ITeamProps {
  imageUrl: string;
  name: string;
  job?: string;
}

export default function TeamCard({
  imageUrl,
  name,
  job,
}: ITeamProps): JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center gap-10 sm:flex-row pt-10'>
      <div className='flex flex-col justify-center gap-3 border-2 border-gray-200 border-solid pb-4 hover:shadow-xl'>
        <img src={imageUrl} alt='' />
        <div className='flex flex-col items-center justify-center gap-2 px-14 sm:px-4'>
          <p className='font-bold'>{name}</p>
          {job === undefined ? (
            <div>
              <p className='text-gray-500 text-xs pb-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ButtonStyle color='black' hoverColor={"yellow-500"} />
            </div>
          ) : (
            <p>{job}</p>
          )}
        </div>
      </div>
    </div>
  );
}
