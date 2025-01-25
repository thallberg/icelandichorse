import styles from "./App.module.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";




function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
