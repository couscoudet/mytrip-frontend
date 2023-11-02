import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

function TripNextStepPage() {
  const [trip, setTrip] = useState({});

  useEffect(() => {
    setTrip({ id: 1 });
  }, []);

  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
        <h2 className="text-xl dark:text-white">
          Souhaitez-vous dès à présent compléter votre voyage ?
        </h2>
        <div className="flex w-[300px] justify-evenly pt-5">
          <Button color="red">non</Button>
          <Button color="lime">
            <Link to={`/trip/${trip?.id}`}>oui</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}

export default TripNextStepPage;
