import React from 'react';
import {Bar} from 'react-chartjs-2';
import moment from 'moment'
import '../CSS/MyDash.css'


const day1 = moment(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).format("MMM Do YYYY")
const day2 = moment(new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)).format("MMM Do YYYY") 
const day3 = moment(new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)).format("MMM Do YYYY") 
const day4 = moment(new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)).format("MMM Do YYYY") 
const day5 = moment(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)).format("MMM Do YYYY") 
const day6 = moment(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)).format("MMM Do YYYY") 
const day7 = moment(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)).format("MMM Do YYYY") 
const test = moment("2020-10-13T18:00:00").format("MMM Do YYYY")

export default class MyDash extends React.Component {

  dayHours = (day) => {
    const hoursForDay = (this.props.userObj != null ? this.props.userObj.tasks?.filter(task => moment(task.start).format("MMM Do YYYY") === day).map(task => ((new Date(task.end)) -( new Date(task.start))) / 36e5).reduce((a, b) => a + b, 0) : 1)
    return hoursForDay
  }
  render() {
    
    console.log( "test", (this.props.userObj.tasks?.filter(task => moment(task.start).format("MMM Do YYYY") === day7).map(task => ((new Date(task.end)) -( new Date(task.start))) / 36e5).reduce((a, b) => a + b, 0)))
    console.log(this.props.userObj.tasks)
    console.log(this.dayHours(day1))
    console.log(this.dayHours(day2))
    console.log(this.dayHours(day3))
    console.log(this.dayHours(day4))
    console.log(this.dayHours(day5))
    console.log(this.dayHours(day6))
    console.log(this.dayHours(day7))

    
    // debugger
    return (
      <div className="maindisplay-container">
          <div className="first-item">
            <h2>Health</h2>
            <table className="health-table" width='100%'>
              {/* <tr>
                <th>Company</th>
                <th>Contact</th>
              </tr> */}
              <tbody>
                <tr>
                  <td width='20%'>Time:</td>
                  <td>90% ahead of schedule for all projects</td>
                </tr>
                <tr>
                  <td width='20%'>Tasks:</td>
                  <td>5 tasks to be completed</td>
                </tr>
                <tr>
                  <td width='20%'>Progress:</td>
                  <td>86% of tasks completed</td>
                </tr>
                <tr>
                  <td width='20%'>Payments:</td>
                  <td>90% collection rate from client</td>
                </tr>
              </tbody>
          </table>

          </div>
          <div className="third-item">
          </div>
          <div className="second-item">
          <Bar
            data={{
              labels: [day1, day2, day3, day4, day5, day6, day7],
              datasets: [
                {
                  label: 'Hours',
                  backgroundColor: '#3BBA9C',
                  // backgroundColor: '#34f5c5',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: [this.dayHours(day1), this.dayHours(day2), this.dayHours(day3), this.dayHours(day4), this.dayHours(day5), this.dayHours(day6), this.dayHours(day7)]
                }
              ]
            }}
            options={{
              title:{
                display:true,
                text: 'Weekly Productivity',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },
              maintainAspectRatio: false
            }}
          />
          </div>

          <div className="fourth-item">
            <p>This is a paragraph</p>
          </div>
          <div className="fifth-item">
          </div>
          <div className="sixth-item">
            <p>This is a paragraph</p>
          </div>
          
      </div>
    );
  }
}

// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js