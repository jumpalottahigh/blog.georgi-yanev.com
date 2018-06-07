import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import winbug1 from '../../../images/winbug1.jpg'
import winbug2 from '../../../images/winbug2.jpg'
import winbug3 from '../../../images/winbug3.jpg'
import winbug4 from '../../../images/winbug4.jpg'
import winbug5 from '../../../images/winbug5.jpg'
import winbug6 from '../../../images/winbug6.jpg'

const FunnyWin98BugsPage = () => (
  <div>
    <Helmet title="Windows 98 Fun" />
    <h1>Windows 98 fun</h1>

    <div className="disclaimer-container">
      <span className="year">~ year: 2000 | Georgi's age: 15</span>
      <span className="disclaimer">
        Unedited things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div>
      Most people have heard of the fabled <strong>BSOD</strong> (Blue Screen Of
      Death), or some just call it a blue screen. Truth is, Windows 98 used to
      do all sorts of funky stuff due to failing graphics card drivers or
      sometimes even completely out of nowhere.
    </div>

    <div>
      <h4>
        Case 1: Attempting to move all icons on the desktop leads to a freeze
        and tear.
      </h4>
      <img src={winbug1} alt="Windows 98 weird bug 1" />
    </div>

    <div>
      <h4>Case 2: Icon renaming with bolded font.</h4>
      <img src={winbug2} alt="Windows 98 weird bug 2" />
    </div>

    <div>
      <h4>Case 3: Nice start menu button, bro. (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄</h4>
      <img src={winbug3} alt="Windows 98 weird bug 3" />
    </div>

    <div>
      <h4>Case 4: That hard drive available space graph.</h4>
      <img src={winbug4} alt="Windows 98 weird bug 4" />
    </div>

    <div>
      <h4>Case 5: I guess that's not so unbelievably funny.</h4>
      <img src={winbug5} alt="Windows 98 weird bug 5" />
    </div>

    <div>
      <h4>Case 6: New -> New. New what? (╯°□°）╯︵ ┻━┻</h4>
      <img src={winbug6} alt="Windows 98 weird bug 6" />
    </div>

    <div>
      Of course we can also conclude that I have spent a fair amount of time
      playing Diablo, StarCraft and Warcraft, as well as develop maps and
      experiences for those games. And occasionally create a C++ program.
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default FunnyWin98BugsPage
