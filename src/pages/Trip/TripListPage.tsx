import { Button, Tabs } from "flowbite-react";
import MainLayout from "../layout/MainLayout";
import TripCard from "../../components/TripCard";
import { AiFillHeart, AiOutlineSmile } from "react-icons/ai";
import { Link } from "react-router-dom";

export interface TripInterface {
  id: number;
  name: string;
  notes: string;
  image_url: string;
  role: number;
}

export const data: TripInterface[] = [
  {
    id: 1,
    name: "Ecosse 2022",
    notes: "voyages de 3 semaines en Ecosse",
    image_url:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/af9d0f6ce2e5887c121e0f049249d1f1/Europe_-_E__cosse_-_Cha__teau_d-Urquart.jpg?w=3864&h=2173&fl=progressive&q=50&fm=jpg",
    role: 1,
  },
  {
    id: 2,
    name: "trip2",
    notes:
      "voyage familial à velo de 4 semaines par la coulée verte de Paris à la normandie en passant par le lac titi-caca",
    image_url:
      "https://www.francevelotourisme.com/sites/default/files/styles/twitterimage/public/medias/images/en-famille-sur-la-voie-verte-cote-or_0.jpg?itok=YSgn0yr6",
    role: 2,
  },
];

function TripListPage() {
  return (
    <MainLayout>
      <Tabs.Group aria-label="Trip tabs" style="default">
        <Tabs.Item active icon={AiFillHeart} title="Mes voyages">
          <Link to="/add-trip">
            <Button color="lime">Créer un voyage</Button>
          </Link>
          <div className="flex flex-wrap">
            {data &&
              data
                .filter((trip) => trip.role === 1)
                .map((trip) => (
                  <TripCard
                    title={trip.name}
                    description={trip.notes}
                    image={trip.image_url}
                  />
                ))}
          </div>
        </Tabs.Item>
        <Tabs.Item active icon={AiOutlineSmile} title="Autres Voyages">
          <div className="flex flex-wrap">
            {data
              .filter((trip) => trip.role === 2)
              .map((trip) => (
                <TripCard
                  title={trip.name}
                  description={trip.notes}
                  image={trip.image_url}
                />
              ))}
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </MainLayout>
  );
}

export default TripListPage;
