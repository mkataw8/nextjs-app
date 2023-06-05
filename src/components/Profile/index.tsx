import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const Profile = () => {
  const [authUser, setAuthUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
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
  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("singed out");
    });
  };
  return (
    <div className=" w-100vh  flex h-8 items-center justify-end bg-slate-900 pr-20 ">
      <ul className="  pl-30 flex  space-x-2  text-white ">
        <li className="hover:cursor-pointer hover:text-orange-600">Login</li>
        <li>/</li>
        <li className=" hover:cursor-pointer hover:text-orange-600">Signup</li>
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
