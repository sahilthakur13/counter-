let count = 0;
const value =document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
 btn.addEventListener("click",function(e){
    //  current target is the part of  dom event flows and dom propogation  used for  direct target to the tree
    //  like stucture`s  for create cancel handle and capture  and clasList target to the given all the class lists
    const styles = e.currentTarget.classList;
    if(styles.contains("Decrease")){
        count--;
    }
    else if(styles.contains("Increase")){
        count++;
    }
    else{
        count = 0;
    }
    if(count>0){
        value.style.color = "green"
    }
    else if(count<0){
        value.style.color = "red"
    }
    value.textContent = count;
});

});

