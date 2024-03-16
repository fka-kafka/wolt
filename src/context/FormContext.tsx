import { createContext, useState, FormEvent, ReactNode } from "react";
import axiosCall from "../modules/axiosSubmitModule.ts";

export type FormStateType = {
  cartValue: string;
  distance: string;
  items: string;
  time: string;
};

export type ChildrenType = {
  children: ReactNode;
};

export const FormContext = createContext<any>("");

export const initFormData: FormStateType = {
  cartValue: "",
  distance: "",
  items: "",
  time: "",
};

export const FormProvider = ({ children }: ChildrenType) => {
  const [formData, setFormData] = useState<FormStateType>(initFormData);
  const [deliveryFee, setDeliveryFee] = useState<number | boolean>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { cartValue, distance, items, time } = formData;
    const formInputs = new FormData(e.currentTarget);
    const UTCTime = new Date(time);

    formInputs.set("cartValue", cartValue.replace(/^0+(?=\d)/, ""));
    formInputs.set("distance", distance.replace(/^0+(?=\d)/, ""));
    formInputs.set("items", items.replace(/^0+(?=\d)/, ""));
    formInputs.set("time", `${UTCTime.toISOString()}`);

    const dataObject = Object.fromEntries(formInputs.entries());
    const data = JSON.stringify(dataObject);

    const computation = await axiosCall(data);
    setDeliveryFee(computation);
  };

  const deliveryFeeContent =
    typeof deliveryFee === "number" ? (
      <div className="result">
        <p>Delivery Fee: € {deliveryFee}</p>
      </div>
    ) : (
      <div className="result">
        <p>
          Delivery Fee exceeded. <br /> Review cart or explore different
          delivery options.
        </p>
      </div>
    );

  return (
    <FormContext.Provider
      value={{
        formData,
        handleInputChange,
        handleSubmit,
        deliveryFeeContent,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
