import { ReactiveDict } from 'meteor/reactive-dict'
import { ReactiveVar } from 'meteor/reactive-var'

export const AppUtil = {
    app: new ReactiveVar(null),

    temp: new ReactiveDict(undefined, {
        count: 0
    }),
    refreshTokens: new ReactiveDict()
}