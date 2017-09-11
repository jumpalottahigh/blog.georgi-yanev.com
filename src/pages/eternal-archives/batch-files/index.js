import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// TODO: Consider different way of Sidebar inclusion
// const SideBar = ({ children }) =>
//   <div
//     className="sidebar-wrapper"
//   >
//     <div
//     className="sidebar"
//     >
//     <h5>Eternal Archives</h5>
//     <ul className="sidenav">
//         <li>
//         <Link to="/eternal-archives/funny-win98-bugs">
//             Funny Windows 98 bugs
//         </Link>
//         </li>
//         <li>
//         <Link to="/eternal-archives/batch-files">
//             Batch files
//         </Link>
//         </li>
//         {children}
//     </ul>
//     </div>
//   </div>

const BatchFiles = () =>
  <div>
    <Helmet
      title="Batch files"
    />
    <h1>
      Batch files
    </h1>

    <div className="disclaimer-container">
      <span className="year">
        ~ year: 2000 | ~ age: 15
      </span>
      <span className="disclaimer">
        Uneditted things the way they were in the late 90s and early 2000s
      </span>
    </div>

    <div>
      Some of the first batch files I wrote.
    </div>

    <div className="m-t-1">
      Desktop Cleaner - would simply back up to a separate directory and then delete the originals from the desktop.
    </div>

    <pre>
      <code>
        @ECHO OFF <br />
        echo This program is typical <br />
        echo Desktop Cleaner... <br />
        cd c:\windows\desktop <br />
        md oldlinks <br />
        pause <br />
        copy c:\windows\desktop\*.lnk c:\windows\desktop\oldlinks\*.lnk <br />
        pause <br />
        del c:\windows\desktop\*.lnk <br />
        echo DONE! <br />
        pause <br />
        cls <br />
      </code>
    </pre>

    <div className="m-t-1">
      TextPad - write down a note and save to a file in my documents.
    </div>

    <pre>
      <code>
      @ECHO OFF <br />
      echo This program helps you make your own text files, <br />
      echo it will save the file in your "c:\my documents" directory as "yourfile.txt" <br />
      echo To end the program press [Ctrl+Z] and then ENTER. <br />
      copy con c:\mydocu~1\yourfile.txt <br />
      </code>
    </pre>

    <div className="m-t-1">
      FileBackuper - copy over files to a backup directory.
    </div>

    <pre>
      <code>
      @ECHO OFF <br />
      echo This program will back up files... <br />
      pause <br />
      cls <br />
      copy c:\mydocu~1\*.* d:\backup~1\*.* <br />
      echo /s <br />
      echo Ok, it's done now.. <br />
      </code>
    </pre>

    <Link to="/">Go back to the homepage</Link>
  </div>

export default BatchFiles
