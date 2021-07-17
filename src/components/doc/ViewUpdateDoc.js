import React,{useState} from 'react'

import { useDispatch } from 'react-redux'

import { updateDoc } from '../../actions/docs'

import { Link } from 'react-router-dom'

import NavStyle from '../nav/NavStyle'
import { BLACK, WHITE, DARK } from '../../constants/colors'

import AutoHeightTextarea from './textarea/AutoHeightTextarea'

export default function ViewUpdateDoc({ doc }) {
    const dispatch = useDispatch()

    const [title, setTitle] = useState(doc.title)
    const [content,setContent] = useState(doc.content)
    const [darkTheme, setDarkTheme] = useState(doc.darkTheme)
    const [color, setColor] = useState(doc.color)
    const [fontSize, setFontSize] = useState(doc.fontSize)
    const [fontFamily, setFontFamily] = useState(doc.fontFamily)
    const [bold, setBold] = useState(doc.bold)
    const [italics, setItalics] = useState(doc.italics)
    const [allowUpdate, setAllowUpdate] = useState(doc.allowUpdate)

    const documentize = (title,content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate) => {
        return {title, content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate}
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateDoc(doc._id, documentize(title, content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate)))
    }

    const handleDenyingAccess = () => {
        dispatch(updateDoc(doc._id, documentize(title, content, darkTheme, color, fontSize, fontFamily, bold, italics, !allowUpdate)))
        setAllowUpdate(!allowUpdate)
    }

    const documentStyling = {
        background: darkTheme ? DARK : WHITE,
        color: darkTheme ? (color === BLACK ? WHITE : color) : (color === WHITE ? BLACK : color),
        fontSize: fontSize,
        fontFamily: fontFamily,
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italics ? 'italic' : 'normal',
    }

    return (
        <div>
            <Link to='/'>
                <button className='logo'>
                    <div className='square'></div>
                    <div className='line line-one'></div>
                    <div className='line line-two'></div>
                    <div className='line line-three'></div>
                </button>
            </Link>
            {allowUpdate 
                ? <NavStyle created={true} darkTheme={darkTheme} setDarkTheme={setDarkTheme} color={color} setColor={setColor} fontSize={fontSize} setFontSize={setFontSize} fontFamily={fontFamily} setFontFamily={setFontFamily} bold={bold} setBold={setBold} italics={italics} setItalics={setItalics} allowUpdate={allowUpdate} setAllowUpdate={setAllowUpdate} />
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className='container-text-fields'>
                    {allowUpdate 
                        ? <AutoHeightTextarea documentStyling={documentStyling} title={title} setTitle={setTitle} content={content} setContent={setContent} isTitle={true}/>
                        : <AutoHeightTextarea disabled documentStyling={documentStyling} title={title} setTitle={setTitle} content={content} setContent={setContent} isTitle={true}/>
                    }
                    {allowUpdate 
                        ? <AutoHeightTextarea documentStyling={documentStyling} title={title} setTitle={setTitle} content={content} setContent={setContent} isTitle={false}/>
                        : <AutoHeightTextarea disabled documentStyling={documentStyling} title={title} setTitle={setTitle} content={content} setContent={setContent} isTitle={false}/>
                    }
                </div>
                {allowUpdate ? <button className='btn-update' type='submit'>Update</button> : null}
            </form>
            {allowUpdate ? <button className='btn-alert' onClick={() => handleDenyingAccess()}>Dont't allow access (warning: you cannot undo the change)</button> : null}
        </div>
    )
}
