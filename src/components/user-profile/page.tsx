import React from "react";
import { Container } from "./style";
import { useRouter } from "next/navigation";
import { UserListItemProps } from "@/app/user/type";

export const UserProfile = (props: {
  userDetail: UserListItemProps | null;
}) => {
  const { userDetail } = props;
  const router = useRouter();

  if (!userDetail) return;
  return (
    <Container>
      <p className="text">Profile Page</p>
      <div className="profile">
        <div>
          <p>{userDetail?.name}</p>
          <p className="last-item">Username : {userDetail?.username}</p>
        </div>
        <div>
          <p>
            {" "}
            {userDetail?.address?.street +
              " " +
              userDetail?.address?.suite +
              " " +
              userDetail?.address?.city +
              " " +
              userDetail?.address?.zipcode}
          </p>
          <p className="last-item">
            {userDetail?.email + " | " + userDetail?.phone}
          </p>
        </div>
      </div>
    </Container>
  );
};
