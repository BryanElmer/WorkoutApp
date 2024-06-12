"use client";

import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { Workout } from '@/types/types';

// Define the state and action types
interface State {
  workouts: Workout[] | null;
}

type Action = { type: 'SET_WORKOUTS'; payload: Workout[] } | { type: 'CREATE_WORKOUT'; payload: Workout };

// Reducer function
const workoutsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { ...state, workouts: action.payload };
    case 'CREATE_WORKOUT':
      return { ...state, workouts: [action.payload, ...(state.workouts || [])] };
    default:
      return state;
  }
};

// Create context
interface WorkoutsContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const WorkoutsContext = createContext<WorkoutsContextProps | undefined>(undefined);

export const WorkoutsContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {workouts: null});

  return (
    <WorkoutsContext.Provider value={{state, dispatch}}>
      {children}
    </WorkoutsContext.Provider>
  );
};
