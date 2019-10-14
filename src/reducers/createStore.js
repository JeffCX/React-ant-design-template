import {combineReducers, createStore} from "redux"
import {ProductsReducer} from "./ProductReducers"
import {UserReducer} from "./UserReducers"

const reducer = combineReducers({
    products: ProductsReducer,
    user: UserReducer
})

export default () => {
    return createStore(reducer, 
        {
            products: [{name: "iphonoe"}],
            user: "Michael"
        }
        , window.devToolsExtension && window.devToolsExtension()
    )
}
