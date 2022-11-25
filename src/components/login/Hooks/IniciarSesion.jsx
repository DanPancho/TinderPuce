import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import Routes from "../../../Helpers/Routes";
import LoginService from "../../../Services/LoginServices/LoginService";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingrese un correo valido")
    .required("Por favor ingrese su correo electronico"),
  password: yup.string().required("Por favor ingrese su contraseña"),
});

export const IniciarSesion = () => {
  const router = useRouter();
  const { signIn } = LoginService();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: () => onLogin(),
  });

  const onRegister = () => {
    router.push(`${Routes.REGISTER}`);
  };

  const onLogin = () => {
    signIn(formik.values.email, formik.values.password,router);
  };
  const LinkHome = () => {
    router.push(`${Routes.HOME}`)
  };
  return {
    formik,
    onRegister,
    LinkHome,
  };
};
