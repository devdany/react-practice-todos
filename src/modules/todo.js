import {Map, List} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
    Map({
        id: 0,
        content: '공부',
        isDone: true
    }),
    Map({
        id: 1,
        content: '공부2',
        isDone: false
    })
])

export default handleActions({

    [INSERT]: (state, action) => {
        const {id, content, isDone} = action.payload;

        return state.push(Map({
            id,
            content,
            isDone
        }));
    },
    [TOGGLE]: (state, action) => {
        const {payload: index} = action;

        return state.updateIn([index, 'isDone'], isDone => !isDone);
    },
    [REMOVE]: (state, action) => {
        const {payload: index} = action;
        return state.delete(index);
    }
}, initialState)