import React, { Component } from 'react';
import ReactQuill from "quill"
import 'quill/dist/quill.snow.css'

export default class ReactQuillWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }

        this.handleChange = this.handleChange.bind(this)

        this.modules = {
            toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean']
            ],
        }

        this.formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ]
    }

    handleChange(value) {
        this.setState({ text: value });
    }

    render() {
        return
        <div>
            <ReactQuill value= { this.state.text }
        module = { this.modules }
        formats = { this.formats }
        onchange = { this.handleChange }
            />
            </div>

    }
}

