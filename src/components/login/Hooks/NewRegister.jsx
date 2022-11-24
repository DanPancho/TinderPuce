import { ValidationPassword } from "../../../helpers/expressions/ValidationPassword";
import * as yup from "yup";
import { useFormik } from "formik";
import Routes from "../../../helpers/Routes";
import LoginService from "../../../services/LoginServices/LoginService";
import Router from "next/router";
import { useRouter } from "next/router";


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
    .label('confirm password')
    .required().oneOf([yup.ref('password'),null],'La contraseña no coincide')
});

const NewRegister = () => {
  const router = useRouter();
  const {signUp} = LoginService();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: schema,
    onSubmit: () => onRegister(),
  });
  const LinkHome = () => {
    router.push(`${Routes.HOME}`)
  };
  const onRegister = () => {
    signUp(formik.values.email, formik.values.password, formik.values.name)
  };
  return {
    formik,
    LinkHome,
  };
};

export default NewRegister;
