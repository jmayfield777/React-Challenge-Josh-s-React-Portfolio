import styles from './App.module.css';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
