import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { app } from "./firebaseConfig";
import { auth } from "./firebaseConfig";

type BoxProps = {
  children: React.ReactNode;
};
const AppContext = React.createContext<any>(null);
const Context = (props: BoxProps) => {
  const [show, setShow] = useState<boolean>(false);

  interface person {
    email: string;
    password: string;
    name: string;
    number: number;
    gender: string;
    genotype: string;
    blood: string;
  }
  const [data, setData] = useState<person>({
    email: "",
    password: "",
    name: "",
    number: 0,
    gender: "",
    genotype: "",
    blood: "",
  });

  const [collect, setCollect] = useState<any>([]);
  // (() => {
  //   const localData = localStorage.getItem("collection");
  //   return localData ? JSON.parse(localData) : [];
  // });
  // useEffect(() => {
  //   localStorage.setItem("collection", JSON.stringify(collection));
  // }, [collection]);

  const [detail, setDetail] = useState<any>(collect[1]);
  const [start, setstart] = useState<number>(0);
  const [end, setEnd] = useState<number>(15);
  const [count, setCount] = useState<number>(0);
  // (() => {
  // const localData = localStorage.getItem("collection");
  // return localData ? JSON.parse(localData) : collection[1];
  // });
  // useEffect(() => {
  //   localStorage.setItem("detail", JSON.stringify(detail));
  // }, [detail]);
  // console.log(detail);

  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData({ ...data, [name]: value });
  };
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    let email = data.email;
    let password = data.password;
    if (email.length < 4) {
      alert("Please enter an email address.");
      return;
    }
    if (password.length < 4) {
      alert("Please enter a password.");
      return;
    }
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

    // const auth = getAuth();
    //   signInWithEmailAndPassword(auth, data.email, data.password)
    //     .then((userCredential) => {
    //       // Signed in
    //       const user = userCredential.user;
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //     });
    // };
    if (auth.currentUser) {
      auth.signOut();
    } else {
      let email = data.email;
      let password = data.password;
      if (email.length < 4) {
        alert("Please enter an email address.");
        return;
      }
      if (password.length < 4) {
        alert("Please enter a password.");
        return;
      }
      //  Sign in with email and pass.
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const collectForm = async () => {
    // e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "collect"), {
        data: data,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    useEffect(() => {
      const fetchPost = async () => {
        await getDocs(collection(db, "collect")).then((querySnapshot: any) => {
          const newData = querySnapshot.docs.map((doc: any) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setCollect(newData);
          console.log(collect, newData);
        });
      };
      fetchPost();
    }, [collect]);
  };

  const getPerson = (id: number) => {
    const person = collect.find((item: any) => item.id === id);

    console.log(person);
    return person;
  };
  const handleDetail = (id: number) => {
    const person = getPerson(id);
    console.log(person);

    setDetail({ detail: person });
    console.log(detail);
  };
  const increase = () => {
    if (end < collect.length - 1) {
      setstart(start + 9);
      setEnd(end + 9);
      setCount(count + 1);
    } else {
      setEnd(end);
    }
  };
  const decrease = () => {
    if (start > 0) {
      setstart(start - 9);
      setEnd(end - 9);
      setCount(count - 1);
    } else {
      setstart(start);
    }
  };
  return (
    <AppContext.Provider
      value={{
        data,
        handleForm,
        handleSignIn,
        handleLogin,
        collectForm,
        collect,
        show,
        setShow,
        handleDetail,
        detail,
        start,
        end,
        count,
        increase,
        decrease,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export { Context, AppContext };
