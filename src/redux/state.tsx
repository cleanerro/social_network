export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostsDataType = {
    id: number
    message: string
    likesCount: string
}
export type ProfilePage = {
    posts: Array<PostsDataType>
    newPostText: string
}
export type MessagePage = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePage
    messagePage: MessagePage
}

export type AddPostActionsTypes = {
    type: 'ADD-POST'
}
export type UpdateNewPostActionsTypes = {
    type: 'UPDATE-NEW-POST'
    newText: string
}
export type AddMessageActionsTypes = {
    type: 'ADD-MESSAGE'
}
export type UpdateNewMessageActionsTypes = {
    type: 'UPDATE-NEW-MESSAGE'
    newText: string
}

export type ActionsTypes = AddPostActionsTypes | UpdateNewPostActionsTypes | AddMessageActionsTypes | UpdateNewMessageActionsTypes



export type StoreType ={
    _state: StateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void

}

let store: StoreType  = {
    _state: {
    profilePage: {
        posts: [
            {id: 1, message: 'hi', likesCount: '56'},
            {id: 2, message: 'I am front-end developer', likesCount: '86'},
            {id: 3, message: 'Yo', likesCount: '46'},
            {id: 4, message: 'Yo', likesCount: '57'},
            {id: 5, message: 'Hello', likesCount: '44'},
        ],
        newPostText: ''
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Andry'},
            {id: 2, name: 'Roma'},
            {id: 3, name: 'Sergy'},
            {id: 4, name: 'John'},
            {id: 5, name: 'Devid'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'I am front-end developer'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Hello'},
        ],
        newMessageText: ''
    }
},
    _callSubscriber () {
        console.log('State was changed')
    },
    getState() {
        return this._state
    },

    dispatch(action){
        if(action.type ==='ADD-POST'){
            let newPost: PostsDataType = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: '0'
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        }else if(action.type === 'UPDATE-NEW-POST'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }else if(action.type === 'ADD-MESSAGE'){
            let newMessage: MessagesType = {
                id: 7,
                message: this._state.messagePage.newMessageText
            }
            this._state.messagePage.messages.push(newMessage)
            this._state.messagePage.newMessageText = ''
            this._callSubscriber()
        }else if(action.type === 'UPDATE-NEW-MESSAGE'){
            this._state.messagePage.newMessageText = action.newText
            this._callSubscriber()

        }
    },
   /* addPost (){
        let newPost: PostsDataType = {
            id: 7,
            message: this._state.profilePage.newPostText,
            likesCount: '0'
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPost (newText: string){
        this._state.profilePage.newPostText = newText
        this._callSubscriber()

    },
    addMessage() {
        let newMessage: MessagesType = {
            id: 7,
            message: this._state.messagePage.newMessageText
        }
        this._state.messagePage.messages.push(newMessage)
        this._state.messagePage.newMessageText = ''
        this._callSubscriber()

    },
    updateNewMessage (newText: string){
        this._state.messagePage.newMessageText = newText
        this._callSubscriber()

    },*/
    subscribe(callback: () => void){
        this._callSubscriber = callback
    }
}


/*let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi', likesCount: '56'},
            {id: 2, message: 'I am front-end developer', likesCount: '86'},
            {id: 3, message: 'Yo', likesCount: '46'},
            {id: 4, message: 'Yo', likesCount: '57'},
            {id: 5, message: 'Hello', likesCount: '44'},
        ],
        newPostText: ''
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Andry'},
            {id: 2, name: 'Roma'},
            {id: 3, name: 'Sergy'},
            {id: 4, name: 'John'},
            {id: 5, name: 'Devid'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'I am front-end developer'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Hello'},
        ],
        newMessageText: ''
    }
}
export let addPost = () => {
    let newPost: PostsDataType = {
        id: 7,
        message: state.profilePage.newPostText,
        likesCount: '0'
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree()

}
export let updateNewPost = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree()

}
export let addMessage = () => {
    let newMessage: MessagesType = {
        id: 7,
        message: state.messagePage.newMessageText
    }
    state.messagePage.messages.push(newMessage)
    state.messagePage.newMessageText = ''
    renderEntireTree()

}
export let updateNewMessage = (newText: string) => {
    state.messagePage.newMessageText = newText
    renderEntireTree()

}
let renderEntireTree = () => {
    console.log('State was changed')
}
export const subscribe = (callback: () => void) => {
    renderEntireTree = callback
}*/
export default store