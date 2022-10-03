import Link from "next/link";
import WorkoutForm from "../components/WorkoutForm";

export default function CreateWorkout() {
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
