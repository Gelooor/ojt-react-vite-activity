interface IButtonProps {
  bgColor: string;
}

// import PropTypes from "prop-types";

export default function ButtonStyle({ bgColor }: IButtonProps) {
  const generalStyle =
    "font-poppins uppercase w-36 h-10 rounded-3xl border-2 border-solid text-white";
  let buttonStyle = "";

  if (bgColor === "gold") {
    buttonStyle = `${generalStyle} bg-yellow-500 border-yellow-500 hover:bg-gray-800 hover:border-gray-800`;
  } else if (bgColor === "black") {
    buttonStyle = `${generalStyle} bg-gray-800 border-gray-800 hover:bg-yellow-500 hover:border-yellow-500`;
  }
  return <button className={buttonStyle}>Read More</button>;
}

// ButtonStyle.propTypes = {
//   color: PropTypes.string,
// };
