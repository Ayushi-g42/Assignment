import React, { useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/navigation";
import { PostItems } from "@/app/user/[...slug]/type";
import { Modal } from "../modal/page";

export const Posts = (props: { data: PostItems[] }) => {
  const { data } = props;
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState<PostItems | null>(null);

  return (
    <Container>
      {data?.length > 0 &&
        data.map((item: PostItems, index: number) => {
          return (
            <div
              className="post-wrap"
              key={`post-${index}`}
              onClick={() => setModalOpen(item)}
            >
              <p className="title single-line">{item.title}</p>
              <p className="text three-line">{item.body}</p>
            </div>
          );
        })}
      {isModalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(null);
          }}
        >
          <p className="title">{isModalOpen.title}</p>
          <p className="text">{isModalOpen.body}</p>
        </Modal>
      )}
    </Container>
  );
};
