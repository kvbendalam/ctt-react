import './App.css';
import Destination from './Destination';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero'
import PopularTours from './PopularTours';
import About from './About';
import Blog from './Blog'
import bachelorsPackages, {familyPackages, honeyMoon} from './toursData';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Destination/>
     <p className="section-subtitle">Featured Tours</p>
     <PopularTours tours={bachelorsPackages} type={"Bachelors"}/>
     <PopularTours tours={familyPackages} type={"Family"}/>
     <PopularTours tours={honeyMoon} type={"Honey Moon Couple"}/>
     <About/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
