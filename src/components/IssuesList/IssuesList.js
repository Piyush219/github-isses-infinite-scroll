import React, { forwardRef } from 'react';
import { COMMENTS_IN_ISSUES_SVG, OPEN_ISSUE_SVG } from '../../constants/Svgs_Arr/SvgArr';
import styles from "./IssuesList.module.css";


// Taking the Refrence of Issues List Container to add Scroll event in the Parent App component

export const IssuesList = forwardRef(function IssuesList(props, ref) {
    const issuesList = props.issuesList;

    return (
        <>
            <div ref={ref} id="infiniteScrollList" className={styles.issuesListMainContainer}>
                {issuesList.map((issues, index) => {
                    return (
                        <div className={styles.issuesBlock} key={index}>
                            <div className={styles.issuesDescriptions}>
                                <span className={styles.octicon}>
                                    {OPEN_ISSUE_SVG}
                                </span>

                                <div className={styles.issuesTitleLables}>
                                    <span className={styles.issuesTitle}><a href={issues.url} target="_blank" rel="noopener noreferrer">{issues.title}</a></span>

                                    {issues.labels.length && issues.labels.map((label, index) => {
                                        return (

                                            <span key={label.id} style={{ backgroundColor: `#${label.color}` }} className={styles.issueLabels}>
                                                {label.name}
                                            </span>
                                        )
                                    })}
                                </div>

                                {(issues.comments !== 0) &&
                                    <div className={styles.issuesComments}>
                                        <span className={styles.commentsSvgCustom}>
                                            {COMMENTS_IN_ISSUES_SVG}
                                        </span>
                                        {<span>{issues.comments}</span>}
                                    </div>}


                            </div>

                            <div className={styles.issuesOtherDetails}>
                                <span>#{issues.number} </span><span>{issues.state} by {issues.name}</span>
                            </div>

                        </div>
                    )
                })}
            </div>

        </>
    )
}
)
