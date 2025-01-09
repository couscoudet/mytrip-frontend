import { Button } from "flowbite-react";

type Props = {
  handleSearchMethod: (method: string) => void;
};

const SelectPlaceSearchOption = ({ handleSearchMethod }: Props) => {
  return (
    <>
      <Button
        color="lime"
        className="m-3"
        onClick={() => handleSearchMethod("Manually")}
      >
        Manuellement
      </Button>
      <Button
        color="lime"
        className="m-3 w-[150px]"
        id="GoogleMaps"
        onClick={() => handleSearchMethod("GoogleMaps")}
      >
        Via Google Maps
      </Button>
    </>
  );
};

export default SelectPlaceSearchOption;
