import {addDoc, collection, getDocs, query, where} from 'firebase/firestore/lite'
import { db } from '../../../config'

const crudService = () => {
    const create = async (data, nameCollection) => {
        return await addDoc(collection(db, nameCollection), data)
    }
    const getOne = async (nameCollecion, parameter, operacion, data) => {
        const creationQuery = query(collection(db, nameCollecion), where(parameter, operacion ,data))
        const response = await getDocs(creationQuery);
        return response;
    }
    return {
        create,
        getOne
    }
}

export default crudService;