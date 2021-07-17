import React, { Component } from 'react'
import autosize from 'autosize'

export default class AutoHeightTextarea extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
       this.textarea.focus()
       autosize(this.textarea)
    }
    
    render() {
        return (
            <div>
                <textarea
                    className={this.props.isTitle ? 'title-field' : 'content-field'}
                    style={this.props.documentStyling} 
                    ref={c=>this.textarea=c}
                    rows={1} defaultValue=""
                    value={this.props.isTitle ? this.props.title : this.props.content}
                    onChange={this.props.isTitle ? e => this.props.setTitle(e.target.value) : e => this.props.setContent(e.target.value)}
                />
            </div>
        )
    }
}