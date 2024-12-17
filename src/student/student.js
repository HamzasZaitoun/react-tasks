import styles from './student.module.css';
import PropTypes from 'prop-types';  // Correct PropTypes import

function Student({name="guest", age=0, isStudent=false}) {
  return (
    <div className={styles.student}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is student?: {isStudent ? "yes" : "no"}</p>
    </div>
  );
}



export default Student;
