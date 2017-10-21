import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import toolsAndBackpackSetup1 from '../../../images/fpv/tools-and-backpack-setup-1.jpg'

const ToolsAndBackpackSetupPage = () =>
  <div>
    <Helmet
      title="Georgi Yanev | Tools and backpack setup"
      meta={[
        { name: 'description', content: 'Sometimes when you fly you will crash. And sometimes when you crash things will break. It would make for a very unpleasant experience if you break a prop and have to go home cause you can\'t replace it in the field. Hence, the need for a backpack and some tools.' },
        { name: 'keywords', content: 'FPV, racing quads, Wizard x220, quad, drone, getting started, tools, m5 nut wrench, hex driver, pliers, tweezers, hot glue gun, hot air gun, soldering iron, flux, solder, wire cutters' },
        { property: 'og:image', content: `https://blog.georgi-yanev.com${toolsAndBackpackSetup1}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://blog.georgi-yanev.com/news/tools-and-backpack-setup' },
        { property: 'og:title', content: 'Georgi Yanev | Tools and backpack setup' },
        { property: 'og:description', content: 'Sometimes when you fly you will crash. And sometimes when you crash things will break. It would make for a very unpleasant experience if you break a prop and have to go home cause you can\'t replace it in the field. Hence, the need for a backpack and some tools.' },
      ]}
    />
    <h1>
      Tools and backpack setup
    </h1>

    <div className="disclaimer-container">
      <span className="year">
        14 October 2017
      </span>
      <span className="disclaimer">
        Georgi Yanev
      </span>
    </div>

    <div className="m-b-1">
      <h3>Backpack and on-the-go repair</h3>
      <p>
        Sometimes when you fly you will crash. And sometimes when you crash things will break. It would make for a very unpleasant experience if you break a prop and have to go home cause you can't replace it in the field. Hence, the need for a backpack and some tools.
        <br />
        Now, you already need to carry your quad, radio, FPV goggles and batteries and those items take up some space, so while you are at it, you might as well get just a bit bigger backpack to accomodate for those plus some extra items.
        <br />
        <img className="m-t-1 m-b-1" src={toolsAndBackpackSetup1} alt="All quad backpack tools" />
        In addition to the above mentioned I already keep in my backpack the battery charger, a USB to micro USB cable (both for charging my FPV goggles battery and if I would need to flash the firmware on the quad), props, zip ties, velcro straps, double sided sticky tape and some semi-hard foam padding. I have come to need those way too often and every time I realise I need something I don't have I add it to the backpack. The list below is meant more as an example rather than an extensive list of the best of the best tools. 
        <br />
        As far as tools go, I make sure I have:
      </p>
      <ul className="m-t-0">
        <li>M5 nut wrench (to make quick work of swapping broken props)<br />
          <a className="m-r-1" href="https://goo.gl/SNFPFj" target="_blank" rel="noopener">option 1</a> 
          <a className="m-r-1" href="https://goo.gl/6c8W2T" target="_blank" rel="noopener">option 2</a> 
          <a href="https://goo.gl/EsEKmP" target="_blank" rel="noopener">option 3</a>
        </li>
        <li>hex head screw driver for the screws<br />
          <a href="https://goo.gl/R1y1T8" target="_blank" rel="noopener">option 1</a>
        </li>
        <li>pliers for when props break in weird ways and are very hard to remove<br />
          <a href="https://goo.gl/12V1xS" target="_blank" rel="noopener">option 1</a>
        </li>
        <li>tweezers to remove things from tight places<br />
          <a href="https://goo.gl/G9ivqt" target="_blank" rel="noopener">option 1</a>
        </li>
      </ul>
      <p>
        That's the bare minimum that should really make for a pleasant stay while you are out there ripping around!
      </p>
    </div>

    <div className="m-b-1">
      <h3>Other tools</h3>
      <p>
        <strong>Soldering iron</strong>. If you are somewhat serious about getting into the hobby sooner or later it's going to come up to soldering something. Whether you build a custom quad from scratch or just need to fix your broken vtx antenna angle socket, having a soldering iron could be benefitial. Some of the most important things to consider when choosing a soldering iron:
      </p>
      <ul className="m-t-1 m-b-1">
        <li>have at least one fine (small) tip</li>
        <li>be able to set temperature</li>
        <li>on-the-go (using Lipo battery)</li>
      </ul>
      <p>
        Depending on your use case and what you value more, your choice could be different and there are plenty of options out there, but here are a couple worth looking at:<br />
        <a className="m-r-1" href="https://goo.gl/Q66v5H" target="_blank" rel="noopener">option 1</a>
        <a className="m-r-1" href="https://goo.gl/puRV4x" target="_blank" rel="noopener">option 2</a>
      </p>
      <p>
        If you buy a soldering iron, then you would also need to get your hands on a <a href="https://goo.gl/N4AxzN" target="_blank" rel="noopener">flux pen</a>, <a href="https://goo.gl/s6nEPU" target="_blank" rel="noopener">solder</a> and a <a href="https://goo.gl/RXVvp2" target="_blank" rel="noopener">steel wire</a> to clean the tip of your iron.
      </p>
      <p>
        <strong>Hot glue gun</strong>. There's a lot of choice out there - here is one <a href="https://goo.gl/h2fP1g" target="_blank" rel="noopener">option</a> and here is <a href="https://goo.gl/LSLFt4" target="_blank" rel="noopener">one with a XT-60 plug</a> so you can use your lipo batteries to power it on the go. Don't forget to pick up hot glue sticks depending on your choice of hot glue gun. 
      </p>
      <p>
        <strong>Hot air gun</strong>. Here is a decent <a href="https://goo.gl/icqX3w" target="_blank" rel="noopener">option</a> for a hot air gun and here's nice assortment of <a href="https://goo.gl/3KR9fo" target="_blank" rel="noopener">shrink tubes</a> for it.
      </p>
      <p>
        <strong>Miscellaneous</strong>. A few more tools are worth having around. <a href="https://goo.gl/tsSU45" target="_blank" rel="noopener">Wire cutters</a> are good for general use to quickly snip plastics and metals and <a href="https://goo.gl/3nnP2y" target="_blank" rel="noopener">helping hands</a> could really ... well, help to hold small bits in place for more precise work. And while at it, why not grab a <a href="https://goo.gl/ibiQNX" target="_blank" rel="noopener">lipo battery fire protection pack</a>.
      </p>
      <p>
        While this post does not claim to cover it all I hope I was able to cover most beginner use cases and needs. Happy flying!
      </p>
      <div className="affiliate-note">
        Most links to Banggood in this article are affiliate links and would support the author if used. Thanks!
      </div>
    </div>
  </div>

export default ToolsAndBackpackSetupPage
