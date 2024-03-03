'use client'
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { fetchUserById } from "../redux/userSlice";
import { useEffect } from "react";

export default function User({ userId }: { userId: string }) {
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    console.log(user);

    useEffect(() => {
        dispatch(fetchUserById(userId))
    }, [])


    return (
        <div >
            <h1>User</h1>
            {
                user.loading === "pending" || user.loading === "idle" ?
                    "Loading..." : user.loading === "succeeded" ?
                        <p>{user.name}</p> : <p>Error</p>
            }


        </div>
    );
}
