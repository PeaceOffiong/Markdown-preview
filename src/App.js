import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [input, setInput] = useState("# markdown preview");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return <main>
          <section className='markdown'>
      <textarea
        type="text"
        className="input"
        onChange={handleChange}
        value={input}>
      </textarea>
            <article className='result'>
              <ReactMarkdown>{input}</ReactMarkdown>
            </article>
          </section>
        </main>
}

export default App
