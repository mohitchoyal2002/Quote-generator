const task3Element = document.getElementById('task-3');
function fun1(){
    alert("Hello it is task3element");
}
let name = "mohit";
function fun2(name){
    alert("hello "+name);
}
fun1();
fun2(name);
task3Element.addEventListener('click',fun1);