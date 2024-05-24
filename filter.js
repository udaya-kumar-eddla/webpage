const players=['sachin','ganguly',"dravid",'yuvi','panth','zaheer','gambir','boomraang'];

const playerRef=document.querySelector('#list');

function prepareList(data){
    const playerstr=data.map((val)=>{
        return `<li>${val}</li>`
    }).join('');
    const list=`<ul>${playerstr}</ul>`;
    playerRef.innerHTML=list;
    
    }
    function handleChange(eve){
        const value=eve.target.value;
        const filterplayers=players.filter((val)=>{
            return val.toLocaleLowerCase().startsWith(value.toLocaleLowerCase());
        })
        prepareList(filterplayers);

}
prepareList(players);
