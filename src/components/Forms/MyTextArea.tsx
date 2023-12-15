import { Label, Textarea } from "flowbite-react";

type Props = {
  nameId: string;
  displayedLabel: string;
  placeholder?: string;
};

const MyTextArea = ({ nameId, displayedLabel, placeholder }: Props) => {
  return (
    <div className="max-w-md" id="textarea">
      <div className="mb-2 block">
        <Label htmlFor={nameId} value={displayedLabel} />
      </div>
      <Textarea
        className="p-1"
        id={nameId}
        name={nameId}
        placeholder={placeholder}
        required
        rows={4}
      />
    </div>
  );
};

export default MyTextArea;
