interface IEllipseProps {
  height: string;
  width: string;
}

export default function Ellipse({ height, width }: IEllipseProps): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      fill='#daa520'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z' />
    </svg>
  );
}
