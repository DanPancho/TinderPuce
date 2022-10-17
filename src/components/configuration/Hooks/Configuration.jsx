import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../config";
import alerts from "../../alerts/alerts";

const Configuration = () => {
  const handleFile = (event) => {
 
    let file = event.target.files[0];
    const storageref = ref(storage,'fotos/foto_s')
    uploadBytes(storageref, file).then(() => {
        alerts('center',false,false,'success', 'Se subio la imagen con exito!!')
    })
  }

  return {
    handleFile
  }
}

export default Configuration