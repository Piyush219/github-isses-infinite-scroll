import React, { useState } from 'react';
import styles from "./IssuesHeader.module.css";
import { FIRST_INNER_HEADER_ARR, HEAD_BOOKMARK_SVG, Nav_ARR } from '../../constants/Svgs_Arr/SvgArr';
import { HamburgerNav } from '../../constants/Hamburger/HamburgerNav';


export const IssuesHeader = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const showHamburgerIcon = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className={styles.issuesHeaderMainConatiner}>
            <div className={styles.issuesHeaderInnerFirst}>
                <div className={styles.firstInnerHeading}>
                    <span>
                        {HEAD_BOOKMARK_SVG}
                    </span>
                    <span className={styles.firstInnerHeaderText}>facebook / <strong> react</strong>
                        <span className={styles.issuesHeadPublicTag}>Public</span>
                    </span>
                </div>

                <div className="hamburger" onClick={showHamburgerIcon}>
                    <HamburgerNav isOpen={hamburgerOpen} listToShow={FIRST_INNER_HEADER_ARR} />
                </div>

                <div className={styles.firstInnerOtherTabs}>
                    {FIRST_INNER_HEADER_ARR.map((item, index) => {
                        return (
                            <div className={styles.otherTabsClass} key={index}>
                                <span>{item.svg}</span>
                                <span>{item.name}</span>
                                {item.hardCodedValue && <span className={styles.hardCodedValueClass}>{item.hardCodedValue}</span>}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.innerHeaderSecond}>
                {Nav_ARR.map((item, index) => {
                    return (
                        <div key={index} className={styles.navArrEachBlock}>
                            <span>{item.svg}</span>
                            <span>{item.name}</span>
                            {item.hardCodedValue && <span className={styles.hardCodedValueClass}>{item.hardCodedValue}</span>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}