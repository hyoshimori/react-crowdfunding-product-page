import React from 'react';

import styles from '../style/Price.module.css';

const Price = () => {
  return (
    <div className={styles.body}>
      <div className={styles.body__and__progress}>
        <div>
          <p>$89,914</p>
          <span>of $100,000 backerd</span>
        </div>
        <div className={styles.middle__div}>
          <p>5,007</p>
          <span>total backers</span>
        </div>
        <div>
          <p>56</p>
          <span>days left</span>
        </div>
      </div>
      <progress className={styles.progress} max="100" value="89">100%</progress>
    </div>
  );
}

export default Price;
