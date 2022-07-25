import { INC_COUNT, DEC_COUNT, RES_COUNT } from "./action";



export const reducer =(store, action)=>{
    switch(action.type){
        case INC_COUNT:
            return {
                    ...store,
                    count: store.count + action.payload
        }
        case DEC_COUNT:
            return {
                ...store,
                count: store.count - action.payload
        }
        case RES_COUNT:
            return {
                ...store,
                count: 0
        }
      default:
           return store;
    }
}