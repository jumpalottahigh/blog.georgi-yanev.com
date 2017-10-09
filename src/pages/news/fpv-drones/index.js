import React from 'react'
import Helmet from 'react-helmet'

import fpvDronesGettingStarted1 from '../../../images/fpv/fpv-drones-getting-started-1.jpg'
import fpvDronesGettingStarted2 from '../../../images/fpv/fpv-drones-getting-started-2.jpg'
import fpvDronesGettingStarted3 from '../../../images/fpv/fpv-drones-getting-started-3.jpg'
import fpvDronesGettingStarted4 from '../../../images/fpv/fpv-drones-getting-started-4.jpg'
import fpvDronesGettingStarted5 from '../../../images/fpv/fpv-drones-getting-started-5.jpg'

const FPVDronesPage = () =>
  <div>
    <Helmet
      title="FPV Drones"
    />
    <h1>
      How to get started with FPV drones
    </h1>

    <div className="disclaimer-container">
      <span className="year">
        18 September 2017
      </span>
      <span className="disclaimer">
        Georgi Yanev
      </span>
    </div>

    <div className="m-b-1">
      About a month ago I stumbled accross a YouTube video of FPV drone footage. For whatever reason it felt quite captivating. So much so, that within a week I ended up ordering a ready to fly drone set - namely the <a href="https://goo.gl/YQP8T1" target="_blank" rel="noopener">Wizard x220</a>.
    </div>

    <div className="m-b-1">
      Before we get any further, I will assume you have at least a basic idea of what FPV drone racing is and what freestyle is. Here's what came in the mail about ~ 2 weeks after the order date:
      <img src={fpvDronesGettingStarted1} alt="Wizard x220 unboxed" />
      The extra props are very well received, and even after only 2-3 flights I managed to break one already. I have even gone as far ahead to purchase even more extra props of roughly the same type as I read a lot of good reviews about the <a href="https://goo.gl/14JLmC" target="_blank" rel="noopener">Cyclone 5 inch 3 blade propeller</a>. They go for about 2.50 euro for a set of 4.<br /><br />
      It is also pretty nice that the kit comes with some spare screws and zip ties. Partially because I did my first flight on gravel (!!!) instead of grass, I actually lost 1 screw and had to replace that, az well as one of the ESC zip ties broke.
      Suffice it to say I am never again (until I get good at flying) flying on anything else but grass.
      Here's quick and dirty mix of the first flight.
    </div>

    <div className="m-b-1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/oumHGODwJ-s?rel=0" frameborder="0" allowfullscreen></iframe>
    </div>

    <div className="m-b-1">
      You also get this Flysky FS-i6 radio in the kit and from what I have gathered it seems to be a decent radio when you get into the hobby. The <a href="https://goo.gl/SpR395" target="_blank" rel="noopener">Taranis</a> radio seems to be killing it in terms of popularity among pros, but for our noob needs, the Flysky totally handles things. I assume the Taranis are great radios, they also cost a bit more, but I cannot recommend a specific model, since I haven't gotten my hands on one just yet, so stay tuned. If for whatever reason you only have a quad here's the link to the <a href="https://goo.gl/WSmu95" target="_blank" rel="noopener">Flysky FS-i6</a> radio.
    </div>
    <img src={fpvDronesGettingStarted2} alt="Flysky FS-i6 radio" />

    <div className="m-b-1">
      As far as FPV goggles go, I am using the <a href="https://goo.gl/e1KqcS" target="_blank" rel="noopener">Eachine VR-007 Pro</a> (on top of the backpack in the picture). Those are super cheap (~ 35 euro), while Fatsharks or other more expensive and much higher quality brands can get up to 500 euro and beyond. I figured those are gonna be a perfect starting goggle for the price and I would never feel sorry about tossing them away in favor a better set in the future.
    </div>

    <div className="m-b-1">
      Now, I am still a VERY long way from being even a half decent pilot. But for about ~ 5 flights of ~ 10mins or less each, I can really say I see progress. One thing I really recommend is connecting your controller to your computer and spending some time in a simulator. Some of those are surprisingly close to the real thing and they will save you a lot of crashes in the beginning, at least till you get the basics. That would hopefully reduce the chance of ending up with the quad on a tree or a broken quad arm.
    </div>
    <div className="m-b-1">
      <img src={fpvDronesGettingStarted4} alt="Wizard x220 assembled and flown a bit" />
      After a few flights, still going strong.
    </div>

    <div className="m-b-1">
      I have tried so far 3 simulators and can recommend 2 out of them. Let's start with my favorite.
      <br /><br />
      <a href="https://fpv-freerider.itch.io/fpv-freerider" target="_blank" rel="noopener">FPV Freerider</a> has a trial version and can be tried for free and the full version costs as little as $5. I am in no way affiliated with that project, but I think they are doing a great job. It is a pretty decent simulator and if you hook up your controller to your computer you can really get used to flying and build some muscle memory for the most common moves using FPV Freerider.
      <br /><br />
      On top of that there is a <a href="https://www.youtube.com/watch?v=391D5dX7LKg&list=PLwoDb7WF6c8kjYXam4m3msvRbkORU41GY" target="_blank" rel="noopener">great video series by Joshua Bardwell</a> who teaches you how to fly using FPV Freerider.
    </div>

    <div className="m-b-1">
      The other worthy simulator in my opinion is <a href="http://rotorrush.com/" target="_blank" rel="noopener">Rotor Rush</a>. Definitely not a bad choice, feels close to the real thing and you can get a week trial to test it out.
      <br />
      Last *and* least, although I don't mean to be a hater - Velocidrone. I don't know, might have been a decent choice, but it kind of lost me. And I never looked back.
    </div>

    <div className="m-b-1">
      Other channels I follow on YouTube include <a href="https://www.youtube.com/channel/UC3ioIOr3tH6Yz8qzr418R-g" target="_blank" rel="noopener">UAVfutures</a> (awesome vids with info and drone reviews as well as custom builds) and <a href="https://www.youtube.com/channel/UCQEqPV0AwJ6mQYLmSO0rcNA" target="_blank" rel="noopener">Mr Steele</a> (absolute beast of a pilot).
    </div>

    <div className="m-b-1">
      In the end it is maybe worth mentioning I have already ordered a few upgrades but I'll write up on that later on as there is plenty more to discuss. There are also many more topics we did not cover - 3s vs 4s batteries, VTX and DVR, Go Pro, backpack, spare parts, Beta Flight 3.2 and many more which will look into in future articles.
    </div>

    <div className="m-b-1">
      In the end, the best things you can do to get up and running with FPV are:
      <ul className="m-t-1">
        <li>Get out there and fly</li>
        <li>Fly over grassy areas</li>
        <li>Practice on a simulator</li>
        <li>Have fun</li>
      </ul>
      <img src={fpvDronesGettingStarted5} alt="Big green field and a nice bonus launching post" />
    </div>

    <div className="m-b-1">
      <img src={fpvDronesGettingStarted3} alt="Wizard x220 on a wall mount" />
      If you would like to support the blog and I managed to convince you that FPV drones are an awesome hobby, you can use the affiliate links in the article when making a purchase.
      <ul className="list-none m-t-1">
        <li>
          <a href="https://goo.gl/YQP8T1" target="_blank" rel="noopener">Wizard x220, Flysky FS-i6 Radio (ready to fly set)</a>
        </li>
        <li>
          <a href="https://goo.gl/e1KqcS" target="_blank" rel="noopener">Eachine VR-007 Pro</a>
        </li>
        <li>
          <a href="https://goo.gl/T6JQBv" target="_blank" rel="noopener">Wizard x220 (only drone)</a>
        </li>
      </ul>
    </div>
  </div>

export default FPVDronesPage
