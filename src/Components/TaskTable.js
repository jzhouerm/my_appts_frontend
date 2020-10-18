import React, { useState } from 'react';
import MaterialTable from 'material-table'
import moment from 'moment'

function TaskTable(props) {
//props = /project/:id/tasks
    const [tasks, setTasks] = useState(props.tasks)
    
    const columns=[
        {
            title:'ID',field: 'id'
        },
        {
            title:'Project ID',field: 'project_id'
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
        // console.log(moment(tasks[0].start).format("MMMM Do YYYY"))
        // debugger
    // return tasks.map(task=> [{"id": task.id, "project_id": task.project_id, "note": task.note, "start": moment(task.start).format("MMMM Do YYYY"), "end": moment(task.end).format("MMMM Do YYYY")}]).flat()
    return tasks.map(task=> [{"id": task.id, "project_id": task.project_id, "note": task.note, "start": task.start, "end": task.end}]).flat()

    }
    // props.tasks.map(task=> [{"id": task.id, "project_id": task.project_id, "note": task.note, "start": moment(task.start).format("MMMM Do YYYY"), "end": moment(task.end).format("MMMM Do YYYY")}]).flat()
    
    const updateTaskHandler = (updatedTasks, newTask) =>{
        // console.log("inside updateTaskHandler", newTask)
        setTasks(updatedTasks)
        props.updateTaskHandler(newTask)
    }
    const deleteTaskHandler = (event, rowData) =>{
        event.persist()
        console.log("this is the current deletehandler", rowData, tasks)
        const newArr = tasks.filter(task => task.id !== rowData.id)
        setTasks(newArr)
        props.deleteTaskHandler(rowData)
    }

    const submitTaskHandler = (event, newTask) => {
        console.log(newTask)
    }

    console.log("tasks state", tasks)
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
                            const dataUpdate = [...tasks];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            // setTasks([...dataUpdate]);
                            updateTaskHandler(dataUpdate, newData)
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
