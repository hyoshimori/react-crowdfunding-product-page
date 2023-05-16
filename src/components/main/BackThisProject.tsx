import React from 'react';

import styles from '../style/BackThisProject.module.css';

const BackThisProject = () => {
  return (
    <div className={styles.body}>
      <img className={styles.image}  src="/images/logo-mastercraft.svg" alt="" />
      <div className={styles.project__name__and__description}>
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <span className={styles.grey__color}>A beautiful $ handcrafted monitor stand to reduce neck and eye strain</span>
      </div>
        <div className={styles.buttons}>
          <button>Back this project</button>
          <button>Bookmark</button>
        </div>
    </div>
  );
}

export default BackThisProject;
