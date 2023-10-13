"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  router.replace("/user");
};

export default Home;
