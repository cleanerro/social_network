import React from "react";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow,
    UsersDataType,
    UsersPageType, toggleFollowingProgress
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersApi} from "../../api/api";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersDataType>) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    onPageChanged?: (pageNumber: number) => void
    portionSize: number

}
export type UsersContainerPagePropsType = UsersPageType & MapDispatchToPropsType

class UsersContainer extends React.Component <UsersContainerPagePropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersApi.getUsers(pageNumber, this.props.pageSize)
       .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalItemsCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   setCurrentPage={this.props.setCurrentPage}
                   setUsers={this.props.setUsers}
                   setUsersTotalCount={this.props.setUsersTotalCount}
                   unFollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingProgress = {this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   portionSize ={this.props.portionSize}



            />
        </>
    }

}

let mapStateToProps = (state: StateType): UsersPageType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress
})(UsersContainer)