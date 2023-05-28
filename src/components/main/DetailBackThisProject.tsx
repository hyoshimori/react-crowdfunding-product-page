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
            <div className={styles.details__projects__and__enter__your__pledge}>
              <div className={styles.details__projects__upper__and__lower} onClick={() => handleClick(index)}>
                <div key={index} className={styles.details__projects}>
                  {
                    // when the index of the loop is same as the state, button is checked
                    buttonToggele === index ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />
                  }
                  <div>
                    <div className={styles.details__projects__upper}>
                      <div className={styles.details__projects__upper__name__and__price}>
                        <h2>{el.name}</h2>
                        <span>Pledge {el.minPledge} or more</span>
                      </div>
                      <span>{el.numbersLeft} <span style={{  color: 'grey'}}>left</span></span>
                    </div>
                  </div>
                </div>
                <span onClick={() => handleClick(index)} className={styles.details__projects__lower}>{el.description}</span>
              </div>
              {
                buttonToggele === index ?
                <div className={styles.body__EnterYourPledge}>
                  <span style={{color: 'grey'}}>Enter your pledge</span>
                  <div className={styles.body__EnterYourPledge__right}>
                    <input type="text" placeholder={'$'  + el.minPledge.toString()}/>
                    <button>Continue</button>
                  </div>
              </div>
              :
                <></>
              }
            </div>
        )})
      }
    </div>
  );
}

export default DetailBackThisProject;
