import { useEffect, useState } from "react";
import ComboList from "../../Forms/ComboList";
import FormComponentWithValidation from "../../Forms/FormComponentWithValidation";
import MyTextArea from "../../Forms/MyTextArea";
import SubmitButton from "../../Forms/SubmitButton";
import TextInputWithValidation from "../../Forms/TextInputWithValidation";
import axios from "axios";
import fakeCategories from "../../../faker/categories.json";
import { get } from "http";

type Categories = {
  id: number;
  name: string;
  [key: string]: string | number | boolean;
};

const AddPlaceManually = () => {
  const [place, setPlace] = useState({
    name: "",
    address: "",
    description: "",
    category: {
      id: null,
      name: "",
    },
  });

  const [categories, setCategories] = useState<Categories[]>([]);

  // const setCategory = () => {
  //   set
  //   setPlace({ ...place, category: { id: 1, name: "Restaurant" } });
  // }

  useEffect(() => {
    const myCategories = fakeCategories.data;
    setCategories(myCategories);
  }, []);

  const getCategories = (query: string) => {
    const myCategories = fakeCategories.data.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase()),
    );
    return myCategories;
  };

  return (
    <FormComponentWithValidation>
      <TextInputWithValidation
        type="text"
        nameId="name"
        displayedLabel="Nom du lieu"
        placeholder="Nom du lieu"
        required
        pattern={/^[a-zA-ZÀ-ÖØ-öø-ÿ' -]{3,}$/}
        patternInformation="Le nom ne doit pas contenir de chiffre et faire au moins 3 caractères"
      />
      <TextInputWithValidation
        type="text"
        nameId="address"
        displayedLabel="Adresse complète"
        placeholder="N°, rue, ville, pays"
      />
      <ComboList
        nameId="placeType"
        displayedLabel="Type de lieu"
        items={categories}
        setItems={setCategories}
        getItems={getCategories}
      />
      <MyTextArea
        nameId="description"
        displayedLabel="Description"
        placeholder="précisions sur ce lieu"
      />
      <SubmitButton CTA="Valider" />
    </FormComponentWithValidation>
  );
};

export default AddPlaceManually;
