/**
 * Component for practice - useReducer React Hook
 */

import React, { useReducer } from  'react';

const Reducer = () => {

    // useReducer 1st argument
    const reducer = (state, action) => {
        switch ( action.type ) {
            case "increment":
                return {
                    ...state,
                    count: state.count + action.payload,
                    clicks: state.clicks++
                }

            case "decrement":
                return {
                    ...state,
                    count: state.count - action.payload,
                    clicks: state.clicks++
                }

            case "change_name":
                return {
                    ...state,
                    user: action.payload
                }

            case "reset":
                return init(action.payload)

            default:
                return state
        }
    }

    // useReducer 2nd argument
    const initialState = {
        user: 'Steve',
        count: 0,
        clicks: 0
    }

    // useReducer 3rd argument, for Lazy initialization
    const init = initialState => {
        return { ...initialState, count: initialState.count + 21};
    }

    const [ state, dispatch ] = useReducer(reducer, initialState, init);

    const changeNameHandler = () => {
        const newName = ['Tom', 'Rob', 'Steve', 'Simon'];
        return {
            type: "change_name",
            payload: newName[Math.floor(Math.random() * newName.length)]
        }
    }

    return(
        <div className="container">
            <div>
                Current user: {state.user}
            </div>
            <div>
                Current clicks: {state.clicks}
            </div>
            <div>
                Current count: {state.count}
            </div>
            <button onClick={()=> dispatch({type: "increment", payload: 1})}>Increment</button>
            <button onClick={()=> dispatch({type: "decrement", payload: 1})}>Decrement</button>
            <button onClick={()=> dispatch(changeNameHandler())}>Change name</button>
            <button onClick={()=> dispatch( { type: "reset", payload: initialState} )}>Reset</button>

        </div>
    )
}

export default Reducer;