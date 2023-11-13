import { TextInput } from "flowbite-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

type Inputs = {
  example: string;
  exampleRequired: string;
};

const FormComponentWithValidation = ({ children }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactNode | any) => {
      return React.cloneElement(child, {
        register: register,
        errors: errors,
      });
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      {renderChildren()}
    </form>
  );
};

export default FormComponentWithValidation;
