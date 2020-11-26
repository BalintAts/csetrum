import React from 'react'

const Navbar = props => {
    return (
        <div>
            <h1>{`Signed in as ${props.userEmail}`}</h1>
        </div>
    )
}

export default Navbar;
