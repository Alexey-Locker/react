import { useEffect, useState } from 'react';
import { getItems, addItem, setItemById, delItem } from '../services';

export function useTodos() {
    const [items, setItems] = useState([]);

    function controlElement(newItem) {
        if (newItem.id) {
            setItemById(newItem).then(() => {
                setItems(items.map(item => newItem.id === item.id ? newItem : item)
                );
            })
        } else {
            addItem(newItem).then(({ data }) => setItems([...items, data]));
        }
    }
    function deleteElement(id) {
        delItem(id).then(() => setItems(items.filter(item => item.id !== id ? true : false)));
    }

    useEffect(() => {
        getItems().then(({ data }) => { setItems(data) });
    }, [])
    return { deleteElement, controlElement, items }
}

export function useForm() {
    const [activeForm, setActiveForm] = useState({
        update: {},
        hiden: true
    });
    function toggleForm(update = {}) {
        setActiveForm({ hiden: !activeForm.hiden, update })
    }
    return { toggleForm, activeForm }
}