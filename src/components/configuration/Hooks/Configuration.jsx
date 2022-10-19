import { useFormik } from "formik";
import * as yup from "yup";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../config";
import alerts from "../../alerts/alerts";
import { useState } from "react";

const schema = yup.object().shape({
  carrera: yup.string().required("Por favor ingresar una carrera"),
});

const Configuration = () => {
  const [file, setFile] = useState("");
  const formik = useFormik({
    initialValues: {
      carrera: "",
    },
    validationSchema: schema,
    onSubmit: (values) => onSubmit(values),
  });
  const handleFile = (event) => {
    if (event.target?.files) {
      setFile(event.target.files[0]);
      document.getElementById("fileLoader").classList.remove("text-danger");
      document.getElementById("fileLoader").classList.add("text-warning");
      const storageref = ref(storage, "fotos/foto_s");
      uploadBytes(storageref, file).then(() => {
        alerts(
          "center",
          false,
          false,
          "success",
          "Se subio la imagen con exito!!"
        );
      });
    }
  };
  const onSubmit = (values) => {
    console.log(values);
    if (file.length === 0) {
      document.getElementById("fileLoader").classList.remove("text-warning");
      document.getElementById("fileLoader").classList.add("text-danger");
    } 
  };

  return {
    formik,
    handleFile,
  };
};

export default Configuration;
