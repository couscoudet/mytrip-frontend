import { Button, Card, Dropdown, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { AreaInterface } from "../interface/AreaInterface";
import { useState } from "react";

type Props = {
  area: AreaInterface;
};

const AreaCard = ({ area }: Props) => {
  const [openModal, setOpenModal] = useState<string | undefined>();

  return (
    <div>
      <Card className="trip-card relative m-3">
        <div className="absolute -bottom-0 -right-0 flex justify-end">
          <Dropdown
            className="text-lime-500"
            color="white"
            label=""
            size="xs"
            dismissOnClick={false}
          >
            <Dropdown.Item className="text-lime-700">Modifier</Dropdown.Item>
            <Dropdown.Item
              className="text-red-500"
              onClick={() => setOpenModal("default")}
            >
              Supprimer
            </Dropdown.Item>
          </Dropdown>
        </div>
        <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{area.name}</p>
        </h5>
        {area?.places?.map((place) => (
          <Link
            to="#"
            className="truncate text-xs font-normal text-gray-700 dark:text-gray-400"
          >
            {place.name}
          </Link>
        ))}
      </Card>
      <Modal
        show={openModal === "default"}
        onClose={() => setOpenModal(undefined)}
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
          <Button color="failure" onClick={() => setOpenModal(undefined)}>
            Oui Supprimer
          </Button>
          <Button color="gray" onClick={() => setOpenModal(undefined)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AreaCard;
