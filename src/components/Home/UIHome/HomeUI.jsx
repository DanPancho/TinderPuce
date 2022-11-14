import React from "react";
import { Helmet } from "react-helmet";
import UseHomeHook from "../Hooks/UseHomeHook";
import { Ring } from "@uiball/loaders";
import Image from "next/image";

const HomeUI = () => {
  const { preferences, handleClick } = UseHomeHook();
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
                {preferences !== "" && preferences?.length > 0 ? (
                  <>
                    <img
                      className="pt-4 pb-4"
                      src={preferences[0]?.img}
                      alt="img_user"
                      style={{ width: "90%", height: "70vh" }}
                    />
                    <p>{preferences[0]?.name}</p>
                    <div className="d-flex" style={{justifyContent: 'space-around'}}>
                      <Image
                        width={70}
                        height={70}
                        src={"/img/unlike.png"}
                        onClick={() =>
                          handleClick(
                            "unlike",
                            preferences[0]?.likes,
                            preferences[0]?.uid
                          )
                        }
                      />
                      <Image
                        width={70}
                        height={70}
                        src={"/img/like.png"}
                        onClick={() =>
                          handleClick(
                            "like",
                            preferences[0]?.likes,
                            preferences[0]?.uid,
                            preferences[0].email
                          )
                        }
                      />
                    </div>
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

export default HomeUI;
