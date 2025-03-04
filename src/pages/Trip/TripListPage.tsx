import { Tabs } from "flowbite-react"
import MainLayout from "../layout/MainLayout"
import { useState } from "react"
import TripCard from "../../components/TripCard"
import { AiFillHeart, AiOutlineSmile } from "react-icons/ai";

type Props = {}

function TripListPage({}: Props) {
    const [data, setData] = useState([
        {
            name: "trip1",
            notes: "voyages de 3 semaines en Ecosse",
            image_url: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/af9d0f6ce2e5887c121e0f049249d1f1/Europe_-_E__cosse_-_Cha__teau_d-Urquart.jpg?w=3864&h=2173&fl=progressive&q=50&fm=jpg",
            role: 1
        },
        {
            name: "trip2",
            notes: "voyage familial à velo de 4 semaines par la coulée verte de Paris à la normandie",
            image_url: "https://www.francevelotourisme.com/sites/default/files/styles/twitterimage/public/medias/images/en-famille-sur-la-voie-verte-cote-or_0.jpg?itok=YSgn0yr6",
            role: 2
        }

    ])


  return (
    <MainLayout>
         <Tabs.Group
        aria-label="Trip tabs"
        style="default"
         >
        <Tabs.Item
        active
        icon={AiFillHeart}
        title="Mes voyages"
        >
        <div className="flex flex-wrap">
        {data.filter((trip) => trip.role === 1).map((trip) => (<TripCard 
            title={trip.name} 
            description={trip.notes}
            image={trip.image_url}
        />))}
        </div>    
        </Tabs.Item>
        <Tabs.Item
        active
        icon={AiOutlineSmile}
        title="Autres Voyages"
        >
        <div className="flex flex-wrap">
        {data.filter((trip) => trip.role === 2).map((trip) => (<TripCard 
            title={trip.name} 
            description={trip.notes}
            image={trip.image_url}
        />))}
        </div>    
        </Tabs.Item>
        </Tabs.Group>
    </MainLayout>
  )
}

export default TripListPage