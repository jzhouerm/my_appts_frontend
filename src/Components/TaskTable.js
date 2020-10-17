import React, { useState } from 'react';
import MaterialTable from 'material-table'
import { DeleteOutlineIcon } from '@material-ui/icons'

import moment from 'moment'

function TaskTable(props) {

    const [tasks, setTasks] = useState(props.tasks.map(task=> [{"id": task.id, "project_id": task.project_id, "note": task.note, "start": moment(task.start).format("MMMM Do YYYY"), "end": moment(task.end).format("MMMM Do YYYY")}]).flat())
    // const data =props.tasks.map(task=> [{"note": task.note, "start": moment(task.start).format("MMMM Do YYYY"), "end": moment(task.end).format("MMMM Do YYYY")}]).flat()
    const columns=[
        {
            title:'ID',field: 'id'
        },
        {
            title:'Project ID',field: 'project_id'
        },
        {
            title:'Start Time',field: 'start'
        },
        {
            title:'End Time',field:'end'
        },
        {
            title:'Details',field:'note'
        }
    ]
    
    // debugger
    return (
        <div>
            <MaterialTable title="Project Activity"
            data={tasks}
            columns={columns}
            options={{
                alwaysShowAllBtns: true,
                search:false,
                // paging:false,
                filtering: true,
                exportButton: true
            }}
            
            editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setTasks((prevState) => {
                        const data = [...prevState]
                        data.push(newData);
                        return { ...prevState, data }
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        //   debugger
                        setTasks((prevState) => {
                          const data = [...prevState]
                        //   let newArr = oldData.map(obj => obj.id == newData.id ? newData : obj) 
                        //   data.indexOf(oldData) = newData
                          console.log(newData)
                          return { ...prevState, data }
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setTasks((prevState) => {
                        const data = [...prevState];
                        data.splice(data.indexOf(oldData), 1)
                        return { ...prevState, data }
                      });
                    }, 600);
                  }),
              }}


            />
        </div>
    )
}

export default TaskTable
// https://stackoverflow.com/questions/61867970/react-js-add-action-icons-edit-delete-in-table-using-material-ui
