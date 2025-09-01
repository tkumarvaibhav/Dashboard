import { createAsyncThunk } from "@reduxjs/toolkit";
import { buildUrl } from "../../network/urlBuilder";
import http from "../../network";
import { API_ENDPOINTS_MAP } from "../../screen/Insurance/constants";
import { snakeToCamel } from "../../utils/datautils";
import { updateScore } from "../slices/InsuranceSlice";
export const calculateScore=createAsyncThunk("insurance/calculateScore",async ({reqBody,type}:{reqBody:any,type:string},thunkApi)=>{
    const apiUrl=buildUrl(API_ENDPOINTS_MAP[type as keyof typeof API_ENDPOINTS_MAP]);
    const res=await http.post(apiUrl,reqBody);
    const output = res?.data?.output;
    const camel = snakeToCamel(JSON.parse(output));
    console.log('camle',camel);
    thunkApi.dispatch(updateScore(camel));

    return camel;
})