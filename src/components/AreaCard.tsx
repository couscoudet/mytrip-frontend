import {
  Button,
  Card,
  Dropdown,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { AreaInterface } from "../interface/AreaInterface";
import { useState } from "react";
import SearchMap from "./SearchMap";

type Props = {
  area: AreaInterface;
};

const AreaCard = ({ area }: Props) => {
  const [openModalSup, setOpenModalSup] = useState<string | undefined>();
  const [openModalAddPlace, setOpenModalAddPlace] = useState<
    string | undefined
  >();

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
        onClose={() => setOpenModalAddPlace(undefined)}
        className="search-modal"
        tabindex="0"
      >
        <Modal.Header>Ajouter un lieu</Modal.Header>
        <Modal.Body>
          <SearchMap />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AreaCard;
