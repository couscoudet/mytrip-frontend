import { useEffect, useState } from "react";
import ComboList from "../../Forms/ComboList";
import FormComponentWithValidation from "../../Forms/FormComponentWithValidation";
import MyTextArea from "../../Forms/MyTextArea";
import SubmitButton from "../../Forms/SubmitButton";
import TextInputWithValidation from "../../Forms/TextInputWithValidation";
import axios from "axios";
import fakeCategories from "../../../faker/categories.json";
import { get } from "http";

type Category = {
  id?: number | string | undefined;
  name: string;
};

type Place = {
  id?: number;
  name: string;
  address: string;
  description: string;
  category: Category;
};

const AddPlaceManually = () => {
  const [place, setPlace] = useState<Place>({
    name: "",
    address: "",
    description: "",
    category: {
      id: undefined,
      name: "",
    },
  });

  const [categories, setCategories] = useState<Category[]>([]);

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

  const setCategoryData = (category: Category) => {
    setPlace({ ...place, category: category });
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
        setItemData={setCategoryData}
        itemData={place.category}
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
