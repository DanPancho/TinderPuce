import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HomeHook from "../Hooks/HomeHook";
import { Ring } from "@uiball/loaders";
import { async } from "@firebase/util";

const Home = () => {
  const { users, handleClickDB } = HomeHook();
  const [user, setUser] = useState("");

  const handleClick = async(data) => {
    let aux = users;
    if(data == 'unlike'){
      await handleClickDB(data,users[0].uid,users[0].likes)
    } 
    aux.shift();
    if (aux?.length) {
      setUser(aux[0]);
    }else{
      setUser("");
    }
    

  };
  useEffect(() => {
    //console.log('Efect');
    if (users?.length) {
      setUser(users[0]);
    }
  }, [users]);

  return (
    <>
      <div className="container py-3 h-100">
        <Helmet>
          <style>{"body { background-color: #c1ccd4; }"}</style>
        </Helmet>
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="bg-dark text-center text-warning p-1">
              <h1>Posibles Match</h1>
            </div>
            <div className="card bg-dark text-warning mt-2">
              <div className="card-head text-center h-100">
                {user !== "" ? (
                  <>
                    <img
                      className="pt-4 pb-4"
                      src={user?.img}
                      alt="img_user"
                      style={{ width: "90%", height: "70vh" }}
                    />
                    <p>{user?.name}</p>
                    <button onClick={() => handleClick("unlike")}>
                      UNLIKE
                    </button>
                    <button onClick={() => handleClick("like")}>LIKE</button>
                  </>
                ) : (
                  <Ring size={40} lineWeight={5} speed={2} color="#fff" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
