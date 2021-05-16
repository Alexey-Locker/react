import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import useKeep from './hooks';

export default function Keep() {
    const { elements, deleteKeep, updateKeep, createKeep } = useKeep();


    return (
        <>
            <Header createKeep={ createKeep }></Header>
            <Content elements={ elements } updateKeep={ updateKeep } deleteKeep={ deleteKeep }></Content>
        </>
    )
}
