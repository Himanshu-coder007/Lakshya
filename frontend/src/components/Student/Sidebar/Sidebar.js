import React from 'react'

const Sidebar = () => {
    return (
        <div className={styles['side-bar']}>
            <div id={styles['close-btn']}>
                <i className="fas fa-times"></i>
            </div>
            <nav className={styles.navbar}>
                <Link><p className="fas fa-home"></p><span>Home</span></Link>
                <Link to="/student/quiz"><p className="fas fa-chalkboard-user"></p><span>Quiz</span></Link>
                <Link to="/student/screeningTest"><p className="fas fa-chalkboard-user"></p><span>LSI Test</span></Link>
            </nav>
        </div>
    )
}

export default Sidebar