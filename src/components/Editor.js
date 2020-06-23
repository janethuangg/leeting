import React from 'react';
import '../css/Editor.css';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';

function keyBindingFunction(event) {
    if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
        return 'strikethrough';
    }

    if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '7') {
        return 'ordered-list';
    }

    if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '8') {
        return 'unordered-list';
    }

    if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '9') {
        return 'blockquote';
    }

    return getDefaultKeyBinding(event);
}

class MyEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty()
        };

        this.onChange = this.onChange.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    }

    onChange (editorState) {
        this.props.handleChange({editorState})
        this.setState({editorState});
        //console.log(this.state.editorState.getCurrentContent().getPlainText('/u0001'));
    }

    handleKeyCommand(command) {
        // inline formatting key commands handles bold, italic, code, underline
        var editorState = RichUtils.handleKeyCommand(this.state.editorState, command);

        if (!editorState && command === 'strikethrough') {
            editorState = RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH');
        }

        if (!editorState && command === 'blockquote') {
            editorState = RichUtils.toggleBlockType(this.state.editorState, 'blockquote');
        }

        if (!editorState && command === 'ordered-list') {
            editorState = RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item');
        }

        if (!editorState && command === 'unordered-list') {
            editorState = RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item');
        }

        if (editorState) {
            this.setState({editorState});
            return 'handled';
        }

        return 'not-handled';
    }

    toggleInlineStyle (event) {
        event.preventDefault();

        let style = event.currentTarget.getAttribute('data-style');
        this.setState({
            editorState: RichUtils.toggleInlineStyle(this.state.editorState, style)
        });
    }

    renderInlineStyleButton(value, style) {
        return (
            <input
            type="button"
            className='fontStyle'
            key={style}
            value={value}
            data-style={style}
            onMouseDown={this.toggleInlineStyle}
            />
        );
    }

    render() {
        const inlineStyleButtons = [
            {
                value: 'Bold',
                style: 'BOLD'
            },

            {
                value: 'Italic',
                style: 'ITALIC'
            },

            {
                value: 'Underline',
                style: 'UNDERLINE'
            },
        ];

        return (
            <div className="my-little-app">
            <div className="inline-style-options">
            {inlineStyleButtons.map((button) => {
                return this.renderInlineStyleButton(button.value, button.style);
            })}
            </div>

            <div className="draft-editor-wrapper">
            <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={keyBindingFunction}
            />
            </div>
            </div>
        );
    }
}

export default MyEditor;
