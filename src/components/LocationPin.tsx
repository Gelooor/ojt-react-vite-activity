import { Icon } from "@iconify/react";
import Pointer from "../assets/svg/Pointer";

interface ILocationProps {
  lat: number;
  lng: number;
  text: string;
}

export default function LocationPin({ lat, lng, text }: ILocationProps) {
  return (
    <div>
      <Icon icon='' />
    </div>
  );
}
