import React,{ useState } from 'react'

export default function NavStyle(props) {
    const [optionSelected, setOptionSelected] = useState(18)

    let boldButtonClasses = 'btn-bold'
    let italicsButtonClasses = 'btn-italics'
    let darkThemeClasses = 'btn-darkTheme'
    let allowUpdateClasses = 'allow-update-info'

    if (props.bold) boldButtonClasses += ' btn-selected'
    if (props.italics) italicsButtonClasses += ' btn-selected'
    if (props.darkTheme) darkThemeClasses += ' darkTheme-selected'
    if (props.allowUpdate) allowUpdateClasses += ' allow-update-selected'
    
    return (
        <div className='container-nav'>
            <button className={darkThemeClasses} onClick={e => props.setDarkTheme(!props.darkTheme)}>Dark Theme</button>
            <select onClick={e => props.setFontFamily(e.target.value)}>
                <option hidden>{props.fontFamily}</option>
                <option style={{fontFamily: 'sans-serif'}} value='sans-serif'>sans-serif</option>
                <option style={{fontFamily: 'serif'}} value='serif'>serif</option>
                <option style={{fontFamily: 'monospace'}} value='monospace'>monospace</option>
                <option style={{fontFamily: 'cursive'}} value='cursive'>cursive</option>
                <option style={{fontFamily: 'fantasy'}} value='fantasy'>fantasy</option>
            </select>
            <select className='select-font-size' onClick={e => props.setFontSize(parseInt(e.target.value))}>
               <option hidden>{props.fontSize}</option>
               <option>8</option> 
               <option>9</option> 
               <option>10</option> 
               <option>11</option> 
               <option>12</option> 
               <option>14</option> 
               <option>18</option> 
               <option>24</option> 
               <option>30</option> 
               <option>36</option> 
               <option>48</option> 
               <option>60</option> 
               <option>72</option> 
               <option>90</option>
            </select>
            <button className={boldButtonClasses} style={{fontWeight: 'bold'}} onClick={e => props.setBold(!props.bold)}>B</button>
            <button className={italicsButtonClasses} style={{fontStyle: 'italic'}} onClick={e => props.setItalics(!props.italics)}>I</button>
            <input type='color' value={props.color} onChange={e => props.setColor(e.target.value)}/>
            {props.created ? null : <button className={allowUpdateClasses} onClick={() => props.setAllowUpdate(!props.allowUpdate)}>Allow Update</button>}
        </div>
    )
}
