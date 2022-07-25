//action type
export const INC_COUNT= "INC_COUNT";
export const DEC_COUNT= "DEC_COUNT";
export const RES_COUNT= "RES_COUNT";

//action creator
export const incrementCount=(data)=>({
type:INC_COUNT,
payload:data
})
export const decrementCount=(data)=>({
    type:DEC_COUNT,
    payload:data
 })
 export const resetCount=(data)=>({
    type:RES_COUNT,
    payload:data
 })