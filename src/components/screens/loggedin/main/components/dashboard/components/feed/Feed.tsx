import CategoryToggle from './components/CategoryToggle'
import Gallery from './components/Gallery'
import { useState } from 'react';


function Feed() {
  const [grid, setGrid] = useState(true)
  return (
    <div className="flex flex-col flex-grow text-milk">
    <CategoryToggle grid={grid} setGrid={setGrid}/>
    <Gallery grid={grid}/>
    </div>
  )
}

export default Feed
