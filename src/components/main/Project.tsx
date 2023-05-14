import Nav from './Nav';
import Banner from './Banner';
import Price from './Price';
import About from './About';

import styles from '../style/Project.module.css';

const Project = () => {

  return (
    <div className={styles.body}>
      <h2>Project Page</h2>
      <Banner/>
      <Nav/>
      <Price/>
      <About/>
    </div>
  );
};

export default Project;
