import { useEffect, useState } from "react";
import { delItem, getItems } from "../services";

export function useDataBase(url) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function itemDelete(id) {
        delItem(url, id).then(() => {
            setItems((state) => {
                return state.filter((item) => item.id === id ? false : true)
            })
        });
    }

    useEffect(() => {
        setLoading(true);
        getItems(url).then(({ data }) => {
            setItems(data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setError(error);
        })
    }, [url])
    return { items, loading, itemDelete, error }
}