import React, { Component } from 'react';
import Register1 from '../components/registerStep/Register1';
import Register2 from '../components/registerStep/Register2';
import Register3 from '../components/registerStep/Register3';
import Register4 from '../components/registerStep/Register4';
import '../style/style.css';
import {Progress} from 'reactstrap';
import axios from 'axios';
export class Register extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            
        step: 1,
        IDCard: '',
        conIDCard: '',
        phoneNumber: '',
        name: '',
        surname: '',
        email: '',
        school: '',
        grade: '',
        payment: '',
        alreadyPay: false,
        }
    }
    
    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step: step - 1
        });
    };
    //for get data from textField
    handleChange = input => e => {
        e.preventDefault();

        const {name,value} = e.target;
        let errors = this.state.errors;
        this.setState({ [input]: e.target.value });
        console.log(input)
        console.log(this.state.IDCard)
        console.log('this is in handleChange')
        console.log(errors)

        
    };
    handleSubmit = () => {
        
        console.log('handleSubmit')
        const { IDCard, conIDCard, phoneNumber, name, surname, email, school, grade, payment } = this.state;
        
        const values = { IDCard,conIDCard, phoneNumber, name, surname, email, school, grade, payment };
        console.log(values);
        
    }
    render() {
        const { step } = this.state;
        const { IDCard, phoneNumber,conIDCard, name, surname, email, school, grade, payment,errors } = this.state;
        const values = { IDCard,conIDCard , phoneNumber, name, surname, email, school, grade, payment ,errors};

        switch (step) {
            case 1:
                return (
                    <div>
                        <Progress id='progressRegister'animated color='greenDebug' value="25">1/4</Progress>
                        <Register1 nextStep={this.nextStep} handleChange={this.handleChange}
                            values={values} errors={this.errors}/>

                    </div>

                );
            case 2:
                return (
                    <div>
                    
                    <Progress id='progressRegister'animated color='greenDebug' value="50">2/4</Progress>
                    <Register2 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange}
                        values={values} />
                    </div>
                );
            case 3:
                return (
                    <div>
                    <Progress id='progressRegister' animated color='greenDebug' value="75">3/4</Progress>
                    <Register3 data={this.state} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                        values={values} />
                        </div>
                )
            case 4:
                return (
                    <div>
                    <Progress id='progressRegister' animated color='greenDebug' value="100">4/4</Progress>
                    <Register4 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} 
                        values={values} />
                    </div>
                )
        }
    }
}
export default Register;