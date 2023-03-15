interface IHeaderProps {
  color: string;
  size: string;
  text: string;
}

export default function HeaderStyle({
  color,
  size,
  text,
}: IHeaderProps): JSX.Element {
  const headerStyle = `font-crimsonText uppercase text-${color} text-${size}`;

  return <h2 className={headerStyle}>{text}</h2>;
}
