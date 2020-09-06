import { Maybe } from "../types";

interface DensitySocketReturn {
  url: string;
  ttl: string;
}

type GetDensitySocket = (url: string, key: string) => Promise<Maybe<DensitySocketReturn>>;

export const getDensitySocket: GetDensitySocket = async (url, key) =>
  (
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + key
      }
    })
  ).json();
