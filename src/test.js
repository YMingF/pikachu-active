
import string from './css.js'



const player={
    n:0,
    time:100 ,//设置动画播放速度
    id:undefined,
    events:{
        "#btnPause":"pause",
        //重新设置一个新闹钟
        "#btnPlay":"play",
        "#btnSlow":"slow",
        "#btnNormal":"normal",
        "#btnFast":"fast"
    },
    init:()=>{
        player.bindEvents()
        player.play()
    },
   

    bindEvents:()=>{
        
        for(let key in player.events){ //将哈希表中的键一个个取出赋值给key
            if(player.events.hasOwnProperty(key)){ //如果key是其自身属性，而不是继承过来的属性,再执行后面代码
                const value=player.events[key]
                document.querySelector(key).onclick=player[value] //给每个ID绑定一个点击时要执行的函数
            }
           
        }
       
    },
    run:()=>{
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(player.id)//停止计时器的执行
            return
        }
        demo.innerText=string.substring(0,player.n)//展示Css的文字
        demo2.innerHTML=string.substring(0,player.n)//去实现样式的更新
        demo.scroll(0,9999)
    },
    play:()=>{
        window.clearInterval(player.id)
        player.id=setInterval(player.run, player.time);
    },
    pause:()=>{
        console.log('暂停了 ')
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.time=300
        player.play()
    },
    normal:()=>{
        player.pause()
        player.time=100
        player.play()
    },
    fast:()=>{
        player.pause()
        player.time=0
        player.play()
    }

}
player.init()

