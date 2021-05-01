import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helper';

const SidebarItem = () => {
    return (
        <div>
            I am sidebaritem
        </div>
    )
}

export default withStyles(styles)(SidebarItem)
