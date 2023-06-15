const INITIAL = {
    cardData: []
};

export const addtocartReducer = (state = INITIAL, action) => {

    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                cardData: [...state.cardData, action.payload]

            }
        default:
            return state
    }

}