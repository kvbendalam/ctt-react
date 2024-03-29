import React from 'react'
import PopularTours from './PopularTours';
import bachelorsPackages, {familyPackages, honeyMoon} from './toursData';

function Tours() {
  return (
    <div>
     <PopularTours tours={bachelorsPackages} type={"Bachelors"}/>
     <PopularTours tours={familyPackages} type={"Family"}/>
     <PopularTours tours={honeyMoon} type={"HoneyMoon"}/>
    </div>
  )
}

export default Tours