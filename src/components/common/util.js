/**
 * Created by wangzhikui on 2017/6/7.
 */
export default{
compressImg(imgData,maxHeight,onCompress){
  if(!imgData)return;
  onCompress = onCompress || function(){};

  maxHeight = maxHeight || 200;//默认最大高度200px

  var canvas = document.createElement('canvas');
  var img = new Image();
  img.onload = function(){
    if(img.height > maxHeight) {//按最大高度等比缩放
      img.width *= maxHeight / img.height;
      img.height = maxHeight;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // canvas清屏
    //重置canvans宽高
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height); // 将图像绘制到canvas上
    onCompress(canvas.toDataURL("image/jpeg"));//必须等压缩完才读取canvas值，否则canvas内容是黑帆布
  };
  // 记住必须先绑定事件，才能设置src属性，否则img没内容可以画到canvas
  img.src = imgData;
}
}
