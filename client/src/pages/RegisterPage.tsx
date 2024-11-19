export default function RegisterPage() {
  return (
    <div className="h-screen -mt-20 w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-5">Register</h1>
      <form className="flex flex-col w-72 gap-1">
        <input
          type="text"
          placeholder="username"
          className="rounded-md px-3 py-1 text-black outline-none border-black border-2"
        />
        <input
          type="text"
          placeholder="password"
          className="rounded-md px-3 py-1 text-black outline-none border-black border-2"
        />
        <button className="border-black border-2 mt-1 rounded-md px-3 py-1 bg-teal-700 font-bold hover:bg-teal-800 hover:text-gray-200 duration-100 ">
          Register
        </button>
      </form>
    </div>
  );
}
