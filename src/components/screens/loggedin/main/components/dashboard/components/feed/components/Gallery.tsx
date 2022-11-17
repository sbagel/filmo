function Gallery({grid}) {
  return (
    <div className="mx-[1rem] mb-[5rem]">
    {grid ?
    <div className="flex flex-wrap flex-grow justify-center relative">
    <Grid img='https://cdn.pixabay.com/photo/2022/08/01/07/20/girl-7357492_1280.jpg'/>
    <Grid img='https://cdn.pixabay.com/photo/2022/11/08/21/15/cliffs-7579330_1280.jpg'/>
    <Grid img='https://cdn.pixabay.com/photo/2022/11/04/20/56/mushroom-7570693_1280.jpg'/>
    <Grid img='https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg'/>
    <Grid img='https://cdn.pixabay.com/photo/2022/08/01/07/20/girl-7357492_1280.jpg'/>
    <Grid img='https://cdn.pixabay.com/photo/2022/11/08/21/15/cliffs-7579330_1280.jpg'/>
    </div>
    :
    <div className="flex flex-wrap flex-grow justify-around mt-8 relative">
    <Rows img='https://cdn.pixabay.com/photo/2022/08/01/07/20/girl-7357492_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/11/08/21/15/cliffs-7579330_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/11/04/20/56/mushroom-7570693_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/08/01/07/20/girl-7357492_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/11/08/21/15/cliffs-7579330_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/08/01/07/20/girl-7357492_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/11/08/21/15/cliffs-7579330_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/11/04/20/56/mushroom-7570693_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/08/01/07/20/girl-7357492_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/11/08/21/15/cliffs-7579330_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/08/01/07/20/girl-7357492_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/11/08/21/15/cliffs-7579330_1280.jpg'/>
    <Rows img='https://cdn.pixabay.com/photo/2022/08/01/07/20/girl-7357492_1280.jpg'/>
    </div>
     }
    </div>
  )
}

function Grid({img, url}){
  return (<div className="relative">
    {/* actual image */}
    <a href={url}>
      <img
        alt=""
        src={`${img}`}
        className="object-cover w-[24rem] h-[33rem] pt-8 pr-8 drop-shadow-lg overflow-hidden"
        />
    </a>
    {/* user who posted it */}
    <div className="absolute bottom-0 w-[90%] h-[5.5rem]">
      <div className="flex w-[100%] h-[100%] items-center pl-[1.5rem]">
        <img className="w-[2.6rem] h-[2.6rem] rounded" alt="" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="></img>
        <span className="font-bold ml-[1rem] text-lg"><span className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">First Last</span></span>
      </div>
    </div>
    </div>
  )
}

function Rows({img, url}){
  return (<div className="relative">
      {/* actual image */}
      <a href={url}>
        <img
          alt=""
          src={`${img}`}
          className="h-[15rem] w-[15rem] mt-5 object-cover drop-shadow-lg"
          />
      </a>
    </div>
  )
}

export default Gallery
