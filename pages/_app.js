// import bootstrap
import { Ring } from "@uiball/loaders";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { SSRProvider } from "react-bootstrap";
import { useAuthState as UseAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config";
import MainLogin from "../src/components/login/MainLogin";

function MyApp({ Component, pageProps }) {
  // configuracion de conexion firebase
  const [user, loading] = UseAuthState(auth);
  const router = useRouter();
  if (loading) {
    return (
      <div className="d-flex justify-content-center aling-items-center">
        <Ring size={90} lineWeight={5} speed={1} color="#000" />
      </div>
    );
  }

  if (!user && !router.pathname.includes('Register')) {
    return (
      <SSRProvider>
        <MainLogin />
      </SSRProvider>
    );
  }

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
