
import {addPost, changeNewText, ProfilePageType, profileReducer} from "./profile-reducer";
import {addMessage, DialogsPageType, dialogsReducer, messageChange} from "./dialogs-reducer";


 type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

type ActionsTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof changeNewText> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof messageChange>

type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void

}




let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: '56'},
                {id: 2, message: 'I am front-end developer', likesCount: '86'},
                {id: 3, message: 'Yo', likesCount: '46'},
                {id: 4, message: 'Yo', likesCount: '57'},
                {id: 5, message: 'Hello', likesCount: '44'},
            ],
            newPostText: '',
            profile: null,
            status: ''
        },
        dialogsPage: {
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
    _callSubscriber() {
        console.log('State was changed')
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()

    },

    subscribe(callback: () => void) {
        this._callSubscriber = callback
    }
}

export default store
