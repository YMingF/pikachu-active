
let string=`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: #ffdb00;
    min-height: 100vh;
  }
  .skin {
    position: relative;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
  }
  /*实现鼠标悬停时鼻子动的效果*/
  @keyframes wave {
    /*设置动画名字*/
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(-5deg);
    }
    66% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -15px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
  }
  .eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2d2d2e;
    border-radius: 50%;
  }
  .eye::before {
    content: " ";
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  /*写嘴唇*/
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  
    /**/
  }
  .mouth .up .lip {
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-top: none;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffdb00;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px); /*倾斜胡须*/
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
  
    transform: rotate(15deg) translateX(53px); /*倾斜胡须*/
  }
  .mouth .up .lip::before {
    content: " ";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: #ffdb00;
  }
  /*定义个伪元素遮掉右边框那根消除不了的线*/
  .mouth .up .lip.left::before {
    right: -6px;
  }
  
  .mouth .up .lip.right::before {
    left: -6px;
  }
  
  /*下嘴唇*/
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
  }
  
  .mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 800px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #a81007;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background: #ff5b5d;
    border-radius: 100px;
  }
  
  .face {
    position: absolute;
    border: 3px solid black;
    left: 50%;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    border-radius: 50%;
    background-color: #fe1800;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left {
    transform: translateX(-180px);
  }
  .face.left > img {
    transform-origin: left top;
    transform: rotateY(180deg);
  }
  .face.right {
    transform: translateX(180px);
  }
  `
let n=0
let demo=document.querySelector('#demo')
const Id=setInterval(() => {

    n+=1
    if(n>string.length){
        window.clearInterval(Id)//停止计时器的执行
        return
    }
    demo.innerText=string.substring(0,n)//展示Css的文字
    demo2.innerHTML=string.substring(0,n)//去实现样式的更新
    demo.scroll(0,9999)
    console.log(n)
}, 0);