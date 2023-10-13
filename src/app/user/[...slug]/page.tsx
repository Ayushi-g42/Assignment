"use client";
import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { Posts } from "@/components/posts/page";
import { UserProfile } from "@/components/user-profile/page";
import { UserListItemProps } from "../type";
import { PostItems } from "./type";
import { Header } from "@/components/header/page";

const UserListDetail = ({ params }: { params: { slug: string } }) => {
  const [userDetail, setUserDetail] = useState<UserListItemProps | null>(null);
  const [postData, setPostData] = useState<PostItems[]>([]);
  const [countryData, setCountryData] = useState([]);
  const [countryTime, setCountryTime] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params?.slug[0]}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetail(data);
      });
  }, [params]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((post) => {
        setPostData(post);
      });
  }, []);

  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/timezone`).then((res) =>
      res.json().then((country) => setCountryData(country))
    );
  }, []);

  const getTime = (value: string) => {
    fetch(`http://worldtimeapi.org/api/timezone/${value}`)
      .then((res) => res.json())
      .then((time) => {
        setCountryTime(time);
      });
  };

  const postFilterData = postData.filter((i) => i.userId == userDetail?.id);
  return (
    <Container>
      <Header
        countryData={countryData}
        selectCountry={(value: string) => {
          getTime(value);
        }}
        countryTime={countryTime}
      />

      <UserProfile userDetail={userDetail} />
      <Posts data={postFilterData} />
    </Container>
  );
};

export default UserListDetail;
