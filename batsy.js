function addZero(i){
    if(i<10){
        i="0"+i
    }
    return i;
}
var date= new Date();
var day= date.getDate();
var month=date.getMonth()+1;
var year=date.getFullYear();
var hour=addZero(date.getHours());
var min= addZero(date.getMinutes());
document.write(day+"/"+month+"/"+year+"  "+hour+":"+min);