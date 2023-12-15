import { useEffect, useState } from "react";
import { AreaInterface } from "../../../interface/AreaInterface";
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import AreaCard from "./AreaCard";

type Props = {
  areas: AreaInterface[];
};

function PlaceTab({ areas }: Props) {
  const [data, setData] = useState<AreaInterface[]>([]);
  const [openModalCreate, setOpenModalCreate] = useState<string | undefined>();
  const [newArea, setNewArea] = useState<AreaInterface | undefined>();

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setNewArea({ ...newArea, [id]: value });
  };

  const submitArea = () => {
    newArea && setData([...data, newArea]);
  };

  useEffect(() => {
    setData(areas);
  }, []);

  return (
    <div>
      <Button color="lime" onClick={() => setOpenModalCreate("default")}>
        Ajouter une zone
      </Button>
      <div className="flex flex-wrap">
        {data.map((area) => (
          <AreaCard key={area.id} area={area}></AreaCard>
        ))}
      </div>

      {/* Modal Windows */}
      <Modal
        show={openModalCreate === "default"}
        onClose={() => setOpenModalCreate(undefined)}
      >
        <Modal.Header>Ajout d'une zone</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex max-w-md flex-col justify-evenly gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Nom de la zone" />
                </div>
                <TextInput
                  onChange={(e) => handleChange(e)}
                  id="name"
                  name="name"
                  value={newArea?.name}
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
                  id="details"
                  name="details"
                  value={newArea?.details}
                  placeholder="Quelques mots sur votre voyage..."
                  required
                  rows={4}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModalCreate(undefined)}>
            Annuler
          </Button>
          <Button color="lime" onClick={() => submitArea()}>
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PlaceTab;
