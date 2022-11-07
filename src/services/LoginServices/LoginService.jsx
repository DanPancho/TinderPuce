import { auth } from "../../../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  getAuth
} from "firebase/auth";
import alerts from "../../components/alerts/alerts";
import crudService from "../crudServices/crudService";
import Routes from "../../helpers/Routes";
import { async } from "@firebase/util";

const { create, getOne } = crudService();
const LoginService = () => {
  const signUp = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
        // crear el usuario y sus datos personales iniciales
        create(
          {
            name,
            email,
            carrer: '',
            img: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
            status: false,
            likes: [],
            matches: [],
            gender: "",
            preferences: "",
            pleasures: [],
            uid:  getAuth().lastNotifiedUid
          },
          "users"
        ).catch(() => {
          alerts(
            "center",
            false,
            false,
            "error",
            "Error al registrar el usuario"
          );
        });
      })
      .catch(() => {
        alerts(
          "center",
          false,
          false,
          "error",
          "Error al registrar el nuevo usuario"
        );
      });
  };

  const signIn = (email, password, router) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        if (user.emailVerified) {
          alerts("top-end", true, false, "success", "Bienvenido !!");
          // verificar el estado de su cuenta para redirecionar
          const response = await getOne("users", "email", "==", email)
          response.forEach((doc) => {
            if(!doc.data().status){
              router.push(`${Routes.CONFIGURATION}`)
            }else{
              router.push(`${Routes.INIT}`)
            }
          })
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

  const getUser = () => { 
    onAuthStateChanged(auth, (user) => {
      if(user)
        return user.uid
      else 
        return undefined;
    })
  }

  return {
    signUp,
    signIn,
  };
};

export default LoginService;
