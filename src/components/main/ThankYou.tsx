import React, { useState } from 'react';

import CheckIcon from "@mui/icons-material/Check";

import styles from "../style/ThankYou.module.css";

interface ThankYouProps {
  resetPerkSelection: () => void;
}

// This thankYouProps does not return anything because the func is called directly and so it does not need to return anything

const ThankYou: React.FC<ThankYouProps> = ({ resetPerkSelection }) => {
  const [gotItPerk, setgotItPerk] = useState(true);

  const handleButtonClick = () => {
    setgotItPerk(!gotItPerk);
    resetPerkSelection();
  };

  return (
    <>
      <div className={gotItPerk ? `${styles.overlay}` : `${styles.hide__overlay}`}></div>
      <div className={gotItPerk ? `${styles.body}` : `${styles.body} ${styles.hide__body}`}>
        <CheckIcon className={styles.check}/>
        <h2 className={styles.thanks__for}>Thanks for your support!</h2>
        <span className={styles.thanks__for__message}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </span>
        <button className={styles.gotIt__button} onClick={handleButtonClick}>Got it!</button>
      </div>
    </>

  );
};

export default ThankYou;
