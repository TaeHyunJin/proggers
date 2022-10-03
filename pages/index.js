import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import WorkoutSelector from "../components/WorkoutSelector";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import LoginButton from "../components/LoginButton";
import { useSession } from "next-auth/react";
// const prisma = new PrismaClient();
// export async function getServerSideProps() {
//   // get all homes from db
//   const data = await prisma.workout.findMany({
//     include: {
//       exercises: true,
//     },
//   });

//   return {
//     props: {
//       data: JSON.parse(JSON.stringify(data)),
//     },
//   };
// }

export default function Home() {
  //   useEffect(() => {
  //     console.log(data);
  //   });
  const { data: session } = useSession();
  const [email, setEmail] = useState();

  useEffect(() => {
    if (session) setEmail(session.user.email);
  }, [session]);
  return (
    <div className={styles.container}>
      <h1>Proggers</h1>
      {session ? (
        <>
          <Link email={email} href="/createworkout">
            Create new workout
          </Link>
          <WorkoutSelector />
          <LoginButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
