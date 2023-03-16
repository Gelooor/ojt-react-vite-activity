interface IButtonProps {
  color: string;
  hoverColor: string;
}

export default function ButtonStyle({ color, hoverColor }: IButtonProps) {
  const buttonStyle = `font-poppins uppercase w-36 h-10 rounded-3xl border-2 border-solid text-white bg-${color} border-${color} hover:bg-${hoverColor} hover:border-${hoverColor}`;

  return <button className={buttonStyle}>Read More</button>;
}
