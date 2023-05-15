import React from 'react';

import styles from '../style/Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <h2>crowdfund</h2>
        <div className={styles.nav__links__right}>
          <span>About</span>
          <span>Discover</span>
          <span>Get Started</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
