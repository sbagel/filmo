function UserDashHeader({ user }) {
  console.log(user)

  if (user.blur) {
    return (
      <div className="relative w-[100%]">
      <div className="w-[100%] h-[25rem] relative z-10">
        <img
          alt="user header"
          src={user.header}
          className="h-[25rem] w-[100%] object-cover"
        />
        {/* user info */}
        <div className="flex flex-col justify-center w-fit h-[10rem] absolute bottom-0 px-[2rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          <div className="font-bold text-[3.25rem] uppercase">{user.name}</div>
          <p className="text-[1rem] mt-[-.5rem]">
            @{user.username}{' '}
            <span className="text-milk/[0.75] text-[.7rem] mt-[.2rem]">
              120 photos | 20 collections
            </span>{' '}
          </p>
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
