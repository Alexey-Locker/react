import { useEffect, useState } from "react";
import { createElement, deleteElement, getElements, updateElement } from "./services/service";

export default function useKeep() {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        getElements().then((items) => setElements(items.reverse()));
    }, [])

    function createKeep() {
        createElement({ description: "" }).then((item) => {
            setElements((elements) => [item, ...elements])
        });
    }
    function updateKeep(item) {
        updateElement(item).then(() => {
            setElements((elements) => elements.map(el => el.id === item.id ? item : el));
        });
    }

    function deleteKeep({ id }) {
        deleteElement(id).then(() => {
            setElements((elements) => elements.filter(el => el.id !== id));
        })
    }


    return { elements, setElements, deleteKeep, updateKeep, createKeep };
}