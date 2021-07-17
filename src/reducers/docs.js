import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes"

export default (docs = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...docs, action.payload]
        case UPDATE:
            return docs.map(doc => doc._id === action.payload._id ? action.payload : doc)
        case DELETE:
            return docs.filter(doc => doc._id !== action.payload)
        default:
            return docs 
    }
}