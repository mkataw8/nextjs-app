import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

// interface LoginType {
//   email: string;
//   password: string;
// }
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="flex flex-col ">
        <header className=" mb-5 text-center text-5xl font-bold text-white motion-safe:animate-pulse">
          P&L Journal
        </header>
        <p className="pb-6 text-center text-2xl font-bold text-orange-500">
          Sign into your account
        </p>
        <div className=" flex flex-col text-sm text-white">
          <p>Email address</p>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
            className="h-8 w-80 rounded-md pl-3 text-black"
          />
          <div className=" mt-5 flex text-sm text-white">
            <p className="flex-1">Password</p>
            <p className="flex-2 text-blue-500 hover:cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
            className=" h-8 w-80 rounded-md pl-3 text-black"
          />
        </div>
        <div className="mt-5 flex flex-col space-y-2">
          <button
            onClick={signIn}
            className="h-8 w-80 rounded-md bg-blue-500 text-white"
          >
            Sign in
          </button>

          <p className=" flex justify-center pt-5 text-sm text-white">
            Not a member?{" "}
            <Link
              className="ml-1 italic text-blue-500 hover:cursor-pointer"
              href="/signup"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
