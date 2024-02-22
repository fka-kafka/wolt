import { FormEvent } from "react";

const handleSubmit = (e: FormEvent<HTMLFormElement>, time: string) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const UTCTime = new Date(time);
    formData.set("time", `${UTCTime.toISOString()}`);

    const dataObject = Object.fromEntries(formData.entries());
    const serverRequest = JSON.stringify(dataObject)
    console.log(serverRequest)
}

export default handleSubmit