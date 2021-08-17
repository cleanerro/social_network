import React from "react";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ActionsType, ProfilePage} from "../../redux/state";


type ProfileType = {
    dispatch: (action: ActionsType) => void
    profilePage: ProfilePage
}



export const Profile: React.FC<ProfileType>  = ({profilePage, dispatch}) => {
    return (
        <div>
            <ProfileInfo name = 'Roma S.'
                         socialNetwork = 'Facebook'
                         avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UccHxXotQA8rNbk-aZ344Ow9d4Cn0qE8ap3y-c7pio4msVjFAfUVU8xnSm-ORjIjRuA&usqp=CAU'
            />
            <MyPosts profilePage={profilePage}
                     dispatch={dispatch}/>
        </div>
    );
}

