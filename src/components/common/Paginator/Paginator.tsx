import s from "./Paginator.module.css";
import React from "react";

export type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pagination}>
            {pages.map(p => {
                return <span className={currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 onPageChanged(p)
                             }}> - {p}</span>
            })}
        </div>
    )
}