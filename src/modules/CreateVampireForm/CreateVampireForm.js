import React, { useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import Description from "./description";
import Clans from "./clans";

const CreateVampireForm = () => {
  const methods = useForm({
    mode: "onChange"
  });

  const values = methods.watch;
  console.log({ ...values() });

  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    methods.register({ name: "clan" });
  }, [methods]);

  return (
    <>
      <h1>création vampire</h1>
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Description />
          <Clans />
          <div>
            <input type="submit" />
          </div>
        </form>
      </FormContext>
    </>
  );
};
export default CreateVampireForm;
