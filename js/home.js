//鼠标悬停在公司概况上显示详细信息
function showCom(){
    var e = document.getElementById("company");
    e.style.display = "block";
}
//鼠标离开卡片隐藏信息
function hideCom(){
    var e = document.getElementById("company");
    e.style.display = "none";
}

//图片轮播效果
var myPix = new Array("images/cimg01.jpg", "images/cimg02.jpg", "images/cimg03.jpg");
var thisPic = 0;
function prePic(){
    if(thisPic === 0){
        thisPic = myPix.length;
    }
    thisPic--;
    document.getElementById("myPic").src = myPix[thisPic];
}
function nextPic(){
    thisPic++;
    if(thisPic === myPix.length){
        thisPic = 0;
    }
    document.getElementById("myPic").src = myPix[thisPic];
}