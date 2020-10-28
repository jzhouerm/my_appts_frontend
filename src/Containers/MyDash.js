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
    const hoursForDay = (this.props.userObj ? this.props.userObj.tasks?.filter(task => moment(task.start).format("MMM Do YYYY") === day).map(task => ((new Date(task.end)) -( new Date(task.start))) / 36e5).reduce((a, b) => a + b, 0) : 1)
    return hoursForDay
  }
//Project completion rate

  compRate = () => {
    const trueProjects = (this.props.userObj?.projects?.filter(obj => obj.status === true).length)
    const completed = (this.props?.userObj?.projects?.length)
    const percent = (trueProjects/completed)*100
    return percent.toPrecision(3)
  }

  totalBilledArr=() => this.props?.userObj?.projects?.map(obj => obj.amount)  //returns [5000, 5000, 5000, 5000, 5000]
  totalBilled =()=> {return this.totalBilledArr()?.reduce(function(a, b){return a + b;}, 0)}

  receivedArr =() => this.props?.userObj?.projects?.map(obj => obj.paid)       
  receivedTotal=() => {return this.receivedArr()?.reduce(function(a, b){return a + b;}, 0)}

  // Oustanding balance from clients 
  receivables = () => {
    const receivedArr = this.props?.userObj?.projects?.map(obj => obj.paid)       
    const totalBilledArr = this.props?.userObj?.projects?.map(obj => obj.amount) 
    const receivedTotal = receivedArr?.reduce(function(a, b){return a + b;}, 0);
    const totalBilled = totalBilledArr?.reduce(function(a, b){return a + b;}, 0);
    const owed = (totalBilled - receivedTotal)
    return owed
  }

  avgHours = () => {
   const pastWeek =  [day1, day2, day3, day4, day5, day6, day7]
   let total = 0;
   for(let day of pastWeek){
     total += this.dayHours(day)
    }
  return (total/7).toPrecision(3)
  }


  render() {
    
    // console.log( "test", (this.props.userObj.tasks?.filter(task => moment(task.start).format("MMM Do YYYY") === day7).map(task => ((new Date(task.end)) -( new Date(task.start))) / 36e5).reduce((a, b) => a + b, 0)))
    // console.log("daily avg", 
    // ([this.dayHours(day1), this.dayHours(day2), this.dayHours(day3), this.dayHours(day4), this.dayHours(day5), this.dayHours(day6), this.dayHours(day7)].reduce(function(a, b){return a + b;}, 0)/7).toPrecision(3)
    // )
    console.log("avgHours", this.avgHours())
    return (
      <>
      <div className="maindisplay-container">
        <h1 className="dash-header">My Dashboard</h1>
          <div className="graph">
          <Bar
            data={{
              labels: [day1, day2, day3, day4, day5, day6, day7],
              datasets: [
                {
                  label: 'Hours',
                  // backgroundColor: '#3BBA9C',
                  backgroundColor: '#99c5c4',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
                  data: [this.dayHours(day1), this.dayHours(day2), this.dayHours(day3), this.dayHours(day4), this.dayHours(day5), this.dayHours(day6), this.dayHours(day7)]

                }
              ]
            }}
            options={{
              title:{
                display:true,
                text: 'Weekly Productivity',
                fontSize:24
              },
              legend:{
                display:true,
                position:'right'
              },
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }}
          />
          </div>
          <div className="bottom-container">
                      <div className="box-1">
                        <h2>Summary as of {moment(new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)).format("MMM Do YYYY") }</h2>
                        <table className="health-table">
                          <tbody>
                            <tr>
                              <td>Progress:</td>
                              <td ><b>{this.compRate()}</b>% of projects completed</td>
                            </tr>
                            <tr >
                              <td>Accounts Receivable:</td>
                              <td ><b>${this.receivables()}</b> outstanding out of 
                              {" $" + String(this.totalBilled()).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
                              </td>
                            </tr>
                            <tr >
                              <td>Average Daily Hours:</td>
                              <td ><b>{this.avgHours()}</b> hours </td>
                            </tr>
                            <tr>
                              <td>Payments:</td>
                              <td ><b>{((this.receivedTotal()/this.totalBilled())*100).toPrecision(3)}</b>% collection rate from client</td>

                            </tr>
                          </tbody>
                      </table>

                      </div>
                      {/* <div className="box-2">
                        <p>This is box-2</p>
                      </div> */}

          </div>
          {/* <div className="third-item">
          </div> */}


          
      </div>
      </>
    );
  }
}
