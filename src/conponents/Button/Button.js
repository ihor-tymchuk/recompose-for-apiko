import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    width: 100px;
    align-self: center;
    border: solid 1px green;
    background-color: rgba(0,0,0,0);
    color: green;
    padding: 5px;
    /* flex-grow: 2; */
    cursor: pointer;
`

const Button = ({text, onClick}) => {
    return(
        <Btn onClick={onClick}>{text}</Btn>
    )
}

export default Button