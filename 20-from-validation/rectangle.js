$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  
  /*calc button click event*/
  $btnCal.click(function(){
    //validate if error return;
    if(!validate("#width") || !validate("#height")) return; 


    //get value
    var w = Number($width.val()),
        h = Number($height.val());

    //calculate
    var p = 2 * ( w + h ),
        a = w * h;

    //output
    $perimeter.val(p);
    $area.val(a);
  });
  
  //字段校验 其实就是在集中校验的基础上添加
  $width.focusout(function(){
    if(!validate('#width')) $width.select();
  });
  $height.focusout(function(){
    if(!validate('#height')) $height.select();
  });
  
  //集中校验
  function validate(field){
    //get DOM error message
    var $data = $(field),
        $msg  = $(field + '-validation-message'),
        label = $(field).attr('id');

    //validate null
    if($data.val() === ""){
      $msg.html(label+'不能为空！');
      $data.select();//设置焦点
      return false;
    }

    //validate number
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
      $msg.html(label+'必须是数值！');
      $data.select();
      return false;
    }
    //validate > 0
    if(Number($data.val()) < 0) {
      $msg.html(label+"必须大于零");
      $data.select();
      return false;
    }
    
    $msg.html('');
    return true;
  }
});
