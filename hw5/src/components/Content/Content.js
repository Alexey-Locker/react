import React from 'react'
import ContentItem from './ContentItem'

export default function Content({ elements, updateKeep, deleteKeep }) {
    return (
        <div className="content">
            {elements.map((element) =>
                <ContentItem key={ element.id } deleteKeep={ deleteKeep } updateKeep={ updateKeep } element={ element }></ContentItem>
            ) }
        </div>
    )
}
