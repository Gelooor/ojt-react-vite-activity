interface IButtonProps {
  color: string;
  hoverColor: string;
  text?: string;
}

export default function ButtonStyle({ color, hoverColor, text }: IButtonProps) {
  const buttonStyle = `font-poppins uppercase w-36 h-10 rounded-3xl border-2 border-solid text-white bg-${color} border-${color} hover:bg-${hoverColor} hover:border-${hoverColor}`;
  console.log(text);
  return (
    <button className={buttonStyle}>
      {text === undefined ? "Read More" : text}
    </button>
  );
}
