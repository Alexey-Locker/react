import React from 'react'
import { URLUsers } from "../../common/constants.js";
import { useDataBase } from "../../common/hooks/hooks"
import UserItem from './UserItem/UserItem';
import "./Users.scss"
export default function Users() {
    const { items } = useDataBase(URLUsers);
    return (
        <>
            <section className="users">
                { items.map(item => <UserItem item={ item } key={ item.id } />) }
            </section>
        </>
    )
}
