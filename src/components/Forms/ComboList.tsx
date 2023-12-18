import { Button, Label, ListGroup, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

type SearchProps = {
  nameId: string;
  setDisplayedList: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputItem: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputItem: string;
  setInputItem: React.Dispatch<React.SetStateAction<string>>;
  itemData: Item;
};

type AllProps = {
  nameId: string;
  displayedLabel: string;
  items: Item[];
  getItems: (input: string) => Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  setItemData: React.Dispatch<React.SetStateAction<Item>>;
  itemData: Item;
};

type Item = {
  id?: number | string | undefined;
  name: string;
};

type ListProps = {
  items: Item[];
  inputItem: string;
  confirmItem: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const SearchBar = ({
  nameId,
  setDisplayedList,
  handleInputItem,
  inputItem,
  setInputItem,
  itemData,
}: SearchProps) => {
  const displayOnBlur = () => {
    setDisplayedList(false);
    setInputItem(itemData.name);
  };

  return (
    <TextInput
      onFocus={() => setDisplayedList(true)}
      onBlur={displayOnBlur}
      id={nameId}
      name={nameId}
      type="text"
      value={inputItem}
      onChange={(e) => handleInputItem(e)}
    ></TextInput>
  );
};

const ListItems = ({ items, inputItem, confirmItem }: ListProps) => {
  const strictlyIdenticalItem = items?.filter(
    (item) => item.name.toLocaleLowerCase() === inputItem.toLowerCase(),
  )[0];
  console.log(items?.filter((item) => item.name === inputItem));
  return (
    <ListGroup className="absolute z-10 w-full" color="info">
      {!strictlyIdenticalItem && inputItem.length > 2 && (
        <button
          type="button"
          className=" flex w-full cursor-pointer border-b border-lime-100 bg-lime-100 px-4 py-2 text-left font-medium hover:bg-lime-200 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 rtl:text-right dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
        >
          <CiCirclePlus className="mr-2 h-5 w-5" />
          <span>{inputItem}</span>
        </button>
      )}
      {items?.map((item) => (
        <button
          key={item.id}
          id={item.id?.toString()}
          type="button"
          value={item.name}
          onMouseDown={(e) => confirmItem(e)}
          className="w-full cursor-pointer border-b border-gray-200 px-4 py-2 text-left font-medium hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 rtl:text-right dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
        >
          {item.name}
        </button>
      ))}
    </ListGroup>
  );
};

const ComboList = ({
  nameId,
  displayedLabel,
  items,
  getItems,
  setItems,
  setItemData,
  itemData,
}: AllProps) => {
  const [displayedList, setDisplayedList] = useState<boolean>(false);
  const [inputItem, setInputItem] = useState<string>("");
  // const [confirmedChoice, setConfirmedChoice] = useState<boolean>(false);

  useEffect(() => {
    displayItems();
  }, [inputItem]);

  const handleInputItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputItem(e.target.value);
  };

  const displayItems = async () => {
    const items = await getItems(inputItem);
    setItems(items);
  };

  const confirmItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { id, value } = e.target as HTMLInputElement;
    // setConfirmedChoice(true);
    setInputItem(value);
    setItemData({ id: +id, name: value });
  };

  return (
    <div className="relative">
      <Label htmlFor={nameId} value={displayedLabel} />
      <SearchBar
        nameId={nameId}
        setDisplayedList={setDisplayedList}
        handleInputItem={handleInputItem}
        inputItem={inputItem}
        setInputItem={setInputItem}
        itemData={itemData}
        // confirmedChoice={confirmedChoice}
      />
      {displayedList && (
        <ListItems
          inputItem={inputItem}
          items={items}
          confirmItem={confirmItem}
        />
      )}
    </div>
  );
};

export default ComboList;
