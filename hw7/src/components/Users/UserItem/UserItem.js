import React, { useState } from 'react'
import DetailsItem from './DetailsItem.js'

export default function UserItem({ item }) {
    const [hidenDetails, setHidenDetails] = useState({ hiden: true, nameClass: "" });

    function toogleDetails() {
        if (hidenDetails.hiden) {
            setHidenDetails({ hiden: false, nameClass: "item__details_active" });
        } else {
            setHidenDetails({ hiden: true, nameClass: "item__details_hiden" });
        }
    }

    return (
        <div className="item">
            <p className="item__head head" onClick={ toogleDetails }>
                <span className="head__username">{ item.username }</span> - { item.name }
            </p>
            <DetailsItem item={ item } className={ `item__details ${hidenDetails.nameClass}` } />
        </div>
    )
}
