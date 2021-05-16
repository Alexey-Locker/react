import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { itemDelete, itemUpdate } from '../../store/actions/actions';

const useStyles = makeStyles(theme => ({
    closeIcon: {
        cursor: "pointer"
    },
    done: {
        backgroundColor: theme.palette.success.main,
    }
}))


export default function Item({ item, dispatch }) {
    const classes = useStyles();
    function deleteItem() {
        dispatch(itemDelete(item.id))
    }
    function toogleIsDone() {
        dispatch(itemUpdate(item))
    }
    return (
        <>
            <ListItem className={ (item.isDone) ? classes.done : null } onClick={ toogleIsDone }>
                <ListItemText className={ classes.item }>{ item.title }</ListItemText>
                <ListItemIcon>
                    <CloseIcon className={ classes.closeIcon } onClick={ () => deleteItem() } />
                </ListItemIcon>
            </ListItem>
        </>
    )
}
