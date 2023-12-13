import { Button } from "flowbite-react";

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SelectPlaceSearchOption = ({ handleClick }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Button
          color="lime"
          className="m-3 w-[150px]"
          id="manually"
          onClick={(e) => handleClick(e)}
        >
          Manuellement
        </Button>
        <Button
          color="lime"
          className="m-3 w-[150px]"
          id="GoogleMaps"
          onClick={(e) => handleClick(e)}
        >
          Via Google Maps
        </Button>
      </div>
    </>
  );
};

export default SelectPlaceSearchOption;
