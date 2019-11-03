import React,{Component} from 'react';

export class Register4 extends Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render(){
    return (
        <div id='register3Form' class='col-lg-5 col-sm-12'>
            <h1>ขั้นตอนสมัคร STEP 4</h1>
            <h1>การลงทะเบียนสำเร็จเสร็จสิ้น</h1>
        
            <a class="btn btn-outline-green" href='/'>เสร็จสิ้น</a>
        </div>
    )
}
}
export default Register4;