import React, { Component } from 'react';
import Register1 from '../components/registerStep/Register1';
import Register2 from '../components/registerStep/Register2';
import Register3 from '../components/registerStep/Register3';
import Register4 from '../components/registerStep/Register4';
import '../style/style.css';
export class Register extends Component {
    state = {
        step: 1,
        IDCard: '',
        phoneNumber: '',
        name: '',
        surname: '',
        email: '',
        school: '',
        grade: '',
        payment: '',
        alreadyPay: false,

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
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { IDcard, phoneNumber, name, surname, email, school, grade, payment } = this.state;
        const values = { IDcard, phoneNumber, name, surname, email, school, grade, payment };

        switch (step) {
            case 1:
                return (
                    <div>
                        <Register1 nextStep={this.nextStep} handleChange={this.handleChange}
                            values={values} />

                    </div>

                );
            case 2:
                return (
                    <Register2 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange}
                        values={values} />
                );
            case 3:
                return (
                    <Register3 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange}
                        values={values} />
                )
            case 4:
                return (
                    <Register4 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange}
                        values={values} />
                )
        }
    }
}
export default Register;