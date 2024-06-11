"use client";

import { useEffect, useState } from "react";
import { Workout } from "../../types/types";

import WorkoutDetails from "../WorkoutDetails/index";
import WorkoutForm from "../WorkoutForm/index";
import styles from "./index.module.css";

const Home = () => {
  const [workouts, setWorkouts] = useState<Workout[] | null>(null);
  const apiUrl = process.env.API_URI;

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/workouts');
        const json = await response.json();
      
        if (response.ok) {
          setWorkouts(json);
        } else {
          console.error('Failed to fetch workouts.');
        }
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []); // 2nd arg if empty only render once when first rendered

  return (
    <div className={styles.home}>
      <div className={styles.workouts}>
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;