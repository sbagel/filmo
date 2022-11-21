function PhotosSideBar({user, category, setCategory}) {

  return (
    <div className="flex flex-col min-h-screen w-[20rem] bg-dash/[.4] text-milk leading-[3rem] border-r-[1.25px] border-placeholder/[.1] z=15">
      <div className="fixed top-[1.5rem] w-[20em] h-screen mt-[2.3rem]">
        <CategoryFormat title="Upload" setCategory={setCategory} category={category}/>
        <CategoryFormat title="All Photos" setCategory={setCategory} category={category}/>
        <CategoryFormat title="Pinned" setCategory={setCategory} category={category}/>
        <CategoryFormat title="Recents" setCategory={setCategory} category={category}/>

        <div className='flex justify-start pl-[2rem] mt-[2rem] border-y-[.2px] border-placeholder/[0.2] bg-[#2d2f34] cursor-pointer font-bold'>
         Collections
        </div>
        <CategoryFormat title="People" setCategory={setCategory} category={category}/>
        <SubCategoryFormat title="Isabelle" setCategory={setCategory} category={category}/>
        <SubCategoryFormat title="Bothayna" setCategory={setCategory} category={category}/>
        <SubCategoryFormat title="..." setCategory={setCategory} category={category}/>
        <SubCategoryFormat title="..." setCategory={setCategory} category={category}/>
        <SubCategoryFormat title="..." setCategory={setCategory} category={category}/>
        <CategoryFormat title="SF" setCategory={setCategory} category={category}/>
        <SubCategoryFormat title="Sutro" setCategory={setCategory} category={category}/>
        <SubCategoryFormat title="..." setCategory={setCategory} category={category}/>
        <CategoryFormat title="SB" setCategory={setCategory} category={category}/>
        <SubCategoryFormat title="Sands" setCategory={setCategory} category={category}/>
      </div>
    </div>
  )
}

function CategoryFormat({title, setCategory, category}){
  return (
    category === title ?
    <div onClick={() => setCategory(title)} className='flex justify-start pl-[2rem] border-y-[.2px] border-placeholder/[0.2] bg-cornflower cursor-pointer font-bold'>
    {title}
    </div>
    :
    <div onClick={() => setCategory(title)} className='flex justify-start pl-[2rem] font-semibold border-y-[.2px] border-placeholder/[0.2] cursor-pointer hover:bg-cornflower/[.2]  transition-all delay-[30ms] ease-in-out'>
    {title}
    </div>
  )
}

function SubCategoryFormat({title, setCategory, category}){
  return (
    category === title ?
    <div onClick={() => setCategory(title)} className='flex justify-start pl-[4rem] border-y-[.2px] border-placeholder/[0.2] bg-cornflower cursor-pointer font-bold'>
    {title}
    </div>
    :
    <div onClick={() => setCategory(title)} className='flex justify-start pl-[4rem] font-semibold border-y-[.2px] border-placeholder/[0.2] cursor-pointer hover:bg-cornflower/[.2]  transition-all delay-[30ms] ease-in-out'>
    {title}
    </div>
  )
}

export default PhotosSideBar
