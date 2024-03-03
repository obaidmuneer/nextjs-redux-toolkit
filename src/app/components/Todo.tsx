import React, { useState } from 'react'
import { useAppSelector } from '../redux/hook'
import { useDispatch } from 'react-redux'
import { add, edit, remove } from '../redux/TodoSlice'

const Todo = () => {
    const [text, setText] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState<number | null>(null)
    const todos = useAppSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    const addHandler = () => {
        dispatch(add(text))
        setText("")
    }

    const editHandler = (index: number) => {
        dispatch(edit({ index: index, text: text }))
        setIsEdit(false)
        setIndex(null)
        setText("")
    }

    const removeHandler = (index: number) => {
        dispatch(remove(index))
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // if (!text) return
        console.log(isEdit);

        if (isEdit) {
            if (index === null) return
            editHandler(index)

        } else {
            addHandler()
        }
    }

    return (
        <div>
            <h1>Todo</h1>

            <form onSubmit={submitHandler}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value={isEdit ? "Edit" : "Add"} />
            </form>

            {/* avoid using index as key */}
            {
                todos.map((todo, i) => {
                    return (
                        <div key={i}>
                            <h2>{todo}</h2>
                            <button onClick={() => {
                                setIsEdit(true)
                                setIndex(i)
                                setText(todo)
                            }} >Edit</button>
                            <button onClick={() => removeHandler(i)}  >Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo