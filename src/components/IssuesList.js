import React, { forwardRef } from 'react';
import "./IssuesList.css";

export const IssuesList = forwardRef(function IssuesList(props, ref) {
    const issuesList = [...props.issuesList]

    return (
        <>
            <div ref={ref} id="infiniteScrollList" className="issuesListMainContainer">
                {issuesList.map((issues, index) => {
                    return (
                        <div className="issuesBlock" key={index}>
                            <div className="issuesDescriptions">
                                <span>
                                    <svg className="octicon octicon-issue-opened open"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="16"
                                        height="16"
                                        aria-hidden="true">
                                        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                        <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                                    </svg>
                                </span>

                                <div className="issuesTitleLables">
                                    <span className="issuesTitle"><a href={issues.url} target="_blank" rel="noopener noreferrer">{issues.title}</a></span>

                                    {issues.labels.length && issues.labels.map((label, index) => {
                                        return (

                                            <span key={label.id} style={{ backgroundColor: `#${label.color}` }} className="issueLabels">
                                                {label.name}
                                            </span>
                                        )
                                    })}
                                </div>

                            </div>

                            <div className="issuesOtherDetails">
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
