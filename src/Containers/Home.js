import React from "react";
import '../CSS/Home.css'
import hex2 from '../Components/hex2.png'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  
  class Home extends React.Component {

    render(){

        return (
    
            <div className="home-container">
                <div className="home-logo-div">
                    <h1 className="home-logo-name"><img src={hex2} className="home-logo" alt="hex2" />            My HQ </h1>
                </div>
                <div className="home-desc-div">
                    <h3>Visualizing Data For Freelancers</h3>
                    <br/>
                    <ul>
                        <li>Track and manage your clients, projects, and billings</li>
                        <li>Monitor the status and productivity of projects and related tasks with the project dashboard</li>
                        <li>Export project activity to PDF and CSV files</li>
                    </ul>

                </div>
                
            </div>
        );


    }
}


export default Home;

