import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../sidebaritem/sidebaritem';

const Sidebar = ({ selectedNoteIndex, notes, classes }) => {

    const [sidebar, setSidebar] = useState({
        addingNote: false,
        title: null
    })

    const newNoteBtnClick = () => {
        setSidebar({
            title: null,
            addingNote: !(sidebar.addingNote)
        })
    }

    const updateTitle = (txt) => {
        setSidebar({ title: txt })
    }

    const newNote = () => {
        console.log(sidebar)
    }

    const selectNote = (n, i) => {
        selectNote(n, i)
    }

    const deleteNote = () => {

    }

    if (notes) {
        return (
            <div className={classes.sidebarContainer}>
                <Button onClick={newNoteBtnClick}
                    className={classes.newNoteBtn}>
                    {sidebar.addingNote ? 'Cancel' : 'New Note'}
                </Button>
                {
                    sidebar.addingNote ?
                        <div>
                            <input type='text'
                                placeholder='Enter new title'
                                className={classes.newNoteInput}
                                onKeyUp={(e) => updateTitle(e.target.value)}
                            />
                            <Button className={classes.newNoteSubmitBtn}
                                onClick={newNote}>
                                Submit
                            </Button>
                        </div> :
                        null
                }
                <List>
                    {
                        notes.map((_note, _index) => {
                            return (
                                <div key={_index}>
                                    <SidebarItem _note={_note}
                                        _index={_index}
                                        selectedNoteIndex={selectedNoteIndex}
                                        selectNote={selectNote}
                                        deleteNote={deleteNote} />
                                    <Divider></Divider>
                                </div>
                            )
                        })
                    }
                </List>
            </div>
        )
    } else {
        return <div></div>
    }

}

export default withStyles(styles)(Sidebar)
