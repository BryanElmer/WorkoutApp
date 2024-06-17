import HomeComponent from "@/components/HomeComponent/index"
import styles from "./index.module.css"

export default function Home() {
  return (
    <>
      <main className="bg-gray-500">
        <div className={styles.pages}>
          <HomeComponent />
        </div>
      </main>
    </>
  );
}
