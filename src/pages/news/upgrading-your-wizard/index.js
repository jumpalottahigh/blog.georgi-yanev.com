import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import fpvUpgradeYourWizardPT11 from '../../../images/fpv/upgrade-your-wizard-pt1-1.jpg'
import fpvUpgradeYourWizardPT12 from '../../../images/fpv/upgrade-your-wizard-pt1-2.jpg'
import fpvUpgradeYourWizardPT13 from '../../../images/fpv/upgrade-your-wizard-pt1-3.jpg'
import fpvUpgradeYourWizardPT14 from '../../../images/fpv/upgrade-your-wizard-pt1-4.jpg'
import fpvUpgradeYourWizardPT15 from '../../../images/fpv/upgrade-your-wizard-pt1-5.jpg'
import fpvUpgradeYourWizardPT16 from '../../../images/fpv/upgrade-your-wizard-pt1-6.jpg'
import fpvUpgradeYourWizardPT17 from '../../../images/fpv/upgrade-your-wizard-pt1-7.jpg'
import fpvUpgradeYourWizardPT18 from '../../../images/fpv/upgrade-your-wizard-pt1-8.jpg'
import fpvUpgradeYourWizardPT19 from '../../../images/fpv/upgrade-your-wizard-pt1-9.jpg'

const UpgradingYourWizardPage = () =>
  <div>
    <Helmet
      title="Georgi Yanev | Upgrading your Wizard /part 1/"
      meta={[
        { name: 'description', content: 'If you are new to FPV, the Wizard x220 provides a decent flight experience out of the box. That being said, there are a number of small, cheap and easy to do upgrades that will dramatically improve your overall experience. In this part 1 of the upgrade guide, we\'re gonna cover: props, antennas, low voltage buzzer, chargers and velcro straps.' },
        { name: 'keywords', content: 'FPV, racing drones, Wizard x220, quad, drone, getting started, learn to fly drones, cheap upgrades, antennas, props, voltage buzzer, velcro straps' },
        { property: 'og:image', content: fpvUpgradeYourWizardPT11 },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://blog.georgi-yanev.com/news/upgrading-your-wizard' },
        { property: 'og:title', content: '5 cheap and easy upgrades worth doing to your quad' },
        { property: 'og:description', content: 'If you are new to FPV, the Wizard x220 provides a decent flight experience out of the box. That being said, there are a number of small, cheap and easy to do upgrades that will dramatically improve your overall experience. In this part 1 of the upgrade guide, we\'re gonna cover: props, antennas, low voltage buzzer, chargers and velcro straps.' },
      ]}
    />
    <h1>
      Upgrading your Wizard x220 (pt1)
    </h1>

    <div className="disclaimer-container">
      <span className="year">
        8 October 2017
      </span>
      <span className="disclaimer">
        Georgi Yanev
      </span>
    </div>

    <div className="m-b-1">
      <h3>5 cheap and easy upgrades worth doing to your quad</h3>
      If you are new to FPV, the Wizard x220 provides a decent flight experience out of the box. That being said, there are a number of small, cheap and easy to do upgrades that will dramatically improve your overall experience. In this part 1 of the upgrade guide, we're gonna cover:
      <ul className="m-t-1">
        <li>
          <a href="#props">Props</a>
        </li>
        <li>
          <a href="#antennas">Omni directional antennas for vtx and fpv goggles</a>
        </li>
        <li>
          <a href="#buzzer">Low voltage buzzer + lcd</a>
        </li>
        <li>
          <a href="#charger">3s and 4s battery charger</a>
        </li>
        <li>
          <a href="#mounting">Mounting improvements</a>
        </li>
      </ul>
      <h3>Let's get to it!</h3>
      <img src={fpvUpgradeYourWizardPT11} alt="Tuned up Wizard x220" />
    </div>

    <div id="props" className="m-b-1 offset-top-nav">
      <h4 className="m-b-1">Props: from stock to Cyclones</h4>
      <p>
        Even without crashing I've had the stocks props shatter after a throttle punch in a flip. If you upgrade only one thing from this list, do yourself a favor and upgrade the props! The moment I changed to the <a href="https://goo.gl/14JLmC" target="_blank" rel="noopener">5 inch triblade Cyclones</a> I noticed the quad being about ~ 5x more silent and at least 2-3 times more responsive. Not to mention I have now flown ~ 7-8 batteries and still have not snapped even 1 of those propellers. They are very sturdy and absolutely worth it for the price. I have also ordered some <a href="https://goo.gl/kPDXhp" target="_blank" rel="noopener">Bullnose</a> props and I will let you know how those are as soon as I get my hands on them.
      </p>
      <img src={fpvUpgradeYourWizardPT12} alt="5 inch Cyclope props" />
    </div>

    <div id="antennas" className="m-b-1 offset-top-nav">
      <h4 className="m-b-1">Antennas: leaf clover omni directional bliss</h4>
      <p>
        The stock vtx and goggle antennas are not too bad and they will get you started, but this is an upgrade coming at ~ 10-12 bucks that would noticably improve your video feed. I went for the <a href="https://goo.gl/ieZ7Gm" target="_blank" rel="noopener">Aomway leaf clover omni directional antennas</a>.
      </p>
      <img src={fpvUpgradeYourWizardPT13} alt="Aomway leaf clover antenna sideways" width="80%" />
      <p>
        They are quite sturdy and can be bent to a position and would stay in it. Pay attention to what connector you need for your goggles and vtx. I have the <a href="https://goo.gl/e1KqcS" target="_blank" rel="noopener">Eachine VR 007</a> goggles so in my case I needed a RP-SMA male connector on both antennas.
      </p>
      <img src={fpvUpgradeYourWizardPT14} alt="Aomway leaf clover antenna top down view" width="35%" />
      <p>
        A friend of mine just purchased a Wizard x220 himself and we were able to directly compare the video feed of the stock antennas vs the aomways. There is a clear improvement in the signal. Plus whenever you upgrade your headset or vtx, you still get to reuse your antennas in the future.
      </p>
      <p>
        Whether you keep your stock antennas or get a better one, make sure they are nicely tightened as removing the antenna from your vtx with the quad powered on can potentially fry your vtx. In my case I had no issues with this, however I did have my angle connector on the vtx snap in 2. Very easy fix if you have a soldering iron. If for whatever reason you need to change the vtx, i do recommened not going for the angle socket, but instead get an antenna connector coming straight out the back and tilting the antenna upwards.
      </p>
    </div>
    <div id="buzzer" className="m-b-1 offset-top-nav">
      <h4 className="m-b-1">Voltage buzzer: no soldering required</h4>
      <p>
        There are many ways to approach the problem about being aware of your voltage when flying. Pick the option that best fits you, but pick something. You do not want to shorten your batteries life and reduce their capabilities by over discharging them, hence you need to somehow be aware of their state when flying.<br />
        You could have that information as OSD, but the Wizard does not come with that feature. You could also solder a buzzer straight to the flight controller, which is a good option and could be extended to also output a lost vehicle signal.<br />
        Here we will cover the easy, solderless option that gets you sorted for ~ 1 euro, namely acquiring a <a href="https://goo.gl/socvNb" target="_blank" rel="noopener">Lipo battery low voltage tester</a> - buzzer + lcd screen that you can connect to the charging lead on your battery.
      </p>
      <img src={fpvUpgradeYourWizardPT16} alt="Low voltage buzzer attached to battery" />
      <p>
        You strap that in along side your battery and fly. When the voltage gets too low the buzzer will start beeping. That's it. Simple but very effective. You can also see the current voltage for each cell on the mini LCD. Those work for 1S-8S batteries and you should definitely grab a few given how cheap they are. I have seen one shatter during a crash and while the LCD survived, the buzzer was no longer. Grab a few spares while you are learning to fly :) Example and crashed and smashed buzzer below.
      </p>
      <img src={fpvUpgradeYourWizardPT15} alt="Lipo battery low voltage tester" width="50%" />
    </div>
    <div id="charger" className="m-b-1 offset-top-nav">
      <h4 className="m-b-1">Battery charger: stay safe</h4>
      <p>
        Not much to mention on the battery charger front. I went for this guy - <a href="https://goo.gl/HbwRFL" target="_blank" rel="noopener">WLtoys V950</a>, it is good for 3S and 4S batteries, although you should never charge 2 at once! It's one of the cheaper options out there that is worth having. Depending on how many batteries you have you might wanna invest into a better charging station - one that would charge more batteries at a time. For now this is good enough for me as I don't have that many batteries yet and this is still a much better charger than the one that comes with the Wizard x220. Hopefully it should reduce the chance of burning down the house. Never leave lipo batteries charge unattended!
      </p>
    </div>
    <div id="mounting" className="m-b-1 offset-top-nav">
      <h4 className="m-b-1">Velcro straps and zip ties</h4>
      <p>
        There are many ways to mount and strap things on your quad. For example, you could take your receiver antennas out the back of the quad and strap them that way with zip ties. In my case, I went for straping them vertically for the 2 stand offs on the back. Just make sure everything is out and away from your propellers' way.
        <img className="m-t-1 m-b-1" src={fpvUpgradeYourWizardPT19} alt="My Wizard x220 rear shot" />
        Since at one point I used zip ties to hold my receiver and those would press against the battery, I decided to double sticky tape some soft foam padding to the bottom of the battery to soften hits and scratches. Not sure how much that helps but so far so good and I haven't had the battery fly off the quad just yet. I also added a second strap around the battery for extra safety. Below you can see how thick the soft foam piece is.
      </p>
      <img src={fpvUpgradeYourWizardPT17} alt="Soft foam padding added to battery" />
      <p>
        And here are the <a href="https://goo.gl/aY9JGV" target="_blank" rel="noopener">velcro straps</a> I'm using.
      </p>
      <img src={fpvUpgradeYourWizardPT18} alt="Velcro straps" />
      <p>
        And while at it, I purchased some extra zip ties, screws and <a href="https://goo.gl/oVyxrv" target="_blank" rel="noopener">propeller nuts</a>, just in case. It would be quite sad to not be able to fly just because you are missing a nut or a screw.<br />
        I hope this was somewhat helpful. Don't get discouraged if sometimes it feels like you are doing repair work every time you come home from the field. I promise, it gets better. Also, starting to finally fly FPV in Acro is really awesome. Here is a bonus very low quality DVR footage. Don't let the quality fool you, it looks and feels better when you fly, and at the end of the day this is the lower end of FPV gear that I'm using at the moment, but definitely looking into recording some crisp HD footage soon :) Happy flying!
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/E-3FYff5RlY?rel=0" frameborder="0" allowfullscreen></iframe>
    </div>
    <div className="m-b-1">
      New to FPV drones? <Link to="/news/fpv-drones/">Read the getting started post</Link> or check out my <Link to="/news/tools-and-backpack-setup/">backpack and tools setup</Link>.
    </div>
    <div className="affiliate-note">
      Most links to Banggood in this article are affiliate links and would support the author if used. Thanks!
    </div>
  </div>

export default UpgradingYourWizardPage
