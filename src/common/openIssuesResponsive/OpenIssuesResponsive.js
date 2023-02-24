import React from 'react';
import { CLOSED_ISSUES_SVG, OPEN_ISSUE_SVG } from '../../constants/Svgs_Arr/SvgArr';
import styles from "./OpenIssuesResponsive.module.css";

export const OpenIssuesResponsive = () => {
  return (
    <div>
          <div className={styles.openIssuesText}>
              <span>
                  {OPEN_ISSUE_SVG}
              </span>

              <strong>
                  929 Open
              </strong>

              <span>
                  {CLOSED_ISSUES_SVG}
              </span>

              <span>11,115 Closed</span>
          </div>
    </div>
  )
}
