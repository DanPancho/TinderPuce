import { useFormik } from "formik";
import * as yup from "yup";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../config";
import alerts from "../../alerts/alerts";
import { useState } from "react";
import { v4 } from "uuid";
import crudService from "../../../Services/crudServices/crudService";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import Routes from "../../../Helpers/Routes";

const schema = yup.object().shape({
  carrera: yup.string().required("Por favor ingresar una carrera"),
  fileLoader: yup.mixed().required("Por favor subir una imagen"),
  gustos: yup.array().test({
    name: "validacionCheck",
    exclusive: true,
    message: "Selecionar al menos una opción",
    test: (value) => value.length > 0,
  }),
});

const Configuration = () => {
  const [file, setFile] = useState("");
  const [ex, setEx] = useState('DATATATATAT')
  const router= useRouter();
  const { getID, update } = crudService();
  const formik = useFormik({
    initialValues: {
      fileLoader: "",
      genero: "masculino",
      generoPreferencia: "masculino",
      carrera: "",
      gustos: [],
    },
    validationSchema: schema,
    onSubmit: (values) => onSubmit(values),
  });
  const handleFile = async (event) => {
    if (event.target?.files) {
      setFile(event.target.files[0]);
    }
  };
  const onSubmit = async (values) => {
    // Subir la imagen a storage
    const metadata = {
      contentType: file.type,
    };
    const storageref = ref(storage, "fotos/" + v4());
    await uploadBytes(storageref, file, metadata).catch(() => {
      alerts("center", false, false, "error", "No se pudo cargar la imagen");
      return;
    });
    const url = await getDownloadURL(storageref);
    // buscar el id del documento
    const idDoc = (await getID("users", "uid", "==", getAuth().lastNotifiedUid))
      .docs[0].id;
    update(
      "users",
      idDoc,
      {
        carrer: values.carrera,
        gender: values.genero,
        img: url,
        preferences: values.generoPreferencia,
        pleasures: values.gustos,
        status: true,
      }
    )
      .then(() => {
        alerts(
          "center",
          false,
          false,
          "success",
          "Se guardo la configuracion del perfil !!"
        );
        setTimeout(() => {
          router.push(`${Routes.INIT}`)
        },3000)
      })
      .catch((e) => {
        alerts(
          "center",
          false,
          false,
          "error",
          "No se pudo guardar la configuracion del perfil"
        );
      });
  };

  return {
    formik,
    handleFile,
    ex
  };
};

export default Configuration;
