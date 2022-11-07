import { async } from "@firebase/util";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import crudService from "../../../services/crudServices/crudService";

const UseHome = async () => {
  const [ex, setEx] = useState('DATATATATAT')
  console.log(ex);
  // const [uid, setUid] = useState("");
  // const [users, setUsers] = useState();
  // const { getOne } = crudService();
  // const [ex, setEx] = useState('DATATATATAT')
  // console.log('HOLA');

  // const getUsers = async (userPreference) => {
  //   const data = [];
  //   const usuarios = getOne("users", "gender", "==", userPreference);
  //   (await usuarios).forEach((doc) => {
  //     data.push(doc.data());
  //   });
  //   return data;
  // };

  // const getPreferences = async () => {
  //   const data = "";
  //   const response = await getOne("users", "uid", "==", uid);
  //   response.forEach((doc) => {
  //     data = doc.data().preferences;
  //   });
  //   return data;
  // };

  // useEffect(() => {
  //   onAuthStateChanged(getAuth(), (user) => setUid(user?.uid));
  // }, []);

  // async function userSet() {
  //   setUsers(["1", "2"]);
  // }
  // useEffect(() => {
  //   if (uid !== "") {
  //     setUsers(["1", "2"]);
  //   }
  //   console.log(users);
  //   return () => {
  //     //users
  //     setUsers(["1", "2"]);
  //   };
  // }, [uid]);

  // useEffect(() => {
  //   if (uid !== "") {
  //     //console.log('USEEE');
  //     const getData = async () => {
  //       const preferences = await getPreferences();
  //       if (preferences !== "") {
  //         let auxUser = await getUsers(preferences);
  //         //setUsers(auxUser)
  //         console.log(auxUser);
  //       }
  //       return;
  //     };
  //     //getData();
  //   }
  // }, [uid]);


  return {
    ex
  };
};

export default UseHome;
