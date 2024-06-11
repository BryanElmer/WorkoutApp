import Navbar from "@/components/Navbar/index";
import HomeComponent from "@/components/HomeComponent/index"
import Image from "next/image";
import styles from "./index.module.css"

export default function Home() {
  return (
    <>
      <main className="bg-gray-500">
        <Navbar />
        <div className={styles.pages}>
          <HomeComponent />
        </div>
      </main>
    </>
  );
}
