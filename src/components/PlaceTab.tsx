import { useEffect, useState } from "react";
import { AreaInterface } from "../interface/AreaInterface";
import { Button } from "flowbite-react";

type Props = {
  areas: AreaInterface[];
};

function PlaceTab({ areas }: Props) {
  const [data, setData] = useState<AreaInterface[] | undefined>([]);

  useEffect(() => {
    setData(areas);
  }, []);

  return (
    <div>
      <Button color="lime">Ajouter une zone</Button>
    </div>
  );
}

export default PlaceTab;
