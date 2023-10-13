import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/navigation";
import { UserListItemProps, UserListType } from "@/app/user/type";
import { PostItems } from "@/app/user/[...slug]/type";

export const UserListItem = (props: {
  item: UserListItemProps;
  postData: PostItems[];
}) => {
  const { item, postData } = props;
  const router = useRouter();

  const total_post = postData?.filter((i) => i?.userId == item?.id);

  return (
    <Container onClick={() => router.push(`/user/${item.id}`)}>
      <p className="text">{item?.name}</p>
      <p className="text">Posts : {total_post?.length}</p>
    </Container>
  );
};
