import React, { useState } from 'react';

import styles from '../style/BackThisProject.module.css';

import BookmarkIcon from '@mui/icons-material/Bookmark';

const BackThisProject = () => {
  const [buttonToggle, setButtonToggle] = useState(false);

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
          <button className={styles.button}>Back this project</button>
          <button
            className={`${styles.bookmark} ${buttonToggle ? styles.bookmark__grey : ''}`}
            onClick={handleClick}
          >
            <div className={`${styles.bookmark__design} ${buttonToggle ? styles.bookmark__design__grey : ''}`}>
              <BookmarkIcon/>
            </div>
            Bookmark
          </button>
        </div>
    </div>
  );
}

export default BackThisProject;
