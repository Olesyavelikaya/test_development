"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MY_PROFILE_QUERY } from "../apollo/profileData";
import { useAuthStore } from "../store/userAuthStore";


export default function Utilities() {
  const { access_token } = useAuthStore();
  const router = useRouter();
  const clearTokens = useAuthStore((state) => state.clearTokens);
  const { loading, error, data } = useQuery(MY_PROFILE_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { avatar } = data.myProfile;

  const handleLogout = () => {
    clearTokens();
    router.push("/login");
  };

  return (
    <div className="md:pt-6 gap-6 flex">
      <div className="hidden sm:block pt-4 ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src="/settings.png" width={24} height={24} alt="setting" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden sm:block pt-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src="/qa.png" width={24} height={24} alt="qa" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>QA</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden sm:block pt-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src="/bell.png" width={21} height={24} alt="bell" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Notifications</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={avatar} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem className="flex justify-center">
            <Button className="text-white bg-black" onClick={handleLogout}>
              Выход
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
