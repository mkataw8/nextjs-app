import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth();

  const signUp = (e: any) => {
    if (password == confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return alert("Passwords Don't Match");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <form className="flex flex-col  rounded-md border-4 border-slate-700 bg-slate-800 p-8">
        <header className=" mb-5 text-center text-5xl font-bold text-white motion-safe:animate-pulse">
          P&L Journal
        </header>
        <p className="pb-6 text-center text-2xl font-bold text-orange-500">
          Create an account
        </p>
        <div className=" flex flex-col text-sm text-white">
          <p>Email address</p>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            className="h-8 w-80 rounded-md pl-3 text-black"
          />
          <div className=" mt-5 flex text-sm text-white">
            <p className="flex-1">Password</p>
          </div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="h-8 w-80 rounded-md pl-3 text-black"
          />
        </div>
        <div className=" mt-5 flex text-sm text-white">
          <p className="flex-1">Confrim Password</p>
        </div>
        <input
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          type="password"
          className="h-8 w-80 rounded-md pl-3 text-black"
        />
        <div className="mt-5 flex flex-col space-y-2">
          <button
            onClick={signUp}
            className="h-8 w-80 rounded-md bg-blue-500 text-white"
          >
            Create Account
          </button>

          <p className=" flex justify-center pt-5 text-sm text-white">
            Already a member?{" "}
            <p className="ml-1 italic text-blue-500 hover:cursor-pointer">
              {" "}
              <Link href="/login">Sign in</Link>
            </p>
          </p>
        </div>
      </form>
    </div>
  );
};
