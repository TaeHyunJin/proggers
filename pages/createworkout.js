import Link from "next/link";

export default function CreateWorkout() {
  return (
    <>
      <h3>creater</h3>
      <p>
        need to have an api to my database allowing for creation of
        workouts/exercises
      </p>
      <p>
        <button>add exercise</button>
      </p>
      <Link href="/">Back</Link>
    </>
  );
}
