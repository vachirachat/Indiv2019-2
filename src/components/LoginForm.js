import React from 'react';

export default function LoginForm() {
    return (
        <div>
            <form id='loginForm'>
                <div class="form-group">
                    <label for="exampleInputEmail1">รหัสบัตรประชาชน</label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="รหัส 13 หลัก" />
                        <small id="emailHelp" class="form-text text-muted">กรอกรหัสบัตรประชาชน 13 หลักเพื่อใช้ login</small>
                </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">เบอร์โทรศัพท์มือถือ</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                            <button type="submit" class="btn btn-greenFill">Login</button>
            </form>
                    </div>
                    )
}