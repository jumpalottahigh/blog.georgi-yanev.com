import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import warcraft1HumanUnits from '../../../images/warcraft-units/warcraft-1-human-units.png'
import warcraft1OrcUnits from '../../../images/warcraft-units/warcraft-1-orc-units.png'
import warcraft2HumanLandUnits from '../../../images/warcraft-units/warcraft-2-human-land-units.png'
import warcraft2OrcLandUnits from '../../../images/warcraft-units/warcraft-2-orc-land-units.png'
import warcraft2HumanWaterUnits from '../../../images/warcraft-units/warcraft-2-human-water-units.png'
import warcraft2OrcWaterUnits from '../../../images/warcraft-units/warcraft-2-orc-water-units.png'
import warcraft2SpecialUnits from '../../../images/warcraft-units/warcraft-2-special-units.png'

const WarCraftUnitsPage = () =>
  <div>
    <Helmet
      title="WarCraft Units"
    />
    <h1>
      WarCraft Units
    </h1>

    <div className="disclaimer-container">
      <span className="year">
        ~ year: 2002 | ~ age: 17
      </span>
      <span className="disclaimer">
        Unedited things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div className="m-b-1">
      <img src={warcraft1HumanUnits} alt="WarCraft 1 Human Units" className="m-r-1" />
      <img src={warcraft1OrcUnits} alt="WarCraft 1 Orc Units" />
      <p>WarCraft 1 Human and Orc Units</p>
    </div>

    <div className="m-b-1">
      <img src={warcraft2HumanLandUnits} alt="WarCraft 2 Human Land Units" className="m-r" />
      <img src={warcraft2OrcLandUnits} alt="WarCraft 2 Orc Land Units" />
      <p>WarCraft 2 Human and Orc Land Units</p>
    </div>

    <div className="m-b-1">
      <img src={warcraft2HumanWaterUnits} alt="WarCraft 2 Human Water Units" className="m-r-1" />
      <img src={warcraft2OrcWaterUnits} alt="WarCraft 2 Orc Water Units" />
      <p>WarCraft 2 Human and Orc Water Units</p>
    </div>

    <div className="m-b-1">
      <img src={warcraft2SpecialUnits} alt="WarCraft 2 Special Units" />
      <p>WarCraft 2 Special Units</p>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>

export default WarCraftUnitsPage