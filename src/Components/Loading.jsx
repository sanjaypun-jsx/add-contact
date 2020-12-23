import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: 35, color: "white", marginTop: "2rem" }}
      spin
    />
  );

  return <Spin indicator={antIcon} />;
};
export default Loading;
