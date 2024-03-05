import React from 'react'
import Destination from './Destination';
import Hero from './Hero'
import PopularTours from './PopularTours';
import About from './About';
import Videos from './Videos'
import bachelorsPackages, {familyPackages, honeyMoon} from './toursData';

function Home() {
  return (
    <div>
     <Hero/>
     <Destination/>
     <p className="section-subtitle">Featured Tours</p>
     <PopularTours tours={bachelorsPackages} type={"Bachelors"}/>
     <PopularTours tours={familyPackages} type={"Family"}/>
     <PopularTours tours={honeyMoon} type={"Honey Moon Couple"}/>
     <About/>
     <Videos/>
    </div>
  )
}

export default Home