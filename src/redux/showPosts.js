import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let  Headers = {
  "Accept": "application/json",
  "Authorization": "Bearer 80200|wZX4yyeQKrlvz6gWlDAR7ty24LwTDgt8aDELGdzg" ,
};

export const fetchPosts =  createAsyncThunk("posts/fetchPosts",async ()=>{
    let res = await fetch("https://tarmeezacademy.com/api/v1/posts?limit=15")
    let data = res.json()
    return data
})

export const registerUser = createAsyncThunk(
  "posts/registerUser",
  async (formData) => {
    try {
        console.log(formData);
        const response = await axios.post("https://tarmeezacademy.com/api/v1/register", formData,{Headers} );
        let datas = response.data
        return datas
    } catch (error) {
      throw console.log(error);
    }
  }
);
// https://jsonplaceholder.typicode.com/posts
// https://tarmeezacademy.com/api/v1/register
export const showPosts = createSlice({
  name:"posts" ,
  initialState:{
    users:[],
        regist:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.fulfilled , (state, action)=>{
            state.users = action.payload.data
        })   
        builder.addCase(registerUser.fulfilled, (state, action) => {
          state.regist = action.payload.datas
      })
    }
    
  })
  export default showPosts.reducer
  // axios.post("https://tarmeezacademy.com/api/v1/register", formData );
  // axios.defaults.headers.common['X-CSRF-TOKEN'] = 'قيمة_الرمز_المميز';
  // https:tarmeezacademy.com/api/v1/register

  // إنشاء شريحة لحالة المستخدم
  // export const userSlice = createSlice({
    //   name: "user",
//   initialState: {
//     loading: false,
//     user: null,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });



// export const {} = showPosts.actions

// export const registerUser =  createAsyncThunk("posts/registerUser", async (userId, thunkAPI) => {
//     const response = await axios.post("https://tarmeezacademy.com/api/v1/register",body);
//     let x =  response.data
//     return x
//   })