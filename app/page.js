"use client"; //This file and its imports (like Navbar) will render on the client
import Navbar from "./components/Navbar"; //Navbar will inherit client-side behavior

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  );
}
