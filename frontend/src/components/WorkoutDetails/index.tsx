import { Workout } from "../../types/types";
import styles from "./index.module.css";

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails:React.FC<WorkoutDetailsProps> = ({ workout }) => {
  return (
    <div className={styles.workoutDetails}>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails