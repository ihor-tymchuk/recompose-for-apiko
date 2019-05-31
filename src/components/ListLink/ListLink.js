import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Div = styled.div`
    /* border: solid 1px black; */
    max-width:40%;
    align-self: center;
    margin: 5px;
    
    .active {
        border: solid  2px #397a45;
        color: #397a45;
        font-weight: bolder
        
    }
    a {
        text-decoration: none;
        color: green;
        margin: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 15px;
        padding-right: 15px;
    };
`

const ListLink = props => {
    return (
        <Div>
            <NavLink onClick = {props.onClick} to = "/" activeClassName = 'active' exact >All</NavLink>
            <NavLink onClick = {props.onClick} to = "/new" activeClassName = 'active' exact >New</NavLink>
            <NavLink onClick = {props.onClick} to = "/completed" activeClassName = 'active' exact>Completed</NavLink>
        </Div>
    )
}

export default ListLink