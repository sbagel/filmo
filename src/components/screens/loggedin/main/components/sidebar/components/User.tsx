function User({user}) {

  return (
    <div className="text-center">
      <div className="flex justify-center avatar mb-2">
        <div className="w-20 h-20 rounded">
          <img
            alt="user image"
            src="https://i.pinimg.com/736x/82/48/c7/8248c796c581dfeeb693837dc014499e--pillsbury-dough-boys-paid-surveys.jpg"
            />
        </div>
      </div>
      <p className="text-[1.25rem] font-bold capitalize">{user.name}</p>
      <p className="text-sm text-placeholder">@{user.username}</p>
    </div>
  )
}

export default User
