import { combineReducers, Reducer } from 'redux'
import { combineEpics, Epic } from 'redux-observable'
import { State, ReduxAction } from '../../common/types'

import { filmActions, filmReducer, filmEpics } from './films'
import { userActions, userReducer, userEpics } from './user'

export const actions = {
  ...filmActions,
  ...userActions
}

export const rootReducer: Reducer<State, ReduxAction> = combineReducers({
  films: filmReducer,
  user: userReducer
})

export const rootEpic: Epic<ReduxAction> = combineEpics(
  ...filmEpics,
  ...userEpics
)
