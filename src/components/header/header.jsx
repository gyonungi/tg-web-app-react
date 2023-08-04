import React from "react";
import useTelegram from "../../hooks/useTelegram";
import Button from "../button/button";
export default function header() {
  const { onClose, user } = useTelegram();
  return (
    <>
      F
      <div className={"header"}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={"username"}>{user?.username}</span>
      </div>
    </>
  );
}
