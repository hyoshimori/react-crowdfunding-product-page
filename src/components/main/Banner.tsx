import React from 'react';

import styles from '../style/Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.body}>
      <img className={styles.image}  src="/images/image-hero-desktop.jpg" alt="" />
    </div>
  );
}

export default Banner;
