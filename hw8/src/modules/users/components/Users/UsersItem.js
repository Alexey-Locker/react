import { Typography, AccordionDetails, makeStyles, Box, withStyles } from '@material-ui/core'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import React from 'react';
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useRouteMatch } from 'react-router';

const useStyles = makeStyles((theme) => {
    return {
        summaryTitle: {
            flexGrow: 1,
            color: theme.palette.text.secondary
        },
        iconControl: {
            color: theme.palette.text.primary
        }

    };

})
const Accordion = withStyles({
    root: {
        border: '0',
        boxShadow: 'none',
        background: "",

        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);
const AccordionSummary = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 10,
        '&$expanded': {
            minHeight: 10,
        },
    },
    content: {
        margin: '5px 0',
        '&$expanded': {
            margin: '5px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

export default function UsersItem({ user, userDelete }) {
    const classes = useStyles();
    const { url } = useRouteMatch();
    function onDelete(e) {
        e.stopPropagation(); userDelete(user.id);
    }
    return (
        <Box marginTop={ 2 } marginX={ 1 }>
            <Accordion square >
                <Box >
                    <AccordionSummary>
                        <Typography className={ classes.summaryTitle }>
                            { user.name }
                        </Typography>
                        <Link to={ `${url}/${user.id}` } className={ classes.iconControl } >
                            <EditIcon />
                        </Link>
                        <DeleteIcon className={ classes.iconControl } onClick={ onDelete } />
                    </AccordionSummary>
                </Box>
                <AccordionDetails>
                    <Typography >
                        Phone: { user.phone } <br />
                        Email: { user.email }
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>)
}
