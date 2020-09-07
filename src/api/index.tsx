type GetDensitySocket = (url: string, key: string) => Promise<any>;

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
