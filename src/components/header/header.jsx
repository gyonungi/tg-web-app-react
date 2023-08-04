import React from "react";
import useTelegram from "../../hooks/useTelegram";
import Button from "../button/button";
export default function header() {
  const { user, onClose } = useTelegram();
  return (
    <>
      <div className={"header"}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={"username"}>{user?.username}</span>
      </div>
    </>
  );
}
