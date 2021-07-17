import React from 'react'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteDoc } from '../../actions/docs'

import { TITLELIMITNUMBER } from '../../constants/numberLimits' 

export default function DocButton({ doc }) {
    const dispatch = useDispatch()

    const limitTitle = (title) => {
        if (title.length <= TITLELIMITNUMBER) return title 
        const limitedTitle = title.slice(0, TITLELIMITNUMBER-3) + '...'
        return limitedTitle
    }

    return (
        <div className='container-doc'>
            <Link to={`/${doc._id}`}>
                <button className='btn-doc-title'>{limitTitle(doc.title)}</button>
            </Link>
            <button className='btn-doc-delete' onClick={() => dispatch(deleteDoc(doc._id))}>Delete</button>
        </div>
    )
}
