import React from 'react'
import ItemAlbums from './ItemAlbums'

export default function UserAlbums({ user }) {
    return (
        <div className="albums__card">
            <p className="albums__header">
                <span>Creating by:</span> { user.username }
            </p>
            <div className="albums__slider">
                { user.albums.map(el => <ItemAlbums key={ el.id } album={ el }></ItemAlbums>) }
            </div>
        </div>
    )
}
