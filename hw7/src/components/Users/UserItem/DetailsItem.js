import React from 'react'

export default function DetailsItem({ item, ...props }) {

    const address = `${item.address.city}, ${item.address.street}, ${item.address.suite}`
    return (
        <div  { ...props } >
            <div>
                <p><span>Phone:</span> { item.phone }</p>
                <p><span>Website: </span>{ item.website }</p>
                <p><span>Home address: </span>{ address }</p>
                <p><span>Zipcode:</span> { item.address.zipcode }</p>
            </div>
            <div>
                <p><span>Name company: </span>{ item.company.name }</p>
                <p><span>Catchphrase:</span> { item.company.catchPhrase }</p>
                <p><span>Field of activity:</span> { item.company.bs } </p>
            </div>
        </div>
    )
}
