import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import { Link, Navigate } from "react-router-dom";
import { addTrip } from "../../services/api/trip";
import axios from "axios";
import { useApi } from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

interface TripInterface {
  id?: undefined | number;
  name?: undefined | string;
  note?: undefined | string;
  image_url?: undefined | string;
}

function TripManager() {
  const [data, setData] = useState<TripInterface | undefined>({
    id: undefined,
    name: "",
    note: "",
    image_url: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    const newData: TripInterface | undefined = { ...data, [name]: value };
    setData(newData);
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      await useApi().post("/trip", data);
      navigate("/start-trip");
    } catch (e) {
      alert(e);
    }
  }
  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-100px)] flex-col items-center">
        {/* <div className='md:container md:mx-auto flex justify-center h-screen items-center'> */}
        <h2 className="mb-5 mt-3 text-2xl text-lime-700">
          {!data?.id ? "Créer un voyage" : "Modifier un voyage"}
        </h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex h-[60vh] max-w-md flex-col justify-evenly gap-4"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Nom du voyage" />
            </div>
            <TextInput
              onChange={(e) => handleChange(e)}
              id="name"
              name="name"
              value={data?.name}
              required
              type="text"
            />
          </div>
          <div className="max-w-md" id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Description" />
            </div>
            <Textarea
              onChange={(e) => handleChange(e)}
              className="p-1"
              id="note"
              name="note"
              placeholder="Quelques mots sur votre voyage..."
              required
              rows={4}
              value={data?.note}
            />
          </div>
          <div className="max-w-md" id="fileUpload">
            <div className="mb-2 block">
              <Label htmlFor="picture" value="Ajouter une image" />
            </div>
            <FileInput
              helperText="Une image permettra de visualiser votre voyage"
              id="trip_picture"
            />
          </div>

          <div className="flex justify-evenly">
            <Link to="/trips">
              <Button color="red">Annuler</Button>
            </Link>
            <Button type="submit" color="lime">
              <svg
                className="h-4 w-4 text-lime-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </Button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </MainLayout>
  );
}

export default TripManager;
