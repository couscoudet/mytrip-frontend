import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import { useRef } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

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
    console.log(typeof lat);
    console.log(lat);
    setSelected({ lat, lng, address });
    searchInput?.current?.blur();
  };

  const handleFocus = (e: any) => {};
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
      <ComboboxPopover style={{ zIndex: 1000 }}>
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

export default PlacesAutocomplete;
