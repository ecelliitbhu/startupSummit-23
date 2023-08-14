"use client";
import React, { useEffect, useState } from "react";
import { getAuth, Auth } from "firebase/auth";
import { app} from "../firebase/firebase";

import {
  getFirestore,
  collection,
  addDoc,
  where,
  query,
  getDocs
} from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "../routes/routes";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName: string = usePathname() || "";
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginChecked, setLoginChecked] = useState(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const auth: Auth = getAuth(app);

  const checkAuthState = async () => {
    const currentUser = auth.currentUser;
    console.log(currentUser)
    const database = getFirestore(app);
    const queryData: any = query(
      collection(database, "users"),
      where("name", "==", currentUser?.email)
    );
      console.log(queryData)
      getDocs(queryData)
      .then((data: any) => {
        if (data.empty) {
          addDoc(collection(database, "users"), currentUser)
            .then((docRef) => {
              console.log(`Document added with id : ${docRef}`);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        else{
          console.log("User already exists");
        }
      })
      .catch((err: any) => {
        console.log(err);
      });

    // If user is not logged in
    if (!currentUser) {
      setLoggedIn(false);
      setLoginChecked(true);
    }
  };

  auth.onAuthStateChanged(async function (user) {
    if (!(pathName in PUBLIC_ROUTES)) {
      checkAuthState();
    }
  });

  useEffect(() => {
    if (loggedIn && pathName in PUBLIC_ROUTES) router.push("/");
  }, [loggedIn]);

  useEffect(() => {
    if (loginChecked) {
      // Check if the route is public or not
      if (!loggedIn && !(pathName in PUBLIC_ROUTES)) {
        router.push("/login");
      } else if (loggedIn && pathName in PUBLIC_ROUTES) {
        router.push("/");
      } else {
        setLoading(false);
      }
    }
  }, [loginChecked]);

  useEffect(() => {
    if (pathName in PUBLIC_ROUTES) {
      setLoading(false);
    }
  }, [pathName]);

  return (
    <>
      {loading ? (
        <div className="h-[100vh] w-full">
          <h1>Hello World</h1>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
