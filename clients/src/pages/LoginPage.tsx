import { useState } from "react";
import axios from "axios";
import bcrypt from "bcrypt";
const saltRound = 10;

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function register(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    let hashedPass: string | undefined;

    try {
      hashedPass = await bcrypt.hash(password, saltRound);
    } catch (err) {
      console.log("Error occured while hashing: ", err);
      return;
    }

    if (!hashedPass) {
      console.error("Failed to hash password");
      return;
    }

    const userData: { username: string; password: string } = {
      username,
      password: hashedPass,
    };

    const url: string = "http://localhost:4000/register";

    try {
      const response = await axios.post(url, userData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
    } catch (err) {
      console.error("something wrong occured: ", err);
    }
  }

  return (
    <div className="h-screen -mt-20 w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-5">Login</h1>
      <form
        className="flex flex-col w-[60vw] max-w-[600px] gap-1"
        onSubmit={register}
      >
        <input
          type="text"
          placeholder="username"
          className="rounded-md px-3 py-1 text-black outline-none border-black border-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="rounded-md px-3 py-1 text-black outline-none border-black border-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="border-black border-2 mt-1 rounded-md px-3 py-1 bg-slate-600 font-bold hover:bg-slate-800 hover:text-gray-200 duration-100 ">
          Submit
        </button>
      </form>
    </div>
  );
}
