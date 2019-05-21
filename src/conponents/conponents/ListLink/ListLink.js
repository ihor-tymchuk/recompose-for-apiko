import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Div = styled.div`
    /* border: solid 1px black; */
    max-width:40%;
    align-self: center;
    margin: 5px;
    a {
        color: green;
        margin: 10px;
    };
    a:hover {
        color: red;
    }
`

const ListLink = props => {
    return (
        <Div>
            <Link to = "/" active >All</Link>
            <Link to = "/new" >New</Link>
            <Link to = "/done" >Done</Link>
        </Div>
    )
}

export default ListLink