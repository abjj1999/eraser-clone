"use client";
import React, { useEffect } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const Dashboard = () => {
  const convex = useConvex();
  const {user}:any = useKindeBrowserClient();

  // const getUser = useQuery(api.user.getUser, {email: user?.email})

  const createUser = useMutation(api.user.createUser)
  useEffect(() => {
    if(user) {
      checkUser()
    }
  }, [user])

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, {email: user?.email});
    if(!result.length){
      createUser({email: user.email, name: user.given_name, image: user.picture}).then((res) => {
        console.log(res)
      })
    }
  }

  return (
    <div>
      
      Hello
    </div>
  )
}

export default Dashboard
