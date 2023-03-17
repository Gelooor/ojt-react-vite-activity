import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Map() {
  const {} = useLoadScript({
    googleMapsApiKey: "AIzaSyCMgjbPjsa3zd48dyCHRyOI7GTkoGYBJA8",
  });

  const center = useMemo(() => ({ lat: 14.5868245, lng: 121.0281563 }), []);

  // if (isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap zoom={20} center={center} mapContainerClassName='h-28 sm:h-96'>
      <MarkerF position={center} />
    </GoogleMap>
  );
}
