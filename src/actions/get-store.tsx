import { Store } from "../../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getStore = async (name: string): Promise<Store> => {
    const res = await fetch(`${URL}/stores?name=${encodeURIComponent(name)}`);
    const response = await res.json();

    return response;
};

export default getStore;