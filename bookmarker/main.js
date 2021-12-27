document.addEventListener('DOMContentLoaded',fecthbook)


// Listeners
const booklist = document.getElementById("booklist")
const sub = document.getElementById("button");
sub.addEventListener('click',savebook);


function savebook(){
// getting input
    let sitename = document.getElementById("name").value;
    let siteurl = document.getElementById("url").value;

    if(!validform(sitename,siteurl)){
        return false
    }
   
    let book = {
        name:sitename,
        url:siteurl
    }
// localStorage
//  localStorage.setItem('test','Hello local');
//   localStorage.removeItem('test')
//     console.log(localStorage.getItem("test"));

   if(localStorage.getItem('bookmarks') === null ){
       // adds or sets the bookmark to local
       const bookmarks = [];
       bookmarks.push(book);
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
      // fecths the bookmarks from local
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      bookmarks.push(book)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      console.log(book);
    }
    fecthbook();
    document.getElementById("name").value = "";
    document.getElementById("url").value = "";
}

function deletebook(url){
    let delu = JSON.parse(localStorage.getItem('bookmarks')) ;
    for (let i = 0; i < delu.length; i++){
        if(delu[i].url == url){
            delu.splice(i,1)

        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(delu));
fecthbook();
 console.log("removed = " + url)
}

function fecthbook(){
    let html = ""
    let bo = JSON.parse(localStorage.getItem('bookmarks')) ;
    console.log(" bo = " + bo + typeof(bo) ) 
    for(let i = 0 ; i < bo.length ; i++){
        console.log(" bo i  = " + bo ) 
        html += `<div class = "white">
       <p> ${bo[i].name}</p> <a class="lin" href="${bo[i].url}" target="_blank"> Visit</a> <a class="lin" id ="remove" onClick="deletebook('${bo[i].url}')">Remove</a>
       <br>
       </div>`
    }
    //  ${bo[i].url}
    booklist.innerHTML = html
    console.log(localStorage.getItem('bookmarks'))
}

function validform(sitename,siteurl){
    if(!sitename || !siteurl){
        alert("please enter data")
        return false
    }
  
   let reg = new RegExp(`^http`,'gi')

   if(!siteurl.match(reg)){
       alert("please enter valid url")
       return false
   }
   return true
}