import { useState } from 'react'

function PhotosSideBar({user}) {
  const [category, setCategory] = useState('All Photos')

  console.log('category',category)

  return (
    <div className="flex flex-col min-h-screen w-[20em] bg-dash/[.4] text-milk leading-[3rem] border-r-[1.25px] border-placeholder/[.1] z=15">
      <div className="fixed top-[1.5rem] w-[20em] h-screen mt-[2rem]">
        <CategoryFormat title="All Photos" setCategory={setCategory} category={category}/>
        <CategoryFormat title="Pinned" setCategory={setCategory} category={category}/>
        <CategoryFormat title="Recents" setCategory={setCategory} category={category}/>
      </div>
    </div>
  )
}

function CategoryFormat({title, setCategory, category}){
  return (
    category === title ?
    <div onClick={() => setCategory(title)} className='flex justify-center border-y-[.2px] border-placeholder/[0.2] bg-cornflower cursor-pointer font-bold'>
    {title}
    </div>
    :
    <div onClick={() => setCategory(title)} className='flex justify-center font-semibold border-y-[.2px] border-placeholder/[0.2] cursor-pointer hover:bg-cornflower/[.5]  transition-all delay-[50ms] ease-in-out'>
    {title}
    </div>
  )

}

export default PhotosSideBar
