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
  PolylineF,
  useLoadScript,
} from "@react-google-maps/api";
import { useMemo, useRef, useState } from "react";
import usePlacesAutocomplete, {
  getDetails,
  getGeocode,
  getLatLng,
  getZipCode,
} from "use-places-autocomplete";
import Map from "./Map";


const SearchMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default SearchMap;

type Props = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number | null>
};




