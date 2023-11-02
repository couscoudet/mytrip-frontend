import { Tabs } from "flowbite-react";
import MainLayout from "../layout/MainLayout";
import {
  AiFillHeart,
  AiOutlineCalendar,
  AiOutlinePushpin,
  AiOutlineSend,
} from "react-icons/ai";
import PlaceTab from "../../components/PlaceTab";
import { areas } from "../../faker";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "./TripListPage";
import { TripInterface } from "./TripListPage";

function TripDetailsPage() {
  let { id } = useParams();
  const [title, setTitle] = useState<string | undefined>("");

  useEffect(() => {
    const trip = !id
      ? { name: "voyage inconnu" }
      : data?.find((trip) => trip?.id === Number(id));
    let newTitle = trip?.name;
    // let newTitle: string = typeof trip !== "boolean" ? setTitle(trip.name) : "Voyage inconnu";
    setTitle(newTitle);
  }, []);

  return (
    <MainLayout>
      <h2 className="text-2xl text-lime-600">{title}</h2>
      <Tabs.Group aria-label="Trip tabs" style="default">
        <Tabs.Item active icon={AiOutlinePushpin} title="Lieux">
          <PlaceTab areas={areas}></PlaceTab>
        </Tabs.Item>
        <Tabs.Item active icon={AiOutlineSend} title="Trajets"></Tabs.Item>
        <Tabs.Item active icon={AiOutlineCalendar} title="Planning"></Tabs.Item>
        <Tabs.Item active icon={AiFillHeart} title="#"></Tabs.Item>
      </Tabs.Group>
    </MainLayout>
  );
}

export default TripDetailsPage;
