import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import {
  GoogleMap,
  Marker,
  MarkerF,
  Polyline,
  PolylineF,
  useLoadScript,
} from "@react-google-maps/api";
import { Button } from "flowbite-react";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import usePlacesAutocomplete, {
  getDetails,
  getGeocode,
  getLatLng,
  getZipCode,
} from "use-places-autocomplete";

const SearchMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default SearchMap;

const Map = () => {
  const center = useMemo(() => ({ lat: 46, lng: 1 }), []);
  const [selected, setSelected] = useState<any>(null);

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
      <div className="flex justify-center">
        <CancelButton /> <AddPlaceButton isSelected={selected} />
      </div>
    </div>
  );
};

const PlacesAutocomplete = ({ setSelected }: any) => {
  const searchInput = useRef<HTMLInputElement | null>(null);

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    const results = await getGeocode({ address });
    // const { place_id } = results[0];
    // const placeId = place_id;
    // const mytest = await getDetails({ placeId });
    // console.log(mytest);
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng, address });
    searchInput?.current?.blur();
  };

  const handleFocus = (e) => {};
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Rechercher un lieu"
        ref={searchInput}
        autoFocus
        onFocus={(e) => {
          setValue("");
          setSelected(null);
        }}
      />
      <ComboboxPopover>
        <ComboboxList className="combobox-list">
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption
                className="combobox-option"
                key={place_id}
                value={description}
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

const AddPlaceButton = ({ isSelected }: any) => {
  const handleClick = () => {};
  return (
    isSelected && (
      <Button className="m-5" color="lime" onClick={handleClick}>
        Confirmer l'ajout
      </Button>
    )
  );
};

const CancelButton = () => {
  return (
    <Button className="m-5" color="gray">
      <Link to="/trip/1">Annuler</Link>
    </Button>
  );
};
