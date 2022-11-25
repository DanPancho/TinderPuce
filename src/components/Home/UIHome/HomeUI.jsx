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
            <div className="bg-dark text-center text-warning p-1 rounded">
              <h1>Posibles Match</h1>
            </div>
            <div className="card bg-dark text-warning mt-2">
              <div className="card-head text-center h-100">
                {preferences !== "" && preferences?.length > 0 ? (
                  <>
                    <Image
                      className="pt-4 pb-4"
                      src={preferences[0]?.img}
                      alt="img_user"
                      style={{ width: "90%", height: "70vh" }}
                    />
                    <h3>{preferences[0]?.name}</h3>
                    <div className="d-flex" style={{justifyContent: 'space-around', margin: '1em'}}>
                      <Image
                        width={80}
                        height={75}
                        src={"/img/unlikeimg.png"}
                        onClick={() =>
                          handleClick(
                            "unlike",
                            preferences[0]?.likes,
                            preferences[0]?.uid
                          )
                        }
                        alt='img'
                      />
                      <Image
                        width={80}
                        height={75}
                        src={"/img/likeimg.png"}
                        onClick={() =>
                          handleClick(
                            "like",
                            preferences[0]?.likes,
                            preferences[0]?.uid,
                            preferences[0].email
                          )
                        }
                        alt='img'
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
