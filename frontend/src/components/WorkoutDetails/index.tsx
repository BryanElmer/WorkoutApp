import { Workout } from "../../types/types";
import { useWorkoutsContext } from "@/hooks/useWorkoutsContext";

import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

import styles from "./index.module.css";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails:React.FC<WorkoutDetailsProps> = ({ workout }) => {
  const {state, dispatch} = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className={styles.workoutDetails}>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span onClick={handleClick}>
        <DeleteOutlinedIcon />
      </span>
    </div>
  )
}

export default WorkoutDetails