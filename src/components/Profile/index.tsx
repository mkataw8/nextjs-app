import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Profile = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const auth = getAuth();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  //  const userSignOut = () => {
  //   signOut(auth).then(() => {
  //     console.log("signed out");
  //   });
  // };
  return (
    <div className=" w-100vh min-w-screen flex h-8 items-center justify-end bg-slate-900 pr-10 sm:pr-20 ">
      <ul className="  pl-30 flex  space-x-2  text-white ">
        <li className="hover:cursor-pointer hover:text-orange-600">
          <Link href="/login">Login</Link>
        </li>
        <li>/</li>
        <li className=" hover:cursor-pointer hover:text-orange-600">
          <Link href="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

// {authUser ? (
//   <>
//     {" "}
//     <p>{`Signed In ${authUser.email}`}</p>
//     <button onClick={userSignOut}>Sign Out</button>
//   </>
// ) : (
//   <p>Signed Out</p>
// )}
