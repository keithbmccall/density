import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initSpaceList, initSpaceSocket } from "./utils";

export const useSpaces = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    initSpaceList(dispatch);
  }, [dispatch]);

  useEffect(() => {
    initSpaceSocket(dispatch);
  }, [dispatch]);
};
