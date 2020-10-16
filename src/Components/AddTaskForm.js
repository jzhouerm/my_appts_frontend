import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function AnimatedModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const project_id = props.project.id
    let start
    let end
    let description
    const [taskFormState, setTaskformState] = useState({ project_id, start, end, description })

    const taskChangeHandler = (e) => {
        console.log("taskChange", e.target.value )
        e.persist()
        setTaskformState({ ...taskFormState,[e.target.name]: e.target.value})
    }

    const taskSubmitHandler = (e) => {
        e.preventDefault()
        e.persist()
        // console.log("taskFormState", taskFormState)
        props.taskSubmitHandler(taskFormState)
    }


    return (
        <div>

            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Add Task
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                    <h2>Add Task:</h2>
                            <h3>Project:</h3>
                            <p>{ props.project.name}</p>
                            <br/>

                        <form onSubmit={taskSubmitHandler}>

                            <h3>Description:</h3>
                            <p><textarea rows="5" cols="100" className="" name="note" placeholder="Note/description" onChange={taskChangeHandler} type="text" value={taskFormState.note}/></p>
                            <h3>Start date and time:</h3>
                            <p><input className="" name="start" placeholder="Start Date" onChange={taskChangeHandler} type="datetime-local" value={taskFormState.start} /></p>
                            <h3>End date and time:</h3>
                            <p><input className="" name="end" placeholder="End Date" onChange={taskChangeHandler} type="datetime-local" value={taskFormState.end}/></p>
                            <br/>
                            <br/>
                            <Button variant="contained" color="primary" type="submit" onClick={handleClose}>Add Task</Button>
                            <br/>
                        </form>
                            <br/>
                            <Button variant="contained" color="primary" onClick={handleClose}>Cancel</Button>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}