import React from 'react';

import styles from '../style/Banner.module.css';

import Nav from './Nav';

import "normalize.css";

const Banner = () => {
  return (
    <div className={styles.body}>
      <Nav/>
      <img className={styles.image}  src="/images/image-hero-desktop.jpg" alt="" />
    </div>
  );
}

export default Banner;
