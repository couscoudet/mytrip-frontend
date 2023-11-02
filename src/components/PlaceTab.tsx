import { useEffect, useState } from "react";
import { AreaInterface } from "../interface/AreaInterface";
import { Button } from "flowbite-react";
import AreaCard from "./AreaCard";

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
      <div className="flex flex-wrap">
        {areas.map((area) => (
          <AreaCard area={area}></AreaCard>
        ))}
      </div>
    </div>
  );
}

export default PlaceTab;
