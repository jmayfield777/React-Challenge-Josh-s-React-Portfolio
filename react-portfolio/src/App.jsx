import styles from './App.module.css';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';

function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;
