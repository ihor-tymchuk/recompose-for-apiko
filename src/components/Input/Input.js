import React from 'react'
import styled from 'styled-components'


const InputFild = styled.input`
    padding: 10px;
    width:50%;
    align-self: center;
    margin: 20px;
    /* flex-grow: 6; */
`


const Input = ({onChange, value}) => {
    return(
        <InputFild 
	        placeholder = "To-do" 
	        onChange = {onChange} 
	        value={value} />
    )
}

export default Input