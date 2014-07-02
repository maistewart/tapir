/**
 * Created by Mai on 7/1/2014.
 */
document.getElementById("step1").addEventListener("mouseout",nextfunc);

function nextfunc(){
    document.getElementById("plan").style.opacity = 0;
}
document.getElementById("step1").addEventListener("mouseover",myfunc);

function myfunc(){
    document.getElementById("plan").style.opacity = 0.7;
}