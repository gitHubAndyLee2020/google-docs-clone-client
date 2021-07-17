import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

import * as api from '../api'

export const getDocs = () => async (dispatch) => {
    try {
        const { data }  = await api.fetchDocs()

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createDoc = (doc) => async (dispatch) => {
    try {
        const { data }  = await api.createDoc(doc)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateDoc = (id, doc) => async (dispatch) => {
    try {
        const { data }  = await api.updateDoc(id, doc)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteDoc = (id) => async (dispatch) => {
    try {
        await api.deleteDoc(id)

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error.message)
    }
}