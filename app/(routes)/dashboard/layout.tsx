"use client";
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const DashboardLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
  }>) => {
    const {user}:any = useKindeBrowserClient();
    const convex = useConvex();
    const router = useRouter();
    useEffect(() => {
        user&&checkTeam();
    }, [user]);

    const checkTeam = async() => {
        const result = await convex.query(api.teams.getTeams, {email: user?.email});
        if(!result.length){
            router.push("/teams/create");
        }
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default DashboardLayout
