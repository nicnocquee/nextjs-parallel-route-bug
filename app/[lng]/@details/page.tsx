import { getData } from "../data";

export default async function Sidebar() {
  console.log("details");
  const data = await getData();

  return <div>Details in /de</div>;
}
