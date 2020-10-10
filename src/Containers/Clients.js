import React, { Component } from 'react'
import '../CSS/ClientTable.css'

export default class Clients extends Component {

    appt = () => {
        return this.props?.userObj?.appointments?.map(apptObj => {
            return(
                <>
                <span>Note: {apptObj.note}</span>
                <span>Note: {apptObj.note}</span>
                </>
            )
        })
    }

    render() {
        {console.log("inside clients",this.props?.userObj)}
        

        return (
            <>
            <ul>
                My Clients
                {this.appt()}
            </ul>
            



           
<div class="table-title">
<h3>Data Table</h3>
</div>
<table class="table-fill">
<thead>
<tr>
<th class="text-left">ID</th>
<th class="text-left">First Name</th>
<th class="text-left">Last Name</th>
<th class="text-left">Phone</th>
<th class="text-left">Email</th>

</tr>
</thead>
<tbody class="table-hover">
<tr>
<td class="text-left">1</td>
<td class="text-left">Victoria</td>
<td class="text-left">Beckham</td>
<td class="text-left">718-567-1234</td>
<td class="text-left">vicky@email.com</td>


</tr>
<tr>
<td class="text-left">1</td>
<td class="text-left">Victoria</td>
<td class="text-left">Beckham</td>
<td class="text-left">718-567-1234</td>
<td class="text-left">vicky@email.com</td>
</tr>
<tr>
<td class="text-left">1</td>
<td class="text-left">Victoria</td>
<td class="text-left">Beckham</td>
<td class="text-left">718-567-1234</td>
<td class="text-left">vicky@email.com</td>
</tr>
<tr>
<td class="text-left">1</td>
<td class="text-left">Victoria</td>
<td class="text-left">Beckham</td>
<td class="text-left">718-567-1234</td>
<td class="text-left">vicky@email.com</td>
</tr>
<tr>
<td class="text-left">1</td>
<td class="text-left">Victoria</td>
<td class="text-left">Beckham</td>
<td class="text-left">718-567-1234</td>
<td class="text-left">vicky@email.com</td>
</tr>
</tbody>
</table>
  



            </>
        )
    }
}
