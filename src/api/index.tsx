import { dkey } from "../keys";

type GetDensitySocket = () => Promise<any>;

type GetDensitySpaces = () => Promise<any>;

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + dkey
};

const baseUrl = "https://api.density.io/v2";

export const getDensitySocket: GetDensitySocket = async () => {
  const url = baseUrl + "/sockets";
  return (
    await fetch(url, {
      method: "POST",
      headers
    })
  ).json();
};

export const getDensitySpaces: GetDensitySpaces = async () => {
  const url = baseUrl + "/spaces";
  return (
    await fetch(url, {
      method: "GET",
      headers
    })
  ).json();
};
