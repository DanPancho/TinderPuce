import React, { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../config";
import { collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const q = query(
    collection(db, "chats"),
    where("users", "array-contains", user.email)
  );
  const [snapshot] = useCollection(q);
  const chats = snapshot?.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return (
    <>
      <div
        className="w-100 bg-light p-1 border"
        style={{ height: "92vh", borderRadius: "10px", overflowY: "auto" }}
      >
        <div className="d-flex">
          <h2 style={{ marginLeft: "4.5%" }}>Chat</h2>
        </div>
        <hr />
        <ListGroup style={{ paddingTop: "1em", overflowY: "auto" }}>
          {chats?.length &&
            chats.map((data, index) => (
              <ListGroup.Item action className="mb-2" key={index}>
                <div className="d-flex">
                  <div style={{ marginLeft: "4.5%" }}>
                    {data?.users.map(
                      (dataUser, index) =>
                        dataUser !== user.email && (
                          <div
                            key={index}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              router.push(`/Chat/${data.id}`);
                            }}
                          >
                            <Image
                              width={35}
                              height={30}
                              src="/favicon.ico"
                              alt="Imagen usuario"
                            />
                            {dataUser}
                          </div>
                        )
                    )}
                  </div>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </>
  );
};

export default SideBar;
