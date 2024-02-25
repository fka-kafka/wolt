import { FormEvent } from "react";
import makeRequest from "./requestModule.ts";

const handleSubmit = (e: FormEvent<HTMLFormElement>, cartValue: string, distance: string, items: string, time: string) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const UTCTime = new Date(time);
    formData.set("cartValue", cartValue.replace(/^0+(?=\d)/, ''));
    formData.set("distance", distance.replace(/^0+(?=\d)/, ''));
    formData.set("items", items.replace(/^0+(?=\d)/, ''));
    formData.set("time", `${UTCTime.toISOString()}`);

    const dataObject = Object.fromEntries(formData.entries());
    const data = JSON.stringify(dataObject)

    makeRequest(data)
}

export default handleSubmit