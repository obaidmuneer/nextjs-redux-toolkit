'use client'
import { decrement, increment } from "@/app/redux/counterSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";

export default function Counter() {
    const counter = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <div >
            <h1>Counter</h1>
            {counter}
            <br />
            <button
                onClick={() => {
                    dispatch(increment())
                }}
            >
                Increment
            </button><br />
            <button
                onClick={() => {
                    dispatch(decrement())
                }}
            >
                Decrement
            </button>
        </div>
    );
}
