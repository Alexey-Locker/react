import { addItem, getElement, setItemById } from '../../../../../common/services';
import { URL_USERS } from '../constants';
import { useEffect, useState } from 'react'
export function useUser(userId) {

    const [user, setUser] = useState({ name: "", phone: "", email: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (userId === "add") return;
        setLoading(true)
        getElement(URL_USERS, userId).then(({ data }) => {
            setUser(data);
            setLoading(false)
        }).catch((err) => {
            console.error(err);
            setError(err.response)
            setLoading(false)
        })
    }, [userId])


    function updateUser() {
        return setItemById(URL_USERS, user);
    }

    function addUser() {
        return addItem(URL_USERS, user);
    }

    return { user, setUser, updateUser, addUser, error, loading };
}