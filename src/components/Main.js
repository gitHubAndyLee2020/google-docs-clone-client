import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import DocButton from './doc/DocButton'

export default function Main() {
    const docs = useSelector(state => state.docs)
    const [searchText, setSearchText] = useState('')
    
    const docStrings = docs.map(doc => doc.title)
    const searchWords = searchText.split(' ').filter(word => word !== '')
    let satisfiedDocs = []

    const filterDocs = () => {
        if (searchWords.length > 0) {
            for (let i=0;i<docStrings.length;i++) {
                for (let j=0;j<searchWords.length;j++) {
                    if (docStrings[i].includes(searchWords[j].toLowerCase())) {
                        satisfiedDocs.push(docs[i])
                        break
                    }
                }
            }
        } else {
            satisfiedDocs = [...docs]
        }
    }
    
    filterDocs()

    return (
        <div>
            <button className='logo'>
                <div className='square'></div>
                <div className='line line-one'></div>
                <div className='line line-two'></div>
                <div className='line line-three'></div>
            </button>
            <div className='container-create-doc'>
                <Link to='/create_doc'>
                    <button className='btn-create-doc'>+</button>
                </Link>
            </div>
            <div className='container-search-bar'>
                <h1 className='search-bar-info'><span className='letter-blue'>S</span><span className='letter-red'>e</span><span className='letter-yellow'>a</span><span className='letter-blue'>r</span><span className='letter-green'>c</span><span className='letter-red'>h</span></h1>
                <input className='search-bar' type='text' value={searchText} onChange={e => setSearchText(e.target.value)} />
            </div>
            <div className='container-docs'>
                {satisfiedDocs.map(doc => {
                    return <DocButton doc={doc} />
                })}
            </div>
        </div>
    )
}
