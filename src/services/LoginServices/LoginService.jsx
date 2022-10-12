import { auth } from "../../../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import alerts from "../../components/alerts/alerts";

const LoginService = () => {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        // validar el correo del usuario
        if (!user.emailVerified) {
          sendEmailVerification(auth.currentUser).catch((e) => {
            alerts(
              "center",
              false,
              false,
              "error",
              "Error al enviar el mensaje de confirmacion"
            );
          });
        }
        alerts(
          "center",
          false,
          true,
          "success",
          "Por favor, revisa tu correo electronico"
        );
      })
      .catch(() => {});
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (user.emailVerified) {
          alerts("top-end", true, false, "success", "Bienvenido !!");
        } else {
          alerts(
            "top-end",
            true,
            false,
            "info",
            "Por favor verifique su correo"
          );
        }
      })
      .catch(() => {
        alerts("top-end", true, false, "error", "Error al iniciar sesion !!");
      });
  };

  return {
    signUp,
    signIn,
  };
};

export default LoginService;
