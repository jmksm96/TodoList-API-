import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '7c107b4d-cd0a-4372-844b-6a20a61a6e27'
    }
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodolists()
            .then((res) => {
            setState(res.data)})
    })

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'title'
    useEffect(() => {
        todolistApi.createTodolists(title)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '25c1fe04-251c-477c-9754-13f72759539b';
    useEffect(() => {

        todolistApi.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }, [])


    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'e386ba91-52c8-42f9-a32d-501db0b622e1'
    useEffect(() => {
        todolistApi.updateTodoTitle(todolistId, 'New Title')
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

