"use client"

import { useQuery } from '@apollo/client';
import { MY_PROFILE_QUERY } from '../apollo/profileData';
import { useAuthStore } from '../store/userAuthStore';

export default function PersonName() {
  const { access_token } = useAuthStore();
  const { loading, error, data } = useQuery(MY_PROFILE_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
 
       <h2 className="md:text-28 md:leading-34 text-xl  flex md:flex-row md:gap-2 flex-col gap-0">
      <p className="font-semibold">
        {data.myProfile.name}
      </p>
      <p className="font-semibold">
        Kuibyshevskaya
      </p>
    </h2>
   
   
  );
}
