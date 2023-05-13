import React, { useState } from "react";
import Detail from './Detail';

import styles from '../style/Project.module.css';

const Project = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleButtonClick = () => {
    setShowDetail(showDetail => !showDetail);
  };

  return (
    <div className={styles.body}>
      <h2>Project Page</h2>
      <button onClick={handleButtonClick}>View Details</button>
      {showDetail && <Detail />}
    </div>
  );
};

export default Project;
