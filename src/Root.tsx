import React, { FC, useEffect } from "react";
import { setGlobalHandler } from "./utils/errors.util";
import Layout from "./components/layout";
import Spaces from "./components/spaces";

const Root: FC = () => {
  useEffect(() => {
    setGlobalHandler();
  });

  return (
    <Layout>
      <Spaces />
    </Layout>
  );
};

export default Root;
