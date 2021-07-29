import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helper';

const SidebarItem = ({ _index, _note, classes, selectedNoteIndex }) => {

    const selectNote = (n, i) => selectNote(n, i)
    const deleteNote = (note) => {
        if (window.confirm(`Are you sure you want to delete: ${note.title}`))
            deleteNote(note)
    }

    return (
        <div key={_index}>
            <ListItem
                className={classes.listItem}
                selected={selectedNoteIndex === _index}
                alignItems='flex-start'>
                <div
                    className={classes.textSection}
                    onClick={() => selectedNoteIndex(_note, _index)}>
                    <ListItemText
                        primary={_note.title}
                        secondary={removeHTMLTags(_note.body.substring(0, 30)) + '...'}></ListItemText>
                </div>
                <DeleteIcon onClick={() => deleteNote(_note)}
                    className={classes.deleteIcon} />

            </ListItem>
        </div>
    )
}

export default withStyles(styles)(SidebarItem)
