import { Provider } from 'react-redux';
import { isAction, legacy_createStore } from 'redux';
import { Left1 } from './Left1';
import { Right1 } from './Right1';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// function reducer(curState:any, action:any){
//     // init으로 대체
// //   if(curState === undefined){
// //     return{
// //       num : 1
// //     }
// //   }
// //   const newState = {... curState}

//   if(action.type === 'UP'){
//     // newState.num ++;
//     // newState.num += action.step; // Right3에 step 추가
//     return {...curState, num: curState.num + action.step};
//   }else if(action.type === 'DOWN'){
//     // newState.num --;
//     // newState.num -= action.step;
//     return {...curState, num: curState.num - action.step};
//   }
// //   return newState;
//     return curState;
// }

// const init = {
//     num : 1
// }

// const store = legacy_createStore(reducer, init);

const numSlice = createSlice({
    name: 'numSlice',
    initialState : {
        num : 1
    },
    reducers:{
        up : (state,action:any)=>{
            state.num+=action.step;
        },
        down : (state,action:any)=>{
            state.num-=action.step;
        }
    }
});

const store = configureStore({
    reducer:{
        counter:numSlice.reducer
    }
})
export const Grid2 = () => {
    return(
        <div id="container">
            <h1>Grid</h1>
            <div id="grid">
                <Provider store={store}>
                <Left1></Left1>
                <Right1></Right1>
                </Provider>
            </div>
        </div>
    )
}