$.ajax({
    url:'/employee/checkRootLogin',
    type:'get',
    dataType:'json',
    success:function(res){
        // console.log(res);
        if(res.error===400){
            location.href='login.html';
            // console.log('未登录');
        }
        if(res.success){
            // console.log('已登录');
            
        }
        
    }
})