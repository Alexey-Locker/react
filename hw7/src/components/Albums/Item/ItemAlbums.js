import React from 'react'

export default function ItemAlbums({ album }) {
    return (<>
        <div className="albums__img">
            <p className="albums__name">{ album.title }</p>
        </div>
    </>
    )
}
