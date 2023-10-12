import React from 'react';
// const isIncome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style = {{textAlign: 'center', padding: '0 10%'}}>
        Try Entering - <br/>
        Type: Income<br/> 
        {/* {isIncome ? 'Income':'Expense'}  */}
        Category: Salary <br/>
        {/* {isIncome ? 'Business' : 'Expense'}<br/> */}
        Amount: ₹15000 <br/>
        {/* {isIncome ? '₹100' : '₹50'}<br/> */}
       
        Date: (default date)...<br/>
    </div>
  )
}

export default InfoCard