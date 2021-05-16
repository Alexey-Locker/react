import { useEffect, useState } from "react";
import { useDataBase } from "../../common/hooks/hooks";
import { URLAlbums, URLUsers } from "../../common/constants.js";

export function useAlboms() {
    const { items: albums } = useDataBase(URLAlbums);
    const { items: users } = useDataBase(URLUsers);
    const [albumsUsers, setAlbumsUsers] = useState([]);

    useEffect(() => {
        const o = filterUsers(albums, users)
        setAlbumsUsers(o);
    }, [albums, users])

    function filterUsers(items, namesUsers) {
        if (items.length === 0 || namesUsers.length === 0) return [];
        const r = items.reduce((r, i) => {
            return ((r[i.userId] || (r[i.userId] = [])).push(i), r)
        }, {});
        return Object.entries(r).map(i => {
            const user = namesUsers.find((el) => el.id === +i[0])
            const o = {
                userId: i[0],
                username: user.username,
                albums: i[1]
            };
            o.albums.forEach(a => {
                delete a.userId;
            });
            return o;
        });
    }
    return { albumsUsers }
}