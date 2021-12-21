import { notification } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const store = useSelector((state) => state);
  useEffect(() => {
    const openNotificationWithIcon = () => {
      notification["error"]({
        message: "Error message",
        description: store.images.error,
      });
    };

    openNotificationWithIcon();
  }, []);
  return null;
};

export default Notification;
