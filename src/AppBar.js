import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
    root: {
        // flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    flex: {
        flex: 1,
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: red[800],
        },
    },
});

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        待办流程
                    </Typography>
                    <Icon className={classes.icon}>
                        maximize
                    </Icon>
                    <Icon className={classes.icon}>
                        minimize
                    </Icon>
                    <Icon className={classes.icon}>
                        refresh
                    </Icon>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);