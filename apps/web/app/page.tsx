"use client";
import { Button } from "@workspace/ui/components/button"
import {add} from "@workspace/math/add";
import { Input } from "@workspace/ui/components/input";
import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
export default function Page() {
  const users=useQuery(api.users.getMany);
  const add=useMutation(api.users.add);
  return (
    <div className="flex items-center justify-center min-h-svh bg-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World  </h1>
        
        <div className="max-w-sm w-full mx-auto ">{JSON.stringify(users)}</div>
       <Button onClick={()=>add()}>add users</Button>
        <p></p>
      </div>
    </div>
  )
}
