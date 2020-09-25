let tab = document.querySelectorAll('.tab');

init();

tab.forEach(function (element) {
    element.onclick = showTabs;
});

function init() {
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 1; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
}

function showTabs() {
    //.getAttribute('data')
    let data = this.getAttribute('data');
    //console.log(data);
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 0; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
    // css .tab-body[data="3"]
    // '.tab-body[data="'+data+'"]'
    //document.querySelector('.tab-body[data="' + data + '"]').style.display = 'block';
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}



/*              my cod                  */

/*Повторите действия видео по созданию системы вкладок. Оптимизируйте код */

let li = document.querySelectorAll('.li_nav');
let w = document.querySelectorAll('.w1');
li.forEach(function(element){
    element.onclick = runClik;
})

/* фукцмя цикла с передаваемыми параметрами */


let iter = function (param,arr){
    for(let i = param; i < arr.length; i++){
        arr[i].style.display = 'none';
    }
}

iter(1,w);

function runClik(){
            let data = this.getAttribute('data');
            iter(0,w);
            let result =  document.querySelector(`.w1[data="${data}"]`);
            result.style.display = 'block';
    };


