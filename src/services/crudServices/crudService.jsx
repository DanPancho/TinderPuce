import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useCollectionData as UseCollectionData} from "react-firebase-hooks/firestore";
import { db } from "../../../config";

const crudService = () => {
  const create = async (data, nameCollection) => {
    return await addDoc(collection(db, nameCollection), data);
  };
  const getOne = async (nameCollecion, parameter, operacion, data) => {
    const creationQuery = query(
      collection(db, nameCollecion),
      where(parameter, operacion, data)
    );
    const response = await getDocs(creationQuery);
    return response;
  };
  const getUsuarios = async (
    nameCollecion,
    parameter,
    operacion,
    data,
    parameter2,
    operacion2,
    data2
  ) => {
    //console.log(data2);
    const creationQuery = query(
      collection(db, nameCollecion),
      where(parameter, operacion, data)
      //where(parameter2, operacion2, data2),
    );

    const response = await getDocs(creationQuery);
    return response;
  };
  const getID = async (nameCollection, parameter, operacion, data) => {
    const creationQuery = query(
      collection(db, nameCollection),
      where(parameter, operacion, data)
    );
    return await getDocs(creationQuery);
  };
  const update = async (nameCollecion, idDoc, data) => {
    const docRef = doc(db, nameCollecion, idDoc);
    return await setDoc(docRef, data, { merge: true });
  };

  const getById =  (nameCollecion, parameter, operacion, data) => {
    const q = query(
      collection(db, nameCollecion),
      where(parameter, operacion, data)
    );
    const [result] = UseCollectionData(q);
    return result;
  };

  const getAll = (nameCollecion) => {
    const [result] = UseCollectionData(collection(db,nameCollecion));
    return result;
  }
  return {
    create,
    getOne,
    getID,
    update,
    getUsuarios,
    getById,
    getAll
  };
};

export default crudService;
