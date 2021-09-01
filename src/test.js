
import string from './css.js'
let n=0
let time=100 //设置动画播放速度
const run=()=>{
    n+=1
    if(n>string.length){
        window.clearInterval(id)//停止计时器的执行
        return
    }
    demo.innerText=string.substring(0,n)//展示Css的文字
    demo2.innerHTML=string.substring(0,n)//去实现样式的更新
    demo.scroll(0,9999)
}

//播放操作
const play=()=>{
    return setInterval(run, time);
}
//暂停操作
const pause=()=>{
    window.clearInterval(id)
}

let id=play()

btnPause.onclick=()=>{
    pause()
}
//重新设置一个新闹钟
btnPlay.onclick=()=>{
    id= play()
}

btnSlow.onclick=()=>{
    pause()
    time=300 
    id=play()
}

btnNormal.onclick=()=>{
    pause()
    time=100 
    id=play()
}

btnFast.onclick=()=>{
    pause()
    time=0
    id=play()
}