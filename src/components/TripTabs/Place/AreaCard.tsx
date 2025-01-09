import { Button, Card, Dropdown, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { AreaInterface } from "../../../interface/AreaInterface";
import { useState } from "react";
import SearchMap from "../../GoogleMap/SearchMap";
import SelectPlaceSearchOption from "./SelectPlaceSearchOption";
import AddPlaceManually from "./AddPlaceManually";

type Props = {
  area: AreaInterface;
};

const AddPlaceButton = ({ isSelected }: any) => {
  const handleClick = () => {};
  return (
    isSelected && (
      <Button className="m-5" color="lime" onClick={handleClick}>
        Confirmer l'ajout
      </Button>
    )
  );
};

export type Selected = {
  lat: number;
  lng: number;
  address: string;
};

const AreaCard = ({ area }: Props) => {
  //Google Maps Selected Place
  const [selected, setSelected] = useState<Selected | null | undefined>(null);
  const [openModalSup, setOpenModalSup] = useState<string | undefined>();
  const [openModalAddPlace, setOpenModalAddPlace] = useState<
    string | undefined
  >();
  const [searchOptionToDisplay, setSearchOptionToDisplay] =
    useState<string>("");

  const handleSearchMethod = (method: string) => {
    setSearchOptionToDisplay(method);
  };

  const reinitiate = () => {
    setOpenModalAddPlace(undefined);
    setSearchOptionToDisplay("");
  };

  const CancelButton = () => {
    return (
      <Button className="m-5" color="gray" onClick={reinitiate}>
        Annuler
      </Button>
    );
  };

  return (
    <div>
      <Card className="area-card relative m-3">
        <div className="flex h-full flex-col justify-start">
          <div className="absolute -bottom-0 -right-0 flex justify-end dark:text-white">
            <Dropdown
              className="text-lime-500"
              color="white"
              label=""
              size="xs"
              dismissOnClick={false}
            >
              {" "}
              <Dropdown.Item className="text-lime-600 dark:text-lime-600">
                Voir tout
              </Dropdown.Item>
              <Dropdown.Item className="text-lime-700 dark:text-lime-700">
                Modifier
              </Dropdown.Item>
              <Dropdown.Item
                className="text-red-500 dark:text-red-500"
                onClick={() => setOpenModalSup("default")}
              >
                Supprimer
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="card-title flex h-[50px] items-center justify-between">
            <div className="w-[200px]">
              <h5 className="text-l text-left font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{area.name}</p>
              </h5>
              <p className="truncate text-ellipsis text-left text-xs dark:text-gray-200">
                {area.details}
              </p>
            </div>
            <Button
              pill
              color="lime"
              onClick={() => setOpenModalAddPlace("default")}
            >
              +
            </Button>
          </div>
          <div className="flex h-[250px] flex-col justify-center">
            {area?.places?.map((place) => (
              <Link
                key={place.id}
                to="#"
                className="my-3 truncate text-xs font-normal text-gray-700 dark:text-gray-400"
              >
                {place.name}
              </Link>
            ))}
          </div>
        </div>
      </Card>

      {/* Modal Windows */}
      <Modal
        show={openModalSup === "default"}
        onClose={() => setOpenModalSup(undefined)}
      >
        <Modal.Header>Supprimer la zone</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Etes-vous certain de vouloir supprimer cette zone voyage ?{" "}
              <b className="text-red-500">Les lieux ne seront plus associés.</b>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={() => setOpenModalSup(undefined)}>
            Oui Supprimer
          </Button>
          <Button color="gray" onClick={() => setOpenModalSup(undefined)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={openModalAddPlace === "default"}
        onClose={reinitiate}
        className="search-modal"
      >
        <Modal.Header>Ajouter un lieu</Modal.Header>
        <Modal.Body>
          {searchOptionToDisplay == "" && (
            <SelectPlaceSearchOption handleSearchMethod={handleSearchMethod} />
          )}
          {searchOptionToDisplay == "GoogleMaps" && (
            <SearchMap selected={selected} setSelected={setSelected} />
          )}
          {searchOptionToDisplay == "Manually" && <AddPlaceManually />}
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-center">
            <CancelButton /> <AddPlaceButton isSelected={selected} />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AreaCard;
