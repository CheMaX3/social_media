import React, {useState} from "react";
import classes from "./Paginator.module.css";
import cn from 'classnames';

let Paginator = ({totalItemsCount, pageSize, currentPage, setCurrentPage, partitionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let partitionCount = Math.ceil(pagesCount / partitionSize);
    let [partitionNumber, setPartitionNumber] = useState(1);
    let partitionLeftNumber = (partitionNumber - 1) * partitionSize + 1;
    let partitionRightNumber = partitionNumber * partitionSize;


    return <div className={classes.paginator}>
        { partitionNumber > 1 &&
        <button onClick={() => setPartitionNumber(partitionNumber - 1)}>PREV</button>}
        {pages
            .filter(page => page >= partitionLeftNumber && page <= partitionRightNumber)
            .map(page => {
            return <span className={ cn ({
                [classes.selectedPage] : currentPage === page
            }, classes.pageNumber) }
                         key={page}
                         onClick={() => { setCurrentPage(page) }}>{page}</span>
            })}
        { partitionCount > partitionNumber &&
            <button onClick={() => setPartitionNumber(partitionNumber + 1)}>NEXT</button> }
    </div>

}

export default Paginator;