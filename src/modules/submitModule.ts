import { FormEvent } from "react";
import makeRequest from "./requestModule.ts";

const handleSubmit = (e: FormEvent<HTMLFormElement>, time: string) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const UTCTime = new Date(time);
    formData.set("time", `${UTCTime.toISOString()}`);

    const dataObject = Object.fromEntries(formData.entries());
    const data = JSON.stringify(dataObject)
    console.log(data)

    makeRequest(data)
}

export default handleSubmit