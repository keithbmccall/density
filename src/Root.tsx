import React, { FC, useEffect } from "react";
import { View, Text } from "react-native";
import { setGlobalHandler } from "./utils/errors.util";
import { dkey } from "./keys";
import { getDensitySocket } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { spacesSelector } from "./store/selectors";

const Root: FC = () => {
  useEffect(() => {
    setGlobalHandler();
  });

  const dispatch = useDispatch();
  const spaces = useSelector(spacesSelector);
  console.log("Spaces", spaces);
  useEffect(() => {
    getDensitySocket("https://api.density.io/v2/sockets", dkey).then(r => {
      const ws = new WebSocket(r.url);

      ws.onopen = () => {
        // connection opened
        ws.send("something"); // send a message
        console.log("open4biz");
      };

      ws.onmessage = e => {
        dispatch({
          type: "SET_SPACES",
          payload: JSON.parse(e.data).payload
        });
      };

      ws.onerror = e => {
        // an error occurred
        console.log("error", { e });
      };

      ws.onclose = e => {
        // connection closed
        console.log("close", { e });
      };
    });
  }, [dispatch]);

  return <View>{/*<Text>{doorwayCount.count}</Text>*/}</View>;
};

export default Root;
