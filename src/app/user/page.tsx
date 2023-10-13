"use client";

import React, { useEffect, useState } from "react";
import { Container } from "./style";
import {
  UserListItem,
  UserListItemProps,
} from "@/components/user-list-item/page";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((post) => {
        setPostData(post);
      });
  }, []);

  return (
    <Container>
      <h6 className="heading">Directory</h6>
      {userData?.length > 0 &&
        userData?.map((item, index) => {
          return (
            <React.Fragment key={`user-item-${index}`}>
              <UserListItem item={item} postData={postData} />
            </React.Fragment>
          );
        })}
    </Container>
  );
};

export default User;
