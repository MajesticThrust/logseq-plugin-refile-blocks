import { useState } from 'react'

import './App.css'

const App = () => {
  const [blocks, setBlocks] = useState([
    { id: 1, content: 'block 1' },
    { id: 2, content: 'block 2' },
    { id: 3, content: 'block 3' },
  ])

  const dismissModal = () => {
    logseq.hideMainUI()
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center" onClick={dismissModal}>
      <div className="size-fit rounded border border-black bg-white">
        {/* searchbar */}
        {/* TODO mvp - plain text search (fuzzy) */}
        {/* TODO optional - full datalog queries mode, enabled with checkbox */}
        <div className="w-full rounded border-b">
          <input type="text" placeholder="Where to refile selected block(s)?" className="bg-transparent p-1" />
        </div>

        {/* search result list */}
        <div className="p-1">
          {blocks.map((block) => (
            <div key={block.id}>{block.content}</div>
          ))}
        </div>
      </div>
    </div>

    // <div className="w-screen h-screen flex items-center justify-center text-white">
    //   <div
    //     className="w-screen h-screen fixed top-0 left-0"
    //     onClick={() => logseq.hideMainUI()}
    //   ></div>
    //   <div className="w-5/6 h-5/6 z-0 bg-gradient-to-tr from-green-300 via-green-500 to-green-700 flex flex-col items-center justify-center">
    //     <h1 className="font-bold text-4xl">logseq-plugin-refile-blocks</h1>
    //     <h2 className="text-2xl mt-6">
    //       Current Env: {import.meta.env.VITE_MODE}
    //     </h2>
    //   </div>
    // </div>
  )
}

export default App

function getAllBlocks() {
  return logseq.Editor.getAllBlocks()
}
