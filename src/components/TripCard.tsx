import { Banner, Button, Card, Dropdown, Modal } from "flowbite-react"
import { useState } from "react";

type Props = {
    title: string,
    description: string,
    image: string
}

function TripCard({
    title,
    description,
    image
}: Props) {

  const [openModal, setOpenModal] = useState<string | undefined>();
  const [seeText, setSeeText] = useState<string>('none');

  return (
    <div>
      <Card className="trip-card m-3 relative" imgSrc={image} onMouseEnter={() => setSeeText("block")} onMouseLeave={() => setSeeText("none")}>
          <div className="flex justify-end absolute -bottom-0 -right-0">
            <Dropdown className="text-lime-500" color="white" label="" size="xs"dismissOnClick={false}>
              <Dropdown.Item className="text-lime-700">Modifier</Dropdown.Item>
              <Dropdown.Item className="text-red-500" onClick={() => setOpenModal('default')}>Supprimer</Dropdown.Item>
            </Dropdown>
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            {title}
          </p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 truncate text-xs">
            {description}
        </p>
        <Banner style={{display: seeText}} className="absolute bg-lime-500 top-0 text-white p-2 rounded w-[300px] left-0">{description}</Banner>
      </Card>
      <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
        <Modal.Header>Supprimer le voyage</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Etes-vous certain de vouloir supprimer ce voyage <b className="text-red-500">et l'ensemble des éléments qui lui sont associés ?</b>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={() => setOpenModal(undefined)}>Oui Supprimer</Button>
          <Button color="gray" onClick={() => setOpenModal(undefined)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TripCard