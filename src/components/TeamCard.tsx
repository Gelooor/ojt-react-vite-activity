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
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}
