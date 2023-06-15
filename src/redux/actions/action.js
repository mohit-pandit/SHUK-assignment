export const AddItem = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const DeleteItem = (id) => {
    return {
        type: "DEL_ITEM",
        payload: id
    }
}


export const RemoveItem = (iteam) => {
    return {
        type: "RMV_ONE_ITEM",
        payload: iteam
    }
}