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

export default function UpdateProjectModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

//setState for form input 
    const [id] = useState(props.project.id)
    const [client_id] = useState(props.client.id)
    const [name] = useState(props.project.name)
    const [description] = useState(props.project.description)
    const [amount] = useState(props.project.amount)
    const [paid] = useState(props.project.paid)
    const [start] = useState(props.project.start)
    const [end] = useState(props.project.end)
    const [status] = useState(props.project.status)
    const [formState, setFormState] = useState({ name, description, amount, paid, start, end, client_id, status, id })
    // console.log("formState", formState)
    const projectUpdateChangeHandler = (e) => {
        e.persist()
        setFormState({ ...formState,[e.target.name]: e.target.value})
        
    }
    
    const projectPatchHandler = (e) => {
        e.preventDefault()
        e.persist()
        
        props.projectPatchHandler(formState)

    }

    return (
        <div>

            <Button variant="contained" color="primary" onClick={handleOpen}>
                Update Project
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
                        <h2>Update Project:</h2>
                            <h3>Client:</h3>
                            <p name="client_name">{ props.client.last_name + ", " + props.client.first_name}</p>
                            <br/>

                        <form className='update-project-form' onSubmit={projectPatchHandler}>
                            <h3>Project Title:</h3>
                            <p><input width="100px" className="" name="name" placeholder="Project Title" onChange={projectUpdateChangeHandler} type="text" value={formState.name} /></p>
                            <br/>
                            <h3>Description:</h3>
                            <p><textarea rows="5" cols="100" className="" name="description" placeholder="Note/description" onChange={projectUpdateChangeHandler} type="text" value={formState.description}/></p>
                            <h3>Start date and time:</h3>
                            <p><input className="" name="start" placeholder="Start Date" onChange={projectUpdateChangeHandler} type="datetime-local" value={formState.start} /></p>
                            <h3>End date and time:</h3>
                            <p><input className="" name="end" placeholder="End Date" onChange={projectUpdateChangeHandler} type="datetime-local" value={formState.end}/></p>
                            <h3>Fee/Contract Amount:</h3>
                            <p><input className="" name="amount" placeholder="Enter Amount" onChange={projectUpdateChangeHandler} type="number" min="" step="1" max="50000"value={formState.amount}/></p>
                            <br/>
                            <br/>
                            <Button style={{backgroundColor: '#3BBA9C'}} variant="contained" color="primary" type="submit" onClick={handleClose}>Update Project</Button>
                            <br/>
                        </form>
                            <br/>
                            <Button style={{backgroundColor: '#3BBA9C'}} variant="contained" color="primary" onClick={handleClose}>Cancel</Button>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}