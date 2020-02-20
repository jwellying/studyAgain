<?php
    //接收请求的数据
    // var_dump($_FILES);
//     array (size=1)
//      'uploadImg' => 
//        array (size=5)
//       'name' => string '0df431adcbef7609984030f22bdda3cc7cd99e10.jpg' (length=44)
//       'type' => string 'image/jpeg' (length=10)
//       'tmp_name' => string 'E:\wamp\tmp\phpF26B.tmp' (length=23)
//       'error' => int 0
//       'size' => int 65669
    //处理请求的数据
    $files=$_FILES;
    $fileName=$files['uploadImg']['name'];
    $tmp_name=$files['uploadImg']['tmp_name'];
    move_uploaded_file($tmp_name,'../img/'.$fileName);
    //完成响应
    echo 'success';
?>