import React, { FC, useEffect } from "react";
import { View, Text } from "react-native";
import { setGlobalHandler } from "./utils/errors.util";
import { dkey } from "./keys";
import { getDensitySocket } from "./api";
import { useDispatch, useSelector } from "react-redux";

const Root: FC = () => {
  useEffect(() => {
    setGlobalHandler();
  });

  const dispatch = useDispatch();
  const doorwayCount = useSelector(state => state.doorway.doorwayCount);

  useEffect(() => {
    getDensitySocket("https://api.density.io/v2/sockets", dkey).then(r => {
      const ws = new WebSocket(r.url);

      ws.onopen = () => {
        // connection opened
        ws.send("something"); // send a message
        console.log("open4biz");
      };

      ws.onmessage = e => {
        console.log(JSON.parse(e.data).payload);
        dispatch({
          type: "SET_COUNT",
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

  return (
    <View>
      <Text>{doorwayCount.count}</Text>
    </View>
  );
};

export default Root;
