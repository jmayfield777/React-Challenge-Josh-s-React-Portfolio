import { Outlet } from 'react-router-dom';

import styles from './App.module.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// import { Profile } from './components/Profile';
// import { About } from './components/About';
// import { Projects } from './components/Projects';
// import { Contact } from './components/Contact';

// function App() {


//   return (
//     <div className={styles.App}>
//       <Navbar />
//       <Profile />
//       <About />
//       <Projects />
//       <Contact />
//     </div>
//   )
// }

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;