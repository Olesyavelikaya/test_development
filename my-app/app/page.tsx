"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "./store/userAuthStore";

export default function Home() {
  const router = useRouter();
  const { access_token } = useAuthStore();
  useEffect(() => {
    if (access_token) {
      router.replace("/my-info/time-off");
    } else {
      router.replace("/login");
    }
  }, [access_token, router]);

  return <div></div>;
}
