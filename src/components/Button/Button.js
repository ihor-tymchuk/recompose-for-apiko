import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    width: 100px;
    align-self: center;
    border: solid 2px green;
    background-color: rgba(0,0,0,0);
    color: #397a45;
    font-weight: bolder;
    padding: 5px;
    cursor: pointer;
`

const Button = ({text, onClick}) => {
    return(
        <Btn onClick={onClick}>{text}</Btn>
    )
}

export default Button