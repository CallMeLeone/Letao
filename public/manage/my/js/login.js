$(function () {
    // alert(1);
    //使用表单校验插件
    $('#form').bootstrapValidator({
        // 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        // 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在6到30之间'
                    },
                    callback:{
                        message:'用户名不存在'
                    }
                }
            },
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '用户名长度必须在6到12之间'
                    },
                    callback:{
                        message:'密码输入不正确'
                    }
                }
            },
        }
    });
});

//注册表单验证成功事件
$('#form').on('success.form.bv', function (e) {
    e.preventDefault();
    $.ajax({
        url: '/employee/employeeLogin',
        type: 'post',
        data: $('#form').serialize(),
        dataType: 'json',
        success: function (res) {
            // console.log(res);
            if (res.success) {
                location.href = 'index.html'
            }
            // 调用实例的更新校验方法 updateStatus 将校验状态更新失败
            // 使用updateStatus(field, status, validatorName)方法
            // 参数1: 字段名称 (username)
            // 参数2: 校验状态 NOT_VALIDATED未校验, VALIDATING校验中, INVALID失败 or VALID成功
            if (res.error === 1000) {
                $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback')
            }
            if (res.error === 1001) {
                $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback')
            }

        }
    })
})

//重置表单
$('.reset').on('click',function(){
    // alert(1);
    $('#form').data('bootstrapValidator').resetForm();
})