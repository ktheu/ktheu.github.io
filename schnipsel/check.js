let name = "sort";
a = new Array(2); 
a[0] = [];
a[0].push("4 13 92 42 11 7 12");
a[0].push("4 7 92 42 11 13 12");
a[0].push("4 7 11 42 92 13 12");

a[1] = [];    
a[1].push("2 14 22 1 13 9 25");
a[1].push("2 14 1 13 9 22 25");
a[1].push("2 1 13 9 14 22 25");


function checkanswer(nr) {
  let anz = a[nr].length;
  let q = new Array(anz).fill("");
  let x = new Array(anz).fill("");
  let text = "";
  let x0;
  for (let i=0; i<anz; i++) {

    q[i] = "q"+nr+i.toString();
    x[i] = document.getElementById(q[i]).value;
    x0 =  x[i].replace(/\s+/g, " ").trim();
    text = (x0 === a[nr][i]) ? text + "1" : text + "0";
    localStorage.setItem(name+q[i],x[i]);
   
  }

  let good = "1";
  while (good.length < anz) good += "1";

  text = (text === good ? "OK" : "not OK : " + text)
  document.getElementById("a"+nr).innerHTML = text;
 
}
 
function getStoredResults(nr) {
  let anz = a[nr].length;
  let q = new Array(anz).fill("");
  let k = 0;
  for (let i=0; i<anz; i++) {
    q[i] = "q"+nr+i.toString();
    k +=  getVariable(name+q[i],q[i]);
  }

  if (k>0) checkanswer(nr);

}

function getVariable(name,id) {
  let x = localStorage.getItem(name);
  document.getElementById(id).value = (x !== null) ? x : "" ;
  if (x !== null) return 1
}

for (let i=0; i<a.length; i++) {
  getStoredResults(i);
}

