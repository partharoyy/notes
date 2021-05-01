import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helper';

const Editor = ({ classes }) => {

    const [text, setText] = useState({
        text: '',
        title: '',
        id: ''
    })

    return (
        <div className='classes.editorContainer'>
            <ReactQuill />
        </div>
    )
}

export default withStyles(styles)(Editor)
