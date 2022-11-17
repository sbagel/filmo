import { BsFillGrid3X3GapFill, BsGrid3X3Gap, BsFillGridFill } from "react-icons/bs";
import { CiGrid41 } from "react-icons/ci";
import { useState } from 'react';

function CategoryToggle({ grid, setGrid }) {
  const [category, setCategory] = useState('Discover')
  const [sort, setSort] = useState('All time')
  const [colors, setColors] = useState('Colors')

  return (
    <div className="flex justify-evenly relative items-center mr-10 font-semibold mt-[4rem] px-20">
        {/* categories */}
        <Category word="Discover" category={category} setCategory={setCategory}/>
        <Category word="Following" category={category}  setCategory={setCategory}/>
        <Category word="Featured" category={category} setCategory={setCategory}/>
        <Category word="Latest" category={category}  setCategory={setCategory}/>

        {/* grid toggle */}
        <div className="flex justify-end items-center flex-grow text-[1.2rem]">
        {grid
        ?<>
        <BsFillGridFill/>
        <div className="cursor-pointer ml-2 text-placeholder" onClick={e=>setGrid(!grid)}><BsGrid3X3Gap/></div>
        </>
        :<>
        <div className="cursor-pointer mr-2 text-[1.5rem] text-placeholder" onClick={e=>setGrid(!grid)}><CiGrid41/></div>
        <BsFillGrid3X3GapFill/></>
        }
        </div>
    </div>
  )
}

function Category({word, category, setCategory}){

  return (
    <div className="mr-[10rem] cursor-pointer" onClick={e=>setCategory(word)}>
      <span className={word === category? null : 'text-placeholder'}>{word}</span>
    </div>
  )
}


export default CategoryToggle
