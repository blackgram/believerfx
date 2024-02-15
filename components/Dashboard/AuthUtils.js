// authUtils.js
import { useDispatch } from "react-redux";
import { logoutUser } from "@/Redux/features/userSlice";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebaseConfig";

export const handleLogout = (dispatch, auth, router) => {

  dispatch(logoutUser());
  signOut(auth)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      console.error("Logout error:", error);
    });
};
