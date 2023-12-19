import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Home = () => {
  return (
    <div className={styles.mainDivParent}>
      <aside className={styles.aside}>
        <h2>Menu</h2>
        <ul>
          <li><Link href="/Parent">Home</Link></li>
          <li><Link href="/Parent/ScreeningTest">Screening Test</Link></li>
        </ul>
      </aside>

      <main>
        <header>
          <h1> Welcome Parent !</h1>
        </header>

        <section id={styles.todaysLearning}>
          <h2>Today's Learning</h2>
          <li>Algebra Lecture2 - Completed</li>
          <li>Algebra Lecture3 - 40% Completed</li>
        </section>

        <section id={styles.calendar}>
          <h2>Calendar</h2>
          <section id={styles.Today}>
            <h2>Today</h2>
            <li>Parent's Meeting - 01:00 PM</li>
            <li>English Quiz(Cha1) - 05:30 PM</li>
          </section>
          <section id={styles.Tommorow}>
            <h2>Tommorow</h2>
            <li>Result Declaration - 10:00 AM</li>
          </section>
        </section>
      </main>
    </div>
  )
}

export default Home