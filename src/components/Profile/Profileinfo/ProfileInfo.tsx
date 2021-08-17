import s from './ProfileInfo.module.css';

type profileInfoPropsType ={
    name: string
    socialNetwork: string
    avatar: string

}

export const ProfileInfo: React.FC<profileInfoPropsType> = (props) => {
    return (
        <div>
            <div className={s.descriptionInfo}>
                <img src= {props.avatar}/><br/>
                <div>{props.name}</div>
                <div>{props.socialNetwork}</div>
            </div>
        </div>
    );
}

