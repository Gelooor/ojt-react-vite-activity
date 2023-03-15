// import PropTypes from "prop-types";

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
  // const generalStyle = "font-crimsonText uppercase";
  // let headerStyle = "";

  // if (props.color === "gray") {
  //   headerStyle = `${generalStyle} text-gray-400 text-base`;
  // } else if (props.color === "gold") {
  //   headerStyle = `${generalStyle} text-yellow-500 text-4xl`;
  // }

  // if (props.color === "gray") {
  //   return <p className={headerStyle}>{props.text}</p>;
  // } else if (props.color === "gold") {
  //   return <h2 className={headerStyle}>{props.text}</h2>;
  // }
  const headerStyle = `font-crimsonText uppercase ${color} ${size}`;

  return <h2 className={headerStyle}>{text}</h2>;
}

// HeaderStyle.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
// };
