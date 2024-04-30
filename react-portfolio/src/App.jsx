import styles from './App.module.css'
import { Navbar } from './components/Navbar'

function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
    </div>
  )
}

export default App;
