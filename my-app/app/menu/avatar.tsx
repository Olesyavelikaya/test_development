"use client"

import { useQuery } from '@apollo/client';
import Image from "next/image";
import { MY_PROFILE_QUERY } from '../apollo/profileData';
import { useAuthStore } from '../store/userAuthStore';


export default function AvatarMain() {
  const { access_token } = useAuthStore();

  const { loading, error, data } = useQuery(MY_PROFILE_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>
  
  return (
    <>
   <Image
        src={data.myProfile.avatar}
        width={150}
        height={150}
        alt="qa"
        className="rounded-full p-0 z-50 relative"
      />
    </>
  );
}
