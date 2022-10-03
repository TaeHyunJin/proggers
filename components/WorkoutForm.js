export default function WorkoutForm() {
  return (
    <form action="/api/addworkout" method="post">
      <label htmlFor="first">Workout Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="exercises">Exercises</label>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label for="vehicle1"> I have a bike</label>
      <br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label for="vehicle2"> I have a car</label>
      <br />
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
      <label for="vehicle3"> I have a boat</label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
