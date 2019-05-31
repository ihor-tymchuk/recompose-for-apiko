import React from 'react'
import styled from 'styled-components'

const ItemLi = styled.li`
    border: solid 1px green;
    padding: 10px;
    margin: 5px;
    color: ${props => props.done ? 'green': 'grey'};
    text-decoration: ${props => props.done ? 'inherit':'line-through'};
    border-color: ${props => props.done ? 'green':'grey'};
   
    cursor: pointer;

`

const ListItem = ({list, done, text, id, onClick}) => 
       { 
           return(
            <ItemLi 
                done = {done} 
                onClick = {() => onClick({id, list})}>
                    {text}  
            </ItemLi>
        )}
    

export default ListItem
