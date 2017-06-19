function timeLine() {
    var myCanvas = document.getElementById("timeLine");
    var timeLine = myCanvas.getContext('2d');
    /*画圆---声明*/
    function drawPoint(cxt,x,y,r,fillTstyle) {
        /*根据坐标点画圆*/
        cxt.fillStyle = fillTstyle;
        cxt.beginPath();
        cxt.arc(x,y,r,0,Math.PI*2,true);
        cxt.closePath();
        cxt.fill();
    }
    /*画时间节点---声明*/
    function timnPiont(x,y) {
        drawPoint(timeLine,x,y,10,"#ccc");
        drawPoint(timeLine,x,y,5,"#0096ff");
    }
    /*画圆弧---声明*/
    function curve(cxt,x,y,r,strokeStyle,r0,r1) {
        cxt.beginPath();
        cxt.strokeStyle = strokeStyle;
        cxt.lineWidth = 5.7;
        cxt.arc(x,y,r,r0*0.01*Math.PI,r1*0.01*Math.PI,false);
        cxt.stroke();
    }
    /*画直线---声明*/
    function drawLine(cxt,x,y,lineWidth,strokeStyle,flag) {
        cxt.lineWidth = lineWidth;//线条的宽度
        cxt.strokeStyle = strokeStyle;//线条的颜色
        cxt.lineTo(x,y);//从x0,y0到x1,y1画一条线
        cxt.stroke();//画线
    }
    /*第一个时间节点--执行*/
    timnPiont(382,10);
    /*第一段动画--执行*/
    var i1 = 19;
    var int1 = setInterval(function () {
        drawLine(timeLine,382,++i1,5,"#000");
        if(i1==187){
            clearInterval(int1);
            /*第二段动画--执行*/
            var i2 = 0;
            var int2 = setInterval(function () {
                curve(timeLine,279,185,103,"#000",i2,++i2)
                if(i2==50){
                    clearInterval(int2);
                    timnPiont(279,287);
                    var i3 = 258;
                    var int3 = setInterval(function () {
                        drawLine(timeLine,--i3,287,5,"#000");
                        if(i3==103){
                            clearInterval(int3);
                        }
                    });
                }
            },10);
        }
    },4);
}
timeLine();