import Link from "next/link";
import WorkoutForm from "../components/WorkoutForm";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CreateWorkout({ email }) {
  const [exercises, setExercises] = useState();
  useEffect(() => {
    console.log(email);
    const getExercises = async () => {
      const response = await axios.get("/api/getExerciseByEmail", {
        params: { email: email },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      setExercises(data);
    };
    getExercises();
  }, []);

  return (
    <>
      <h3>creater</h3>
      <p>
        need to have an api to my database allowing for creation of
        workouts/exercises
      </p>
      <WorkoutForm />
      <p>
        <button>add exercise</button>
      </p>
      <Link href="/">Back</Link>
    </>
  );
}
