import React, { useState } from "react";

import ThankYou from './ThankYou';

import styles from '../style/About.module.css';

import * as perkTypes from '../../../types/perk';

const About = () => {
  const [selectedPerk, setSelectedPerk] = useState(-1); // Start with no perk selected

  const backThisProjectClick = () => {};

  // perk mock up data as this is only the front end app //
  const perks: perkTypes.Perk[] = [
    {
      name: 'Bamboo Stand',
      description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
      numbersLeft: 101,
      minPledge: 25,
    },
    {
      name: 'Black Edition Stand',
      description: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      numbersLeft: 64,
      minPledge: 75,
    },
    {
      name: 'Mahogany Special Edition',
      description: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      numbersLeft: 0,
      minPledge: 200,
    }
  ];


  const handleButtonClick = (index: number) => {
    // Toggle selected perk, or deselect if it's already selected
    setSelectedPerk(selectedPerk === index ? -1 : index);
  };

  // Passign this func to "handleButtonClick" func in ThankYou component to reset the state
  const resetPerkSelection = () => {
    setSelectedPerk(-1);
  };

  return (
    <div className={styles.body}>
      <h2 className={styles.about__this__project}>About this project</h2>
      <div className={styles.about__upper}>
        <span className={`${styles.grey__color} ${styles.desciption__message}`}>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</span>
        <span className={`${styles.grey__color} ${styles.desciption__message}`}>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</span>
      </div>
      {/* loop of perks from perkContext */}
      {perks.map((perk, index) => (
        <div key={index} className={styles.about__lower}>
          <div className={styles.about__upper__name__and__price__top}>
            <p><strong>{perk.name}</strong></p>
            <span className={styles.green}>Pledge ${perk.minPledge} or more</span>
          </div>
          <span className={`${styles.about__middle__description} ${styles.grey__color}`}>{perk.description}</span>
          <div className={styles.about__lower__price__and__select__button__bottom}>
            <div className={styles.about__lower__price}>
              <p>{perk.numbersLeft}</p><span className={`${styles.grey__color} ${styles.left}`}>left</span>
            </div>
            <button className={styles.button} onClick={() => handleButtonClick(index)}>Select Details</button>
          </div>
          {/* if the index selected is same as the index in the state */}
          {selectedPerk === index && <ThankYou resetPerkSelection={resetPerkSelection} backThisProjectClick={backThisProjectClick}/>}
        </div>
      ))}
    </div>
  );

}

export default About;
