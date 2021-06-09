
var a = 10;

var container = document.createElement('div');
container.setAttribute('class','container')

var col = document.createElement('div');
col.setAttribute('class','rcol-4 ml-5 mt-1 bg-warning text-center')


setTimeout(()=>{
    col.innerHTML = 10;
    setTimeout(()=>{
        col.innerHTML = 9;
        setTimeout(()=>{
            col.innerHTML = 8;
            setTimeout(()=>{
                col.innerHTML = 7;
                setTimeout(()=>{
                    col.innerHTML = 6;
                    setTimeout(()=>{
                        col.innerHTML = 5;
                        setTimeout(()=>{
                            col.innerHTML = 4;
                            setTimeout(()=>{
                                col.innerHTML = 3;
                                setTimeout(()=>{
                                    col.innerHTML = 2;
                                    setTimeout(()=>{
                                        col.innerHTML = 1;
                                        setTimeout(()=>{
                                            col.innerHTML = 'Happy Independence Day'
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)

container.append(col)
document.body.append(container);