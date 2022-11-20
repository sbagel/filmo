function User({user}) {

  return (
    <div className="text-center">
      {/* avatar */}
      <div className="flex justify-center avatar mb-2 relative">
        <div className="w-20 h-20 rounded">
          <img
            alt="user image"
            src={user.avatar}
            />
        </div>
      </div>
      {/* name & username */}
      <p className="text-[1.25rem] font-bold capitalize">{user.name}</p>
      <p className="text-sm text-placeholder">@{user.username}</p>
    </div>
  )
}

export default User
