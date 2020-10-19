import React, { useState } from 'react';
import MaterialTable from 'material-table'
import moment from 'moment'

function TaskTable(props) {
//props = /project/:id/tasks
    // const [tasks, setTasks] = useState(props.tasks) //we might need to change this hook to allow the props.task to render correctly
    const columns=[
        {
            title:'Activity ID',field: 'id', editable: 'never', value: 'id', width: '5%'
        },
        {
            title:'Project ID',field: 'project_id', editable: 'onAdd', value: 'project_id',  width: '5%'
        },
        {
            title:'Start Time', field: 'start',
            type:"datetime"
        },
        {
            title:'End Time', field:'end',
            type:"datetime"
        },
        {
            title:'Details', field:'note'
        }
    ]

    const taskMapper =() => {
    // return tasks.map(task=> [{"id": task.id, "project_id": task.project_id, "note": task.note, "start": moment(task.start).format("MMMM Do YYYY"), "end": moment(task.end).format("MMMM Do YYYY")}]).flat()
    return props.tasks.map(task=> [{"id": task.id, "project_id": task.project_id, "note": task.note, "start": task.start, "end": task.end}]).flat()

    }
    // props.tasks.map(task=> [{"id": task.id, "project_id": task.project_id, "note": task.note, "start": moment(task.start).format("MMMM Do YYYY"), "end": moment(task.end).format("MMMM Do YYYY")}]).flat()
    
    const updateTaskHandler = (newTask) =>{
        props.updateTaskHandler(newTask)
    }
    const deleteTaskHandler = (event, rowData) =>{
        event.persist()
        props.deleteTaskHandler(rowData)
    }

    const submitTaskHandler = (newData) => {
        const newObj = {id: null, project_id: newData.project_id, start: newData.start, end: newData.end, note: newData.note}
        console.log(newObj)
        props.submitTaskHandler(newObj)
    }

 

    // debugger
    return (
        <div>
            <MaterialTable title="Project Activity"
            data={taskMapper()}
            columns={columns}
            options={{
                alwaysShowAllBtns: true,
                search:false,
                // paging:false,
                filtering: true,
                exportButton: true
            }}
            editable={{
                    isEditHidden: columnData => columnData.name === 'id',
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                          
                            updateTaskHandler(newData)
                            resolve();
                        }, 1000);
                    }),
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        submitTaskHandler(newData)
                        resolve();
                        }, 1000);
            }),

                }}

            actions={[
                {
                  icon: 'delete',
                  tooltip: 'Delete Task',
                  onClick: (event, rowData) => {deleteTaskHandler(event, rowData)}
                }
                // {
                //     icon: 'edit',
                //     tooltip: 'Update Task',
                //     onClick: (event, rowData) => {updateTaskHandler(event, rowData)}
                // }

        ]}

            />
        </div>
    )
}

export default TaskTable
// https://material-table.com/#/docs/features/actions
//https://stackoverflow.com/questions/62231091/how-can-i-override-the-actions-buttons-of-material-table-of-react
