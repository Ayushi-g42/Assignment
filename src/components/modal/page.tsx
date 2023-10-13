import React, { ReactHTMLElement, ReactNode, useEffect, useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/navigation";

export const Modal = (props: { children: ReactNode; onClose: () => void }) => {
  const { children, onClose = () => {} } = props;
  return (
    <Container onClick={() => onClose()}>
      <div className="modal">
        <button className="close-button" onClick={() => onClose()}>
          X
        </button>
        {children}
      </div>
    </Container>
  );
};
