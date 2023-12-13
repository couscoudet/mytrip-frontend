import { GoogleMap, Marker, MarkerF, PolylineF } from "@react-google-maps/api";
import PlacesAutocomplete from "./PlacesAutoComplete";
import { useMemo } from "react";

type Props = {
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
};

const Map = ({ selected, setSelected }: Props) => {
  const center = useMemo(() => ({ lat: 46, lng: 1 }), []);

  return (
    <div className="flex flex-col items-center">
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected}></PlacesAutocomplete>
      </div>

      <GoogleMap
        zoom={selected ? 12 : 4}
        center={selected ? selected : center}
        mapContainerClassName="map-container"
      >
        <MarkerF position={{ lat: 11, lng: 22 }} />
        <MarkerF position={{ lat: 22, lng: 11 }} />
        {selected && <Marker position={selected} />}
        <PolylineF
          path={[
            { lat: 11, lng: 22 },
            { lat: 22, lng: 11 },
          ]}
          onMouseOver={() => console.log("coucou")}
          onClick={() => console.log("oups cliqué")}
        />
      </GoogleMap>

      {selected && (
        <p>
          adresse : <strong>{selected.address}</strong>, latitude :
          <strong>{selected.lat}</strong>, longitude:{" "}
          <strong>{selected.lng}</strong>
        </p>
      )}
    </div>
  );
};

export default Map;
