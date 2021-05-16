import { useEffect, useState } from "react";
import { useDataBase } from "../../../../common/hooks/hooks.js";
import { URLAlbums, URLUsers } from "../../common/constants.js";

export function useAlboms() {
    const { items: albums } = useDataBase(URLAlbums);
    const { items: users } = useDataBase(URLUsers);
    const [albumsUsers, setAlbumsUsers] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const o = filterUsers(albums, users)
        setAlbumsUsers(o);
    }, [albums, users])
    console.log(users, albums)
    function filterUsers(items, namesUsers) {
        if (items.length === 0 || namesUsers.length === 0) return [];
        const arrUsers = items.reduce((arr, i) => {
            return ((arr[i.userId] || (arr[i.userId] = [])).push(i), arr)
        }, {});
        setLoading(false);
        return Object.entries(arrUsers).map(i => {
            const user = namesUsers.find((el) => +el.id === +i[0]) || { name: "User Deleted" }; //If the find method returned undefined, then set the object
            const object = {
                userId: i[0],
                name: user.name,
                albums: i[1]
            };
            object.albums.forEach(a => {
                delete a.userId;
            });
            return object;
        });
    }
    return { albumsUsers, loading }
}