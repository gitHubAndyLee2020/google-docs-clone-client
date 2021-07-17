import axios from 'axios'

const url = 'https://google-docs-clone-techandy42.herokuapp.com/docs'

export const fetchDocs = () => axios.get(url)
export const createDoc = (doc) => axios.post(url, doc)
export const updateDoc = (id, updatedDoc) => axios.patch(`${url}/${id}`, updatedDoc)
export const deleteDoc = (id) => axios.delete(`${url}/${id}`)