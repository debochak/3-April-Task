
let container = document.createElement('div');
//container.innerHTML = 'Let the fun begin'
document.body.append(container);

function cme (ele, eleclass, eleid){

    var fin = document.createElement(ele);
    fin.setAttribute('class',eleclass);
    fin.setAttribute('id', eleid);
    return fin;

}

//container.append(col);

let temp = [];

let i = 10;

let demo = setTimeout(function reducer(){
    
    if(i>0){
        col = cme('div', 'col-4 ml-5 mt-1 bg-warning text-center');
        col.innerHTML = i;
        container.append(col);
        console.log(i);
        i=i-1;
        setTimeout(reducer,1000);
    }
    else{
        col = cme('div', 'col-4 ml-5 mt-1 bg-warning text-center');
        col.innerHTML = "Happy Independence Day!";
        container.append(col);
        console.log("Happy Independence Day!") ;
    }
},1000)



