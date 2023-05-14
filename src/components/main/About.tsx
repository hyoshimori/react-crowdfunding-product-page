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
      <h2>About Page</h2>
      <button onClick={handleButtonClick}>View Details</button>
      {showDetail && <Detail />}
    </div>
  );
}

export default About;
