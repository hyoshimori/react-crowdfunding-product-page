import React, { useState } from 'react';

import styles from '../style/BackThisProject.module.css';

import BookmarkIcon from '@mui/icons-material/Bookmark';

import DetailBackThisProject from './DetailBackThisProject';

const BackThisProject = () => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const [backToggle, setBackToggle] = useState(false);

  // use this to show DetailBackThisProject in ternary operator //
  const backThisProjectClick = () => {
    setBackToggle(!backToggle);
  };

  // use this to use the bookmark button
  const handleClick = () => {
    console.log('button clicked')
    setButtonToggle(!buttonToggle);
  };

  return (
    <div className={styles.body}>
      <img className={styles.image}  src="/images/logo-mastercraft.svg" alt="" />
      <div className={styles.project__name__and__description}>
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <span className={styles.grey__color}>A beautiful & handcrafted monitor stand to reduce neck and eye strain</span>
      </div>
        <div className={styles.buttons}>
          {/* use this to show DetailBackThisProject in ternary operator */}
          <button className={styles.button} onClick={backThisProjectClick}>Back this project</button>
          {/* use this to use the bookmark button */}
          <button
            className={`${styles.bookmark} ${buttonToggle ? styles.bookmark__grey : ''}`}
            onClick={handleClick}
          >
            <div className={`${styles.bookmark__design} ${buttonToggle ? styles.bookmark__design__grey : ''}`}>
              <BookmarkIcon/>
            </div>
            <span className={styles.bookmark__design__letters}>Bookmark</span>
          </button>
        </div>
        {backToggle && <DetailBackThisProject />}
    </div>
  );
}

export default BackThisProject;
