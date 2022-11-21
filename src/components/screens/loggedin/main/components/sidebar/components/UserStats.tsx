function UserStats({photosLen}) {
  return (<>
    <div className="flex [&>*]:w-1/3 [&>*]:justify-around [&>*]:flex-col text-center">
      <div>{photosLen} <div className="text-placeholder text-sm">Photos</div></div>
      <div>1 <div className="text-placeholder text-sm">Followers</div></div>
      <div>1 <div className="text-placeholder text-sm">Following</div></div>
    </div>
    <div className="flex justify-center divider"></div>
    </>
  )
}

export default UserStats
