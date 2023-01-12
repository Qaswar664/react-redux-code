import { ADD_TO_CARD,REMOVE_TO_CARD } from '../Constant'


const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CARD:
            console.warn("reducer",action)

            return [
                ...state,
                {cardData: action.data}
            ]
            case REMOVE_TO_CARD:
                console.warn("reducer",action)
                state.pop();
                return [
                    ...state,
                ]
        default:
            return state
    }


}