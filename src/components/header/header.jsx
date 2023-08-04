import Button from "../button/button";

const header = () => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <>
      <div className={header}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className="username">{tg.initDataUnsafe?.user?.username}</span>
      </div>
    </>
  );
};

export default header;
