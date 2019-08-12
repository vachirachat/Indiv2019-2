import React,{Component} from 'react';

export class Register2 extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render(){
        const {values,handleChange} = this.props;
        return (
            <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">ชื่อ</label>
                    <input class="form-control" id="name" aria-describedby="nameHelp"/>
                        <small id="nameHelp" class="form-text text-muted">ใส่คำนำหน้าด้วย เช่น นายหรือนางสาว</small>
                </div>

                <div class="form-group">
                <label for="exampleInputEmail1">นามสกุล</label>
                    <input class="form-control" id="surname"/>
                    <small id='checkID' class="form-text text-muted"></small>
                </div>

                <div class="form-group">
                        <label for="exampleInputPassword1">Email</label>
                        <input class="form-control" id="Email"/>
                </div>
                <div class="form-group">
                        <label for="exampleInputPassword1">โรงเรียน</label>
                        <input class="form-control" id="School"/>
                </div>
                <div class="form-group">
                        <label for="exampleInputPassword1">ชั้นปี</label>
                        <input class="form-control" id="Grade"/>
                </div>
                    
                    
                    
                    <button type="submit" class="btn btn-outline-green" onClick={this.back}>ย้อนกลับ</button>
                    <button type="submit" class="btn btn-outline-green" onClick={this.continue}>ต่อไป</button>

            </form>
                        
                    </div>
            
        )
    }
}
export default Register2;