import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../../../components/structure/layout'

const BatchFiles = () => (
  <Layout>
    <Helmet title="Batch files" />
    <section>
      <h1>Batch files</h1>

      <div className="disclaimer-container">
        <span className="year">~ year: 2000 | Georgi's age: 15</span>
        <span className="disclaimer">
          Unedited things the way they were in the late 90s and early 2000s
        </span>
      </div>

      <div>Some of the first batch files I wrote.</div>

      <div className="m-t-1">
        Desktop Cleaner - would simply back up to a separate directory and then
        delete the originals from the desktop.
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
          echo it will save the file in your "c:\my documents" directory as
          "yourfile.txt" <br />
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
    </section>
  </Layout>
)

export default BatchFiles
