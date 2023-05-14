import Nav from './Nav';
import Banner from './Banner';
import Price from './Price';
import About from './About';

import styles from '../style/Project.module.css';

import "normalize.css";

const Project = () => {

  return (
    <div className={styles.body}>
      <Banner/>
      <Nav/>
      <Price/>
      <About/>
    </div>
  );
};

export default Project;
