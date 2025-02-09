let browser_name = "Chrome";
if (browser_name == 'Edge') {
    alert("you have got the Edge");
}
else if (browser_name == 'Chrome' || browser_name == 'Firefox' || browser_name == 'Safari' || browser_name == 'Opera') {
    alert("Okay we support these browsers too");
}
else{
    alert("We hope that this page looks ok");
}


const number =+ prompt('enter number between 0 and 3','');
switch (number){
    case 0:
        alert("It is 0");
        break;
    case 1:
        alert("It is 1");
        break;
    case 2:
    case 3:
        alert("It is 2 or 3");
        break;
}
