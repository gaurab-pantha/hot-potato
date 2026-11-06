const $=i=>document.getElementById(i),p=$("p"),A=$("a");
let sc=0,ht=0,on=0,best=0;
try{best=+localStorage.best||0}catch(e){}
$("r").textContent="best "+best;
const mv=()=>{
p.style.left=Math.random()*(A.clientWidth-140)+"px";
p.style.top=Math.random()*(A.clientHeight-112)+"px"
};
p.onclick=()=>{
if(!on){sc=ht=0;on=1;p.className="";$("m").textContent="catch it before it burns!"}
else{sc++;ht=0}
$("s").textContent=sc;
mv()
};
setInterval(()=>{
if(!on)return;
ht+=(1+sc*.12)*(.5+Math.random());
let k=Math.min(ht,100);
$("f").style.width=k+"%";
$("b").style.fill=`hsl(${38-k*.35} 70% ${62-k*.25}%)`;
$("o").setAttribute("d",`M86 104q20 ${14-k*.28} 40 0`);
$("d").style.opacity=k/100;
document.body.style.background=`rgb(${28+k} 22 19)`;
p.style.transform=`rotate(${(Math.random()-.5)*k/6}deg)`;
if(ht>=100){
on=0;p.className="x";p.style.transform="";
if(sc>best){best=sc;try{localStorage.best=sc}catch(e){}}
$("m").textContent="boom! tap to try again";
$("r").textContent="best "+best
}
},50)
