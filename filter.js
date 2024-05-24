const players=['sachin','ganguly',"dravid",'yuvi','panth','zaheer','gambir','boomraang'];

const playerRef=document.querySelector('#list');

function prepareList(){
    const playerstr=players.map((val)=>{
        return `<li>${val}</li>`
    }).join('');
    const list=`<ul>${playerstr}</ul>`;
    playerRef.innerHTML=list;

}
prepareList();