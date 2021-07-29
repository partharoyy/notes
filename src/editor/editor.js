import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import debounce, { removeHTMLTags } from '../helper';

const Editor = ({ classes, selectedNote }) => {

    const [editor, setEditor] = useState({
        text: '',
        title: '',
        id: ''
    })

    const update = (val) => {
        setEditor({ text: val })
    }

    const updateBody = debounce(update, 1500)

    useEffect(() => {
        setEditor({
            text: selectedNote.body,
            title: selectedNote.title,
            id: selectedNote.id
        })
    }, [])

    return (
        <div className='classes.editorContainer'>
            <ReactQuill value={editor.text}
                onChange={updateBody} />
        </div>
    )


}

export default withStyles(styles)(Editor)
