import React, {Component} from 'react'
import styled from 'styled-components'
import Input from '../../conponents/Input/Input'
import Button from '../../conponents/Button/Button.js'
import List from '../../conponents/List/List'
import ListLink from '../../conponents/conponents/ListLink/ListLink';
import {withRouter} from 'react-router-dom'

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


class TodoApp extends Component {
    constructor(props){
        super(props)
        this.state ={
            inputValue: '',
            list: [],
            id: 700,
            pathname: this.props.location.pathname
        }
    }

    onChangeHandlerInput (event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    onClickHandlerAdd (value, id){
        if (value.length >=1){
            let add = this.state.list.concat([{text: value, done: true, id }])
            this.setState({
                list: add,
                inputValue: '',
                id: this.state.id+1,
            })
        } else{alert("Field is empty")}
    }

    onClickHandlerDone (id, list) {
        let copyList = list.slice()
        for (let key in copyList){
            if(copyList[key].id === id) {
               copyList.splice(
                   key, 
                   1, 
                   {text: copyList[key].text, done: !copyList[key].done, id: copyList[key].id}
                ) 
            }
        }

        this.setState({
            list: copyList
       })
    }

    filterDone (path, list) {
        if (path === '/'){
             return list.sort( el => el.done === true ? -1: 1)
        }
        if (path === '/new'){
            return list.filter(el => el.done === true)
        }
        if (path === '/done'){
            return list.filter(el => el.done === false )
            
   } 
    }

    render(){

        return(
            <TodoAppBlock>
                <AddInputButton>
                <Input 
                    onChange = {(event) => {this.onChangeHandlerInput(event) }} 
                    inputValue={this.state.inputValue}
                />
                <Button 
                    text="Add" 
                    onClick = {() => this.onClickHandlerAdd(this.state.inputValue, this.state.id)}
                />
                </AddInputButton>
                
                <ListLink/>
                <List 
                    path = {this.pathname}
                    list = {this.state.list}
                    newlist = {this.filterDone(this.props.location.pathname, this.state.list) }
                    onClick = {(id, list) => this.onClickHandlerDone(id, list)}
                    onKeyPress = {(id, list) => this.onClickHandlerDone(id, list)}
                    filterDone = {this.filterDone}
                />
            </TodoAppBlock>
        )
    }
}

const WithRouterTodoApp = withRouter(TodoApp)

export default WithRouterTodoApp