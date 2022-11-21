function UserDashHeader({ user }) {
  console.log(user.blur)

  if (user.blur) {
    return (
      <div className="relative w-[100%]">
      <div className="w-[100%] h-[25rem] relative z-10">
        <img
          alt="user header"
          src={user.header}
          className="h-[25rem] w-[100%] object-cover"
        />
        <div className="flex absolute top-20 left-10 mt-[5rem]  ">
          {/* user avatar */}
          <div className="avatar h-[13rem] w-[13rem]">
            <div className="rounded-full filter drop-shadow-2xl">
              <img className="object-cover" src={user.avatar}/>
            </div>
          </div>
          {/* user info */}
          <div className="flex flex-col justify-center w-fit h-[10rem] px-[2rem] [text-shadow:_1px_2px_2px_rgb(0_0_0_/_40%)]">
            <div className="font-bold text-[4rem] text-black uppercase">{user.name}</div>
            <p className="text-[1.2rem] mt-[-.5rem]">
              <span className="text-black">@{user.username}</span>{' '}
              <span className="text-black/[0.5] text-[.9rem] mt-[.2rem]">
                120 photos | 20 collections
              </span>{' '}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-[120%] absolute top-[18rem] left-[-5rem] h-[28rem] bg-gradient-to-b from-[${user.blur}] to-black blur-[2rem] opacity-70`}
      ></div>
    </div>
    );
  }
}

export default UserDashHeader;
