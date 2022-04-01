const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM ='BUY_ICECREAM'
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        // info: 'First redux action'
    }
}
//(previousState, action) => newState

// const initialState ={
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

        


const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}
// holds application state
// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ... state, // make a cope with spread operator
//             numOfCakes: state.numOfCakes -1

//         }
//         case BUY_ICECREAM: return {
//             ... state, // make a cope with spread operator
//             numOfIceCreams: state.numOfIceCreams -1

//         }
//         default: return state
//     }
        
// }

const cakereducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ... state, // make a cope with spread operator
            numOfCakes: state.numOfCakes -1

        }
        
        default: return state
    }
        
}
const iceCreamreducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ... state, // make a cope with spread operator
            numOfIceCreams: state.numOfIceCreams -1

        }
        default: return state
    }
        
}

const rootReducer = combineReducers({
    cake: cakereducer,
    iceCream: iceCreamreducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
//Allows access to state via getState()
console.log('Initial state', store.getState())
//Registers listeners via subscribe
const unsubscribe = store.subscribe(() => {})
//Allows state to be updated via dispatch 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()