import React, { useState, useEffect } from "react";
import crudService from "../../../services/crudServices/crudService";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HomeHook = () => {
  const [uid, setUid] = useState("");
  const [users, setUsers] = useState([]);
  const { getOne, getUsuarios, getID, update } = crudService();
  const getUsers = async (userPreference) => {
    const data = [];
    const usuarios = getUsuarios("users", "gender", "==", userPreference);
    (await usuarios).forEach((doc) => {
      data.push(doc.data());
    });
    const aux = data.filter(
      (buscado) =>
        !buscado?.likes?.includes(uid) &&
        !buscado?.likes?.includes(`UNLIKE/${uid}`)
    );
    return aux;
  };

  const getPreferences = async () => {
    const data = "";
    const response = await getOne("users", "uid", "==", uid);
    response.forEach((doc) => {
      data = doc.data().preferences;
    });
    return data;
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => setUid(user?.uid));
  }, []);

  useEffect(() => {
    if (uid != "") {
      const getData = async () => {
        const preferences = await getPreferences();
        if (preferences !== "") {
          let auxUser = await getUsers(preferences);
          setUsers(auxUser);
        }
        return;
      };
      getData();
    }
  }, [uid]);

  const handleClickDB = async (data, userID, likes) => {
    const idDoc = (await getID("users", "uid", "==", userID)).docs[0].id;
    if (data === "like") {
      likes.push(uid);
    } else {
        likes.push(`UNLIKE/${uid}`);
    }
    update("users", idDoc, {
      likes: likes,
    }).then(() => {
      console.log("Se envio el unlike");
    });
  };

  return {
    users,
    handleClickDB,
  };
};

export default HomeHook;
