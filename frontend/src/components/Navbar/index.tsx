import Link from "next/link"
import styles from "./index.module.css"

const Navbar = () => {

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link href={"/"}>
          <h1 className="font-bold">Workout Buddy</h1>
        </Link>
        <nav className={styles.nav}>
          <div>
            <Link href={"/login"}>Login</Link>
            <Link href={"/signup"}>Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar