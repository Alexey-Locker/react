import React from 'react'
import UserAlbums from './Item/UserAlbums';
import "./Albums.scss";
import { useAlboms } from './hooks';

export default function Albums() {
    const { albumsUsers } = useAlboms();


    return (
        <section className="albums">
            { albumsUsers.map((el) => <UserAlbums key={ el.userId } user={ el } ></UserAlbums>) }
        </section>
    )
}
