import React,{ useState } from 'react'

import { useDispatch } from 'react-redux'
import { createDoc } from '../../actions/docs'

import { Link } from 'react-router-dom'

import NavStyle from '../nav/NavStyle'
import { BLACK, WHITE, DARK } from '../../constants/colors'

import AutoHeightTextarea from './textarea/AutoHeightTextarea'

export default function CreateDoc() {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [darkTheme, setDarkTheme] = useState(false)
    const [color, setColor] = useState(BLACK)
    const [fontSize, setFontSize] = useState(12)
    const [fontFamily, setFontFamily] = useState('sans-serif')
    const [bold, setBold] = useState(false)
    const [italics, setItalics] = useState(false)
    const [allowUpdate, setAllowUpdate] = useState(true)

    const documentize = (title, content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate) => {
        return {title, content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate}
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(createDoc(documentize(title, content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate)))
        setTitle('')
        setContent('')
        setDarkTheme(false)
        setColor(BLACK)
        setFontSize(12)
        setFontFamily('sans-serif')
        setBold(false)
        setItalics(false)
        setAllowUpdate(true)
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
            <NavStyle created={false} darkTheme={darkTheme} setDarkTheme={setDarkTheme} color={color} setColor={setColor} fontSize={fontSize} setFontSize={setFontSize} fontFamily={fontFamily} setFontFamily={setFontFamily} bold={bold} setBold={setBold} italics={italics} setItalics={setItalics} allowUpdate={allowUpdate} setAllowUpdate={setAllowUpdate} />
            <form onSubmit={handleSubmit}>
                <div className='container-text-fields'>
                    <AutoHeightTextarea documentStyling={documentStyling} title={title} setTitle={setTitle} content={content} setContent={setContent} isTitle={true}/>
                    <AutoHeightTextarea documentStyling={documentStyling} title={title} setTitle={setTitle} content={content} setContent={setContent} isTitle={false}/>
                </div>
                <button className='btn-submit' type='submit'>Submit</button>
            </form>
        </div>
    )
}
