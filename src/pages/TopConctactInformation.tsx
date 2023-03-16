import CloseEnvelope from "../components/CloseEnvelope";
import Smartphone from "../components/Smartphone";

export default function TopConctactInformation() {
  const liStyle = "flex gap-2 items-center";
  return (
    <section>
      <ul className='flex justify-between items-center px-8 py-2 text-yellow-500 text-xs sm:px-40'>
        <li className={liStyle}>
          <CloseEnvelope />
          <p>youremail@gmail.com</p>
        </li>
        <li className={liStyle}>
          <Smartphone />
          <p>(046) 123 - 456</p>
        </li>
      </ul>
    </section>
  );
}
