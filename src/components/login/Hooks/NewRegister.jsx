import { ValidationPassword } from "../../../helpers/expressions/ValidationPassword";
import * as yup from "yup";
import { useFormik } from "formik";
import LoginService from "../../../services/LoginServices/LoginService";

const validationPassword = ValidationPassword();

const schema = yup.object().shape({
  name: yup.string().required("Por favor ingresar su nombre"),
  email: yup
    .string()
    .email("Por favor ingresar un correo valido")
    .required("Por favor ingresar su correo institucional"),
  password: yup
    .string()
    .matches(validationPassword, "Por favor una contraseña valida")
    .min(8, "La contraseña debe tener mas de 4 caracteres")
    .max(16, "La contraseña no pued tener mas de 16 caracteres")
    .required("Por favor ingresar una contraseña"),
  cpassword: yup
    .string()
    .min(4, "La contraseña debe tener mas de 4 caracteres")
    .required("Por favor ingresar la confirmacion de la contraseña"),
});

const NewRegister = () => {
  const {signUp} = LoginService();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: schema,
    onSubmit: (values) => onRegister(values),
  });
  const onRegister = () => {
    signUp(formik.values.email, formik.values.password, formik.values.name)
  };
  return {
    formik,
  };
};

export default NewRegister;
