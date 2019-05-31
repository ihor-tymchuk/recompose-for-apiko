import React from 'react'
// import WithRouterTodoApp from './containers/TodoApp/TodoApp';

import styled from 'styled-components'
import Input from './components/Input/Input'
import Button from './components/Button/Button.js'
import List from './components/List/List'
import ListLink from './components/ListLink/ListLink'
import {
        compose,
        withStateHandlers,   
} from 'recompose'


const TodoAppBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const AddInputButton = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
`

const firstState = ({ list=[], id = 700, location}) => ({
    inputValue: "",
    list,
    id, 
    pathname: '/'
 })

const onChangeInput = (event) => {
    return ({inputValue: event.target.value })
}

const onClickAddItem = props => {
    let {list, inputValue, id} = props
    if (inputValue.length>0){
            return({
            list: list.concat([{text: inputValue, done: true, id: id }]),
            inputValue: '',
            id: ++id,
        })
        } else (
            alert('field is empty')
        )
    
}

const onCheckItem = props => {
    let {list, id} = props
    let copyList = list.slice()
    for (let key in copyList){
        if(copyList[key].id === id) {
            copyList.splice(
                key, 
                1, 
                {
                	text: copyList[key].text, 
                	done: !copyList[key].done, 
                	id: copyList[key].id
                }
            ) 
        }
    }
    return ({list: copyList})
}

const filterItem = props => {
    let {pathname, list} = props
    if (pathname === '/'){
        return list.sort( el => el.done === true ? -1: 1)
    }
    if (pathname === '/new'){
        return list.filter(el => el.done === true)
                }
    if (pathname === '/completed'){
        return list.filter(el => el.done === false )
    } 
}

const onClickLink = props => {
    return ({pathname: props.target.pathname})
}

const WithToDoApp = compose( 
    withStateHandlers(
         firstState,
         {
            changeInput: () => onChangeInput,

            addItem: () => onClickAddItem,
             
            itemsClick: () => onCheckItem,

            filterDone : () => filterItem,

            onClickLink: () => onClickLink,   
         }
    ),
)

const ToDo = ({inputValue, list, id, pathname, changeInput, addItem, itemsClick, onClickLink}) => 
         
<TodoAppBlock>

	<AddInputButton>
    
	    <Input 
	        value = {inputValue} 
	        onChange = { (event) => changeInput(event)}/>
	    <Button 
	        text = "Add" 
	        onClick = { () => addItem({list, inputValue, id}) } />

    </AddInputButton>

    <ListLink
        onClick = {onClickLink}/>

    <List 
        path = {pathname}
        list = {list}
        newlist = { filterItem({pathname, list}) }
        onClick = {itemsClick} 
    />
</TodoAppBlock>


const App = WithToDoApp(ToDo)


export default App;
