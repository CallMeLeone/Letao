//进度条
$(function () {
  $(document).ajaxStart(function () {
    NProgress.start();
    // console.log('开始发送请求');

  });
  $(document).ajaxStop(function () {
    setTimeout(function () {
      NProgress.done();
      //  console.log('请求发送成功');  
    }, 500);

  })
})

// 等待页面dom结构的加载后执行
//公共部分
$(function () {
  // 功能1: 左侧二级导航切换效果

  $('.left_aside .category').on('click', function () {
    // alert(1);
    $(this).next().stop().slideToggle();
  })
  
  // 功能2: 左侧菜单切换效果
  $('.h_menu').on('click',function(){
    // alert(1);
    $('.left_aside').toggleClass('hidemenu');
    $('.main').toggleClass('hidemenu');
    $('.main header').toggleClass('hidemenu');
  })
 //功能3 退出功能
 $('.btn-logout').on('click',function(){
  //  alert(1);
  $.ajax({
    url:'/employee/employeeLogout',
    type:'get',
    dataType:'json',
    success:function(res){
      // console.log(res);
      if(res.success){
        location.href = 'login.html'
      }
    }
  })
 })
})
