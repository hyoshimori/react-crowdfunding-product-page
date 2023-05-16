import React, { useState } from "react";

import Detail from './Detail';

import styles from '../style/About.module.css';

const About = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleButtonClick = () => {
    setShowDetail(showDetail => !showDetail);
  };

  return (
    <div className={styles.body}>
      <h2 className={styles.about__this__project}>About this project</h2>
      <div className={styles.about__upper}>
        <span className={styles.grey__color}>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</span>
        <span className={styles.grey__color}>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</span>
      </div>
      <div className={styles.about__lower}>
        <div className={styles.about__upper__name__and__price__top}>
          <p><strong>Bamboo Stand</strong></p>
          <span className={styles.green}>Pledge $ 25 or more</span>
        </div>
        <span className={`${styles.about__middle__description} ${styles.grey__color}`}>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</span>
        <div className={styles.about__lower__price__and__select__button__bottom}>
          <div className={styles.about__lower__price}>
            <p>101</p><span className={`${styles.grey__color} ${styles.left}`}>left</span>
          </div>
          <button onClick={handleButtonClick}>View Details</button>
        </div>
      </div>
      {showDetail && <Detail />}
      <div className={styles.about__lower}>
        <div className={styles.about__upper__name__and__price__top}>
          <p><strong>Black Edition Stand</strong></p>
          <span className={styles.green}>Pledge $ 75 or more</span>
        </div>
        <span className={`${styles.about__middle__description} ${styles.grey__color}`}>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</span>
        <div className={styles.about__lower__price__and__select__button__bottom}>
          <div className={styles.about__lower__price}>
            <p>64</p><span className={`${styles.grey__color} ${styles.left}`}>left</span>
          </div>
          <button onClick={handleButtonClick}>View Details</button>
        </div>
      </div>
      {showDetail && <Detail />}
      <div className={styles.about__lower}>
        <div className={styles.about__upper__name__and__price__top}>
          <p><strong>Mahogany Special Edition</strong></p>
          <span className={styles.green}>Pledge $ 25 or more</span>
        </div>
        <span className={`${styles.about__middle__description} ${styles.grey__color}`}>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</span>
        <div className={styles.about__lower__price__and__select__button__bottom}>
          <div className={styles.about__lower__price}>
            <p>0</p><span className={`${styles.grey__color} ${styles.left}`}>left</span>
          </div>
          <button onClick={handleButtonClick}>View Details</button>
        </div>
      </div>
      {showDetail && <Detail />}
    </div>
  );
}

export default About;
