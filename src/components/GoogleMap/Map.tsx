import { GoogleMap, Marker, MarkerF, PolylineF } from "@react-google-maps/api";
import PlacesAutocomplete from "./PlacesAutoComplete";
import { useMemo } from "react";
import { Props } from "./SearchMap";

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
        mapContainerClassName="h-[40vh] w-[80vw] md:w-[50vw] lg:w-[30vw]"
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
    </div>
  );
};

export default Map;
