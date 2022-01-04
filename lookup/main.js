const search = document.getElementById("search");
const matchlist = document.getElementById("matchlist");

const searchState = async searchtext => {
    const res = await fetch('../state.json');
    const state = await res.json();
    let matchs = state.filter(state => {
        const regex = new RegExp(`^${searchtext}`,'gi');
        return state.name.match(regex) || state.abb.match(regex);
    })
    if (searchtext.length === 0){
        matchs = [];
    }
    console.log(matchs); 
    ouputhtml(matchs)
}

const ouputhtml = (matchs) => {
    if(matchs.length > 0){
        let html = "";
        for(let i=0; i < matchs.length ; i++){
            html += `<div class="white">
            <h4> State:${matchs[i].name} [${matchs[i].abb}] </h4>
            <h4> Capital:${matchs[i].capital} </h4>
            </div>`        
        }
        matchlist.innerHTML = html;
        console.log(html);
    }
}

search.addEventListener("input",()=>searchState(search.value));