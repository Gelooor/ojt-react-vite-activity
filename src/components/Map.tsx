import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Map() {
  const {} = useLoadScript({
    googleMapsApiKey: "AIzaSyCMgjbPjsa3zd48dyCHRyOI7GTkoGYBJA8",
  });

  // if (isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={20}
      center={{ lat: 14.362406, lng: 121.034894 }}
      mapContainerClassName='h-28 sm:h-96'
    >
      <Marker position={{ lat: 14.362406, lng: 121.034894 }} />
    </GoogleMap>
  );
}
