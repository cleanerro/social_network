import s from "./Paginator.module.css";
import React, {useState} from "react";

export type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize: number
    onPageChanged: (pageNumber: number) => void

}

export const Paginator: React.FC<PaginatorPropsType> = ({totalItemsCount, pageSize, currentPage, portionSize =10, onPageChanged}) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber =  portionNumber * portionSize


    return (
        <div className={s.pagination}>
            <div className={s.items}>
                {portionNumber > 1 &&
                    <span>
                        <button onClick={() => {setPortionNumber(1)}}> First </button>
                        <button onClick={() => {setPortionNumber(portionNumber - 1)}}> Prev </button>
                    </span>
                }
                {pages
                    .filter (p => p>= leftPortionPageNumber && p<= rightPortionNumber)
                    .map(p => {
                        return <span className={currentPage === p ? s.selectedPage : s.page}
                                     onClick={() => {
                                         onPageChanged(p)
                                     }}>   {p}</span>
                    })}
                {portionCount > portionNumber &&
                    <span>
                        <button onClick={() => {setPortionNumber(portionNumber + 1)} }> Next </button>
                        <button onClick={() => {setPortionNumber(portionCount)} }> Last </button>
                    </span>
                }
            </div>

        </div>
    )
}