import axios from "axios"


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '7c107b4d-cd0a-4372-844b-6a20a61a6e27'
    }
})

type CommonResponseType<T = {}> = {
    fieldsError: Array<string>
    resultCode: number
    messages: Array<string>
    data: T
}

type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}


export const todolistApi = {
    getTodolists() {
        let promise = instance.get<Array<TodoType>>('todo-lists')
        return promise
    },
    createTodolists(title: string) {
        let promise = instance.post <CommonResponseType> ('todo-lists', {title})
        return promise
    },
    deleteTodolist(todolistId: string) {
        let promise = instance.delete <CommonResponseType> (`todo-lists/${todolistId}`)
        return promise
    },
    updateTodoTitle(todolistId: string, title: string) {
        let promise = instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title: title})
        return promise
    }
}