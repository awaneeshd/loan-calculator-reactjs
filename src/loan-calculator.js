/**
 *
 * LoanCalculator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './css/App.css';
import './css/grids-min.css';
import './css/grids-responsive-min.css'; 

import Slider from '@material-ui/lab/Slider';

const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

Date.prototype.addDays=function(date,d){return new Date(date.getTime()+(24*60*60*1000*d));};

const MIN_DURATION = 3;
const MAX_DURATION = 33;
const MIN_LOAN_AMOUNT = 100;
const MAX_LOAN_AMOUNT = 8000;
/* eslint-disable react/prefer-stateless-function */
export class LoanCalculator extends React.PureComponent {
  constructor() {
      super();
      this.state = {
        loanAmount: 1000,
        loanPeriod: 10,
        btnLabel: {
          btn1: [1,"May"],
          btn2: [1,"June"],
          btn3: [1,"May"],
          btn4: [1,"May"],
          btn5: [1,"May"],
          btn6: [1,"May"],
          btn7: [1,"May"],
          btn8: [1,"May"],
        }
      }
   }

   componentDidMount() {
     const today = new Date();
     var next = today.addDays(today,1);
     console.log('1:',next);
     next = today.addDays(today,22);
     console.log('2:',next);
     this.setState({
      btnLabel: {
        btn1: [today.addDays(today,3).getDate(), monthNames[today.addDays(today,3).getMonth()]],
        btn2: [today.addDays(today,4).getDate(), monthNames[today.addDays(today,4).getMonth()]],
        btn3: [today.addDays(today,5).getDate(), monthNames[today.addDays(today,5).getMonth()]],
        btn4: [today.addDays(today,6).getDate(), monthNames[today.addDays(today,6).getMonth()]],
        btn5: [today.addDays(today,7).getDate(), monthNames[today.addDays(today,7).getMonth()]],
        btn6: [today.addDays(today,8).getDate(), monthNames[today.addDays(today,8).getMonth()]],
        btn7: [today.addDays(today,9).getDate(), monthNames[today.addDays(today, 9).getMonth()]],
        btn8: [today.addDays(today,10).getDate(), monthNames[today.addDays(today, 10).getMonth()]],
      },
      firstDateDiff: 2,
     })  

   }
  
  handleChangeAmount = (event, loanAmount) => {
    const { dispatch } = this.props;
    this.setState({ loanAmount});
  };

  handleNextDates = (event) => {
    console.log('handleNextDates');
    var today = new Date();
    var {firstDateDiff } = this.state;
    if (firstDateDiff > 17) {
      firstDateDiff = 17;
    }
    firstDateDiff = firstDateDiff+ 8;

    this.setState({
      btnLabel: {
        btn1: [today.addDays(today, firstDateDiff +1).getDate(), monthNames[today.addDays(today, firstDateDiff +1).getMonth()]],
        btn2: [today.addDays(today, firstDateDiff +2).getDate(), monthNames[today.addDays(today, firstDateDiff +2).getMonth()]],
        btn3: [today.addDays(today, firstDateDiff +3).getDate(), monthNames[today.addDays(today, firstDateDiff +3).getMonth()]],
        btn4: [today.addDays(today, firstDateDiff +4).getDate(), monthNames[today.addDays(today, firstDateDiff +4).getMonth()]],
        btn5: [today.addDays(today, firstDateDiff +5).getDate(), monthNames[today.addDays(today, firstDateDiff +5).getMonth()]],
        btn6: [today.addDays(today, firstDateDiff +6).getDate(), monthNames[today.addDays(today, firstDateDiff +6).getMonth()]],
        btn7: [today.addDays(today, firstDateDiff +7).getDate(), monthNames[today.addDays(today, firstDateDiff +7).getMonth()]],
        btn8: [today.addDays(today, firstDateDiff +8).getDate(), monthNames[today.addDays(today, firstDateDiff +8).getMonth()]],
      },
      firstDateDiff: firstDateDiff,
     }) ;
  };

  handlePreviousDates = (event) => {
    console.log('handleNextDates');
    var today = new Date();
    var {firstDateDiff } = this.state;
    if (firstDateDiff < 10) {
      firstDateDiff = 10;
    }
    firstDateDiff = firstDateDiff- 8;

    this.setState({
      btnLabel: {
        btn1: [today.addDays(today, firstDateDiff +1).getDate(), monthNames[today.addDays(today, firstDateDiff +1).getMonth()]],
        btn2: [today.addDays(today, firstDateDiff +2).getDate(), monthNames[today.addDays(today, firstDateDiff +2).getMonth()]],
        btn3: [today.addDays(today, firstDateDiff +3).getDate(), monthNames[today.addDays(today, firstDateDiff +3).getMonth()]],
        btn4: [today.addDays(today, firstDateDiff +4).getDate(), monthNames[today.addDays(today, firstDateDiff +4).getMonth()]],
        btn5: [today.addDays(today, firstDateDiff +5).getDate(), monthNames[today.addDays(today, firstDateDiff +5).getMonth()]],
        btn6: [today.addDays(today, firstDateDiff +6).getDate(), monthNames[today.addDays(today, firstDateDiff +6).getMonth()]],
        btn7: [today.addDays(today, firstDateDiff +7).getDate(), monthNames[today.addDays(today, firstDateDiff +7).getMonth()]],
        btn8: [today.addDays(today, firstDateDiff +8).getDate(), monthNames[today.addDays(today, firstDateDiff +8).getMonth()]],
      },
      firstDateDiff: firstDateDiff,
     }) ;
  };



  handleChangeDuration = (event, loanPeriod) => {
    const { dispatch } = this.props;
    this.setState({ loanPeriod});
  };

  redirect = route => {
    const { history } = this.props;
    history.push(`/${route}`);
  };

  render() {
    const { classes } = this.props;
    const date = new Date();
    const btn1 = 1;
    const { btnLabel } = this.state;

    let interest =
      (this.state.loanAmount *
        this.state.loanPeriod *
        60) /
      (365 * 100);
    interest = Math.round(interest);
    // return <loan-calculator></loan-calculator>;
    return (
      <main className="layout">
        <div className="paper" align="center">
          <div class="pure-g">
            <div className="pure-u-1-5">Loan Amount </div>
            <div class="pure-u-4-5">
              <Slider
                value={this.state.loanAmount}
                min={MIN_LOAN_AMOUNT}
                max={MAX_LOAN_AMOUNT}
                step={10}
                onChange={this.handleChangeAmount}
                classes={{
                  // root: "root",
                  // thumbIcon: "thumbIcon",
                  // thumbIconWrapper: "thumbIconWrapper",
                  // trackBefore: classes.trackBefore,
                  // trackAfter: classes.trackAfter,
                }}
                thumb={
                  <div className="sliderTrackValue">
                    {' '}
                    R{this.state.loanAmount}
                  </div>
                }
              />
            </div>
          </div>


          <div className="pure-g">
            <div className="pure-u-1-5">Loan Duration (in Days) </div>         

            <div className="pagination pure-g pure-u-4-5">
              <button className="previous pure-u-2-24" onClick={this.handlePreviousDates}>&laquo;</button>
              <div className="date-group pure-g pure-u-20-24">
                <button className="pure-u-md-3-24 pure-u-6-24"><span>{btnLabel.btn1[0]}{ ' '}</span><span>{btnLabel.btn1[1]}</span></button>
                <button className="pure-u-md-3-24 pure-u-6-24"><span>{btnLabel.btn2[0]}{ ' '}</span><span>{btnLabel.btn2[1]}</span></button>
                <button className="pure-u-md-3-24 pure-u-6-24"><span>{btnLabel.btn3[0]}{ ' '}</span><span>{btnLabel.btn3[1]}</span></button>
                <button className="pure-u-md-3-24 pure-u-6-24"><span>{btnLabel.btn4[0]}{ ' '}</span><span>{btnLabel.btn4[1]}</span></button>
                <button className="pure-u-md-3-24 pure-u-6-24"><span>{btnLabel.btn5[0]}{ ' '}</span><span>{btnLabel.btn5[1]}</span></button>
                <button className="pure-u-md-3-24 pure-u-6-24"><span>{btnLabel.btn6[0]}{ ' '}</span><span>{btnLabel.btn6[1]}</span></button>
                <button className="pure-u-md-3-24 pure-u-6-24"><span>{btnLabel.btn7[0]}{ ' '}</span><span>{btnLabel.btn7[1]}</span></button>
                <button className="pure-u-md-3-24 pure-u-6-24"><span>{btnLabel.btn8[0]}{ ' '}</span><span>{btnLabel.btn8[1]}</span></button>
              </div>  
              <button className="next pure-u-2-24" onClick={this.handleNextDates}>&raquo;</button>
            </div>
          </div>
          
        </div>
      </main>
    );
  }
}
export default LoanCalculator;
