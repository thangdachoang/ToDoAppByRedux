
import { Container } from '@mui/system'
import React from 'react'
import SearchComponent from './Filter'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { Item } from './styleMui'
import { useSelector } from 'react-redux'
import { todoListSelector} from '../redux/selectors'


export default function TodoList() {

    const todoList = useSelector(todoListSelector)

    let renderTodo = () => {
        return todoList.map((item) => {
            return (
                <Todo key={item.id} item={item} />
            )
        })
    }

    return (

        <div>
            <Container>
                <Item>
                    <TodoForm />
                    <SearchComponent />
                    {renderTodo()}
                </Item>
            </Container>
        </div>
    )
}
