$(function(){
    var $name = $('#user_name'),
        $tel  = $('#user_tel'),
        $pwd  = $('#user_pwd'),
        $cap  = $('#user_cap'),
        $namemsg= $('#user_name_validation'),
        $telmsg = $('#user_tel_validation'),
        $pwdmsg = $('#user_pwd_validation'),
        $capmsg = $('#user_cap_validation'),
        $getCap = $('#get_cap'),
        $submit = $('#submit');

    //获取验证码
    $getCap.click(function(){
        var count = 60;
        var time = setInterval(function(){
            if(count == 0){
                clearInterval(time);
                $getCap.removeAttr("disabled");
                $getCap.attr('value',"获取验证码");
                $capmsg.html('请求超时，请稍候再试')
                count = 60;
                return false;
            }else{
                $getCap.attr('disabled',true);
                $getCap.attr('value',"重新获取("+count+"s)");
                count--;
            }
        },1000);
    })
    //点击注册
    $submit.click(function(){
        if(!validateName() || !validateTel() || !validatePwd() || !validateCap()) return; 
    })

    //字段校验
    $name.focusout(function(){
        if(!validateName()) $name.select();
    });
    $tel.focusout(function(){
        if(!validateTel()) $tel.select();
    });
    $pwd.focusout(function(){
        if(!validatePwd()) $pwd.select();
    })

    //校验不能为空
    function validateNull(value,field){
        if(value.val() === ""){
            field.html(value.attr('name')+'不能为空！');
            field.css('color','red');
            value.select();
            return false;
        }
    }
    function validateName(){
        validateNull($name,$namemsg);
        // 用户名仅支持中英文、数字和下划线，且不能为纯数字
        if(!/^[\u4E00-\u9FA5a-z-A-Z]{1}([\u4E00-\u9FA5a-z-A-Z0-9]|[._]){4,19}$/.test($name.val())){
            $namemsg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
            $namemsg.css('color','red');
            $name.select();
            return false;
        }
        $namemsg.css('color','green');
        $namemsg.html('✔');
        return true;
    }
    function validateTel(){
        validateNull($tel,$telmsg);
        //11位纯数字 
        if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test($tel.val())){
            $telmsg.html('手机号码格式不正确');
            $telmsg.css('color','red');
            $tel.select();
            return false;
        }
        $telmsg.css('color','green');
        $telmsg.html('✔');
        return true;
    }
    function validatePwd(){
        validateNull($pwd,$pwdmsg);
        //密码仅支持英文字母、数字和下划线
        if(!/^[0-9a-zA-Z_]{5,17}$/.test($pwd.val())){
            $pwdmsg.html('密码设置不符合要求');
            $pwdmsg.css('color','red');
            $pwd.select();
            return false;
        }
        $pwdmsg.css('color','green');
        $pwdmsg.html('✔');
        return true;
    }
    function validateCap(){
        validateNull($cap,$capmsg);
        $capmsg.html('');
        return true;
    }
})
