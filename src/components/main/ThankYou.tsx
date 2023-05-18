import React from 'react';

import styles from '../style/ThankYou.module.css';

const ThankYou = () => {
  return (
    <div className={styles.body}>
      <h2>Thanks for your support!</h2>
      <span className={styles.test}>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</span>
      <button>Got it!</button>
    </div>
  );
}

export default ThankYou;
