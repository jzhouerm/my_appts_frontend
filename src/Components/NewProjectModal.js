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

export default function NewProjectModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

//setState for form input 
    const [client_id, setClient_id] = useState()
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [amount, setAmount] = useState()
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [client_name, setClient_name] = useState()
    const [formState, setFormState] = useState({ name, description, amount, start, end, client_id})
    // const [status] = useState(props.project.status)
    // const [formState, setFormState] = useState({ name, description, amount, paid, start, end, client_id, status, id })
    // // console.log("formState", formState)
    // const projectUpdateChangeHandler = (e) => {
    //     e.persist()
    //     setFormState({ ...formState,[e.target.name]: e.target.value})
        
    // }
    
    // const projectPatchHandler = (e) => {
    //     e.preventDefault()
    //     e.persist()
        
    //     props.projectPatchHandler(formState)

    // }


    const projectChangeHandler = (e) => {
        e.persist()
        setFormState({ ...formState,[e.target.name]: e.target.value})
    }

    const projectSubmitHandler = (e) => {
        e.preventDefault()
        props.projectSubmitHandler(formState)
    }

    const dropdownHandler = (e) => {
        e.persist()
        // console.log(e.target)
        setFormState({ ...formState,
            [e.target.options[e.target.selectedIndex].id]: e.target.options[e.target.selectedIndex].dataset.id,     //client_id: "22"
            [e.target.options[e.target.selectedIndex].className]: e.target.value                                    //client_name: "John Smith"
        })
        // debugger
    }

    const clientName = () => {
        // return props.userObj?.clients?.map(client => <option id="client_id" key={client.id} className="client_name" data-id={client.id} value={client.first_name + " " + client.last_name}> {client.first_name + " " + client.last_name}</option>)
        return props.clientObjs.map(client => <option id="client_id" key={client.id} className="client_name" data-id={client.id} value={client.first_name + " " + client.last_name}> {client.first_name + " " + client.last_name}</option>)
    }
    return (
        <div>

            <Button variant="contained" color="primary" onClick={handleOpen}>
                Create Project
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
                        <h2>Create a New Project:</h2>

                        <form onSubmit={projectSubmitHandler}>
                            <h2>Project details:</h2>
                            <br />
                            <h3>Client Name:</h3>
                            <select className="" name="client_name" value={formState.client_name} onChange={dropdownHandler}>
                                <option default>Select</option>
                                {clientName()}
                            </select>
                            <p><input className="" name="name" placeholder="Project Title" onChange={projectChangeHandler} type="text" value={formState.name} /></p>

                            <h3>Start date and time:</h3>
                            <p><input className="" name="start" placeholder="Start Date" onChange={projectChangeHandler} type="datetime-local" value={formState.start} /></p>
                            <h3>End date and time:</h3>
                            <p><input className="" name="end" placeholder="End Date" onChange={projectChangeHandler} type="datetime-local" value={formState.end}/></p>
                            <h3>Fee/Contract Amount:</h3>
                            <p><input className="" name="amount" placeholder="Enter Amount" onChange={projectChangeHandler} type="number" min="" step="1" max="50000"value={formState.amount}/></p>
                            <h3>Notes/description:</h3>
                            <p><textarea rows="5" cols="100" className="" name="description" placeholder="Note/description" onChange={projectChangeHandler} type="text" value={formState.description}/></p>
                            <br/>
                            <br/>
                            <Button variant="contained" color="primary" type="submit" onClick={handleClose}>Create Project</Button>
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