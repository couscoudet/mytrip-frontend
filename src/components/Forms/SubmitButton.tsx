import { Button } from "flowbite-react";

type Props = {
  CTA: string;
};

const SubmitButton = ({ CTA }: Props) => {
  return (
    <Button color="lime" type="submit">
      {CTA}
    </Button>
  );
};

export default SubmitButton;
