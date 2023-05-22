import React, { useState } from 'react';

import styles from '../style/DetailBackThisProject.module.css';

import { perkContext } from '../../contexts/perkContext';

import { useContext } from 'react';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

// import * as perkTypes from '../../../types/perk';

const DetailBackThisProject = () => {
  const [ buttonToggele, setButtonToggele ] = useState(-1);
  const perks = useContext(perkContext);


  const handleClick = (index: number) => {
    setButtonToggele(buttonToggele === index ? -1 : index);
  }

  return (
    <div className={styles.body}>
      {
        perks && perks.map((el, index) => {
          console.log(el.name)
          return(
            <div key={index} className={styles.details__projects} onClick={() => handleClick(index)}>
            {
              // when the index of the loop is same as the state, button is checked
              buttonToggele === index ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />
            }
            <div>
              <div className={styles.details__projects__upper}>
                <div className={styles.details__projects__upper__name__and__price}>
                  <h2>{el.name}</h2>
                  <span>{el.minPledge}</span>
                </div>
                <span>{el.numbersLeft}</span>
              </div>
              <span>{el.description}</span>
            </div>
          </div>
        )})
      }
    <p>aaa</p>
    </div>
  );
}

export default DetailBackThisProject;
