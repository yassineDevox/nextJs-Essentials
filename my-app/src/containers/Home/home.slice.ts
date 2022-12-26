import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    test: "Hello world 😎 ! "
}

const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {

    }
})

export default helloSlice.reducer 