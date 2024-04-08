"use client";
import React, { useEffect } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const Dashboard = () => {

  const {user}:any = useKindeBrowserClient();

  const getUser = useQuery(api.user.getUser, {email: user?.email})

  const createUser = useMutation(api.user.createUser)
  useEffect(() => {
    if(user) {
      if(getUser === undefined){
        createUser({email: user.email, name: user.given_name, image: user.picture}).then((res) => {
          console.log(res)
        })
      }
    }
  }, [user])

  return (
    <div>
      
      Hello
    </div>
  )
}

export default Dashboard
