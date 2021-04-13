var count = 1,index = 0,countr = 1;
var c1 = [],c2 = [],c3 = [],c4 = [],c5 = [];
function addUser()
{
    var r = document.getElementById("user");
    var n = r.insertRow(countr);
    c1[index] = document.getElementById("name").value;
    c2[index] = count++;
    c3[index] = document.getElementById("city").value;
    c4[index] = document.getElementById("degree").value;
    c5[index] = new Date();
    var c11 = n.insertCell(0);
    var c12 = n.insertCell(1);
    var c13 = n.insertCell(2);
    var c14 = n.insertCell(3);
    var c15 = n.insertCell(4);
    c11.innerHTML = c1[index];
    c12.innerHTML = c2[index];
    c13.innerHTML = c3[index];
    c14.innerHTML = c4[index];
    c15.innerHTML = c5[index];
    index++; countr++;
}
function popup()
{
    document.getElementById("userform").style.display = "block";
} 
function popout()
{
    document.getElementById("userform").style.display = "none";
}