import './assest/css/main.less';
import './assest/css/index.css';
import add from './assest/js/add'
import img from './assest/images/mordf.jpg'

let element=document.createElement('div')
element.innerHTML=`<div>Hello,webpack</div>`;
document.querySelector('h1').appendChild(element)
console.dir(document.querySelector('h3 img'))
document.querySelector('h3 img').src=img;

console.log(add(10,7))