import React, {ChangeEvent, useEffect, useState} from "react";


export type profileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatus = ( props: profileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }
        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}> {status || 'No status'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
                }
            </div>
        );
    }
