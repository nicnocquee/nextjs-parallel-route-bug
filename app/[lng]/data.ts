import { cache } from "react";

const _getData = async () => {
  console.log("inside _getData");
  return { data: "data" };
};

export const getData = cache(_getData);
