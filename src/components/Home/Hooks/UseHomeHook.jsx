import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../../../../config";
import crudService from "../../../services/CrudServices/crudService";
import LoginService from "../../../services/LoginServices/LoginService";
import alerts from "../../alerts/alerts";

const UseHomeHook = () => {
  // Obtener los posibles matches
  const { getUser } = LoginService();
  const { getAll, update, getID } = crudService();
  let preferences = "";
  let me = ''

  const user = getUser();

  const users = getAll("users");
  if (users !== undefined) {
    me = users.find((buscado) => buscado.uid === user.uid);
    const Auxpreferences = users.filter(
      (buscado) => buscado.gender === me.preferences
    );
    preferences = Auxpreferences.filter(
      (buscado) =>
        !buscado?.likes?.includes(user.uid) &&
        !buscado?.likes?.includes(`UNLIKE/${user.uid}`)
    );
  }

  const handleClick = async (data,likes, preferenceUId, emailPreference = '') => {
    const idDoc = (await getID("users", "uid", "==", preferenceUId)).docs[0].id;
    if (data === "unlike") {
      likes.push(`UNLIKE/${user.uid}`);
    } else {
        const  aux = me.likes.find((buscado) => buscado === preferenceUId)
        if(aux?.length){
            await addDoc(collection(db, 'chats'),{users: [user.email, emailPreference ]})
            alerts('center',false,false,'info', 'Es un match, Chat creado!')
        }
      likes.push(`${user.uid}`);
    }
    update("users", idDoc, {
      likes: likes,
    }).catch(() => {
      alerts("center", false, false, "error", "ERROR");
    });
  };
  return {
    preferences,
    handleClick,
  };
};

export default UseHomeHook;
