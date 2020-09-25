document.querySelector('.onclick').onclick = function () {
    console.log('click');
}

document.querySelector('.ondblclick').ondblclick = function () {
    console.log('double click');
}

document.querySelector('.onmousemove').onmousemove = function () {
    console.log('gooooo');
}

document.querySelector('.onmouseenter').onmouseenter = function () {
    // мышь на элемент - 1 раз
    console.log('enter');
}

document.querySelector('.onmouseleave').onmouseleave = function () {
    // мышь покидает элемент - 1 раз
    console.log('leave');
}

document.querySelector('.onmousewheel').onmousewheel = function () {
    // мышь колесико
    console.log('wheel');
    return false;
}

document.querySelector('.onmousewheel').oncontextmenu = function () {
    // контекстное меню
    console.log('contextmenu');
    return false;
}

function test() {
    console.log(2 / 3);
}

function test2() {
    let a = 2
    return a / 3;
}

test();
console.log(5 * test());
console.log(5 * test2());





/*                  my cod              */

/*  Дз 1    */

document.querySelector('.dabl_clik_wrapper').ondblclick = function(){

    alert('двойной клик решил в index.html');
}




/*  Дз 2   */


document.querySelector('.delite_right_button_wrapper').addEventListener('contextmenu', event => event.preventDefault());



/*  Дз 3  */


let file =  document.querySelector('.file_wrapper p');
file.onmouseover = function() {
       file.style.backgroundImage = "url('images/open.png')";
    
  };
  
  file.onmouseout = function() {
     file.style.backgroundImage = "url('images/clouse.png')";
  };


  /*  Дз 4  */

  let randomColor = function (){
      let rondom = Math.floor(Math.random() * 100);
      let resultColor = `rgb(${rondom},${rondom},${rondom})`;
      return resultColor;
    }

   
   
 
    let inElement = function(elem){
      let d =  document.querySelector(`${elem}`)
      d.onclick = function(){
          d.style.backgroundColor = randomColor();
      }
    }
    
    inElement('.color1');
    inElement('.color2');
    inElement('.color3');
    inElement('.color4');


    