import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import { Selected } from "../TripTabs/Place/AreaCard";

export type Props = {
  selected: Selected | undefined | null;
  setSelected?: React.Dispatch<
    React.SetStateAction<Selected | undefined | null>
  >;
};

const PlaceInformations = ({ selected }: Props) => {
  console.log(selected);
  return (
    <p>
      adresse : <strong>{selected?.address}</strong>, latitude :
      <strong>{selected?.lat}</strong>, longitude:{" "}
      <strong>{selected?.lng}</strong>
    </p>
  );
};

const SearchMap = ({ selected, setSelected }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      {" "}
      <Map selected={selected} setSelected={setSelected} />
      {selected && <PlaceInformations selected={selected} />}
    </>
  );
};

export default SearchMap;
