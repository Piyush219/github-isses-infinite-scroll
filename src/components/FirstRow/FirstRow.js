import React from 'react';
import { OpenIssuesResponsive } from '../../common/openIssuesResponsive/OpenIssuesResponsive';
import { FIRST_ROW_VALUES_ARR, FIRST_ROW_SVG } from '../../constants/Svgs_Arr/SvgArr';
import styles from "./FirstRow.module.css";

export const FirstRow = () => {

    return (
        <>

            {/* Open Issue Component Position will change according to the Design Responsiveness and only
            one will display at a time */}


            <div className={styles.outOfContainer}>
                <OpenIssuesResponsive />
            </div>

            <div className={styles.firstRowMainContainer}>
                <div className={styles.inContainer}>

                    <OpenIssuesResponsive />
                </div>

                <div className={styles.firstRowValues}>
                    {FIRST_ROW_VALUES_ARR.map((item, index) => {
                        return (
                            <span key={index}>{item.name} {FIRST_ROW_SVG}</span>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
