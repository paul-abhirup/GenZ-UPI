// import { PrismaClient } from "@repo/db/client";
("use client");

import { useBalance } from "@repo/store/useBalance";

export default function () {
  const balance = useBalance();
  return <div>hi there {balance}</div>;
}
