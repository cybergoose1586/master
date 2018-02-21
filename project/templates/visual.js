var canvas = document.getElementById('myChart'); 
var data = { 
labels: ["January", "February", "March", "April", "May", "June", "July"], 
datasets: [{ 
label: "Тепловые процессы", 
fill: false, 
lineTension: 0.1, 
backgroundColor: "rgba(75,192,192,0.4)", 
borderColor: "rgba(75,192,192,1)", 
borderCapStyle: 'butt', 
borderDash: [], 
borderDashOffset: 0.0, 
borderJoinStyle: 'miter', 
pointBorderColor: "rgba(75,192,192,1)", 
pointBackgroundColor: "#fff", 
pointBorderWidth: 1, 
pointHoverRadius: 5, 
pointHoverBackgroundColor: "rgba(75,192,192,1)", 
pointHoverBorderColor: "rgba(220,220,220,1)", 
pointHoverBorderWidth: 2, 
pointRadius: 5, 
pointHitRadius: 10, 
data: [], 
}] 
}; 
function cr(){ 
myLineChart.clear(); 

var dt = { 
labels: ["January", "February", "March", "April", "May", "June", "July"], 
datasets: [{ 
label: "Тепловые процессы", 
fill: false, 
lineTension: 0.1, 
backgroundColor: "rgba(75,192,192,0.4)", 
borderColor: "rgba(75,192,192,1)", 
borderCapStyle: 'butt', 
borderDash: [], 
borderDashOffset: 0.0, 
borderJoinStyle: 'miter', 
pointBorderColor: "rgba(75,192,192,1)", 
pointBackgroundColor: "#fff", 
pointBorderWidth: 1, 
pointHoverRadius: 5, 
pointHoverBackgroundColor: "rgba(75,192,192,1)", 
pointHoverBorderColor: "rgba(220,220,220,1)", 
pointHoverBorderWidth: 2, 
pointRadius: 5, 
pointHitRadius: 10, 
data: [], 
}] 
}; 
option = { 
showLines: true 
}; 
myLineChart = new Chart(canvas, { 
type: 'scatter', 
data: dt, 
options: option 
}); 
for (var i=0;i<8;i=i+1) 
myLineChart.data.datasets[0].pop(); 
} 

//график вверх
function pp(){
    var nt = Number(document.getElementById('nt').value);//начальная температура 
    var x = 0 ; 
    var y = 0 ; 
    var et = Number(document.getElementById('et').value) ; //конечная температура 
    var tplav =Number(document.getElementById('tplav').value) ;//температура плавления 
    var m = Number(document.getElementById('m').value) ;//масса 
    var kpd = Number(document.getElementById('kpd').value) ;//кпд 
    var pn = Number(document.getElementById('pn').value) ;//мощность нагревателя 
    var l = Number(document.getElementById('l').value) ;//удельная теплота парообразования 
    var lambda = Number(document.getElementById('lambda').value) ;//удельная теплота плавления 
    var tparoobraz = Number(document.getElementById('tparoobraz').value);//температура парообразования 
    var Ctverdoe = Number(document.getElementById('Ctverdoe').value);//теплоёмкость в твёрдом 
    var Czhidkoe = Number(document.getElementById('Czhidkoe').value);//теплоёмкость в жидком 
    var x1 = 0; 
    var y1 = nt; 
    var x2 = ((Ctverdoe*m*(tplav-nt))/(kpd+pn)); 
    var y2 = tplav; 
    var x3 = (lambda*m)/(kpd*pn)+x2; 
    var y3 = y2; 
    var x4 = ((Czhidkoe*m*(tparoobraz-tplav))/(kpd+pn)) + x3; 
    var y4 = tparoobraz; 
    var x5 = (l*m)/(kpd*pn)+x4; 
    var y5 = y4; 
    
    if(nt<tplav){
      if (et>tplav){
        myLineChart.data.datasets[0].data.push({ 
          x: String(x1), 
          y: String(y1), 
          }); 

          myLineChart.data.datasets[0].data.push({ 
            x: String(x2), 
            y: String(y2), 
            }); 
            
            myLineChart.data.datasets[0].data.push({ 
              x: String(x3), 
              y: String(y3), 
              }); 

              myLineChart.data.datasets[0].data.push({ 
                x: String(x4), 
                y: String(et), 
                }); 
  
      }  

       else if (tplav=>et){
          myLineChart.data.datasets[0].data.push({ 
            x: String(x1), 
            y: String(y1), 
            }); 

            myLineChart.data.datasets[0].data.push({ 
              x: String(x2), 
              y: String(et), 
              }); 
        }
      }
    else if (nt=>tplav){
      if(et=tplav){
        myLineChart.data.datasets[0].data.push({ 
        x: String(x1), 
        y: String(tplav), 
        }); 
      }
      else {
        myLineChart.data.datasets[0].data.push({ 
        x: String(x1), 
        y: String(tplav), 
        });
        myLineChart.data.datasets[0].data.push({ 
        x: String(x4), 
        y: String(et), 
        });
      }
    }
        
    
  myLineChart.data.labels.push(document.getElementById('nt').value); 
  myLineChart.update(); 
  
}

//график вниз 
function pob(){ 
  var nt = Number(document.getElementById('nt').value);//начальная температура 
  var x = 0 ; 
  var y = 0 ; 
  var et = Number(document.getElementById('et').value) ; //конечная температура 
  var tplav = Number(document.getElementById('tplav').value) ;//температура плавления 
  var m = Number(document.getElementById('m').value) ;//масса 
  var kpd = Number(document.getElementById('kpd').value) ;//кпд 
  var pn = Number(document.getElementById('pn').value) ;//мощность нагревателя 
  var l = Number(document.getElementById('l').value) ;//удельная теплота парообразования 
  var lambda = Number(document.getElementById('lambda').value) ;//удельная теплота плавления 
  var tparoobraz = Number(document.getElementById('tparoobraz').value);//температура парообразования 
  var Ctverdoe = Number(document.getElementById('Ctverdoe').value);//теплоёмкость в твёрдом 
  var Czhidkoe = Number(document.getElementById('Czhidkoe').value);//теплоёмкость в жидком 
  var x1 = 0; 
  var y1 = nt; 
  var x2 = ((Ctverdoe*m*(tplav-nt))/(kpd+pn)); 
  var y2 = tplav; 
  var x3 = (lambda*m)/(kpd*pn); 
  var y3 = y2; 
  var x4 = ((Czhidkoe*m*(tparoobraz-tplav))/(kpd+pn)) + x3; 
  var y4 = tparoobraz; 
  var x5 = (l*m)/(kpd*pn)+x4; 
  var y5 = y4; 
  var x6= ((Czhidkoe*m*(tparoobraz-tplav))/(kpd+pn)) ; 
  var y6=y2 ; 
  var x7= ((lambda*m)/(kpd*pn) + x6); 
  var y7= y2; 
  var x8= x7+((Ctverdoe*m*(tplav-et))/(kpd+pn)); 
  var y8= et; 
  if (nt>tplav){
      if (et<tplav){ 
        myLineChart.data.datasets[0].data.push({ 
        x: String(x1), 
        y: String(y1), 
        }); 
        myLineChart.data.datasets[0].data.push({ 
        x: String(x6), 
        y: String(y6), 
        }); 
        myLineChart.data.datasets[0].data.push({ 
        x: String(x7), 
        y: String(y7), 
        }); 
        myLineChart.data.datasets[0].data.push({ 
        x: String(x8), 
        y: String(y8), 
        }); 
      } 
      else if (et>tplav){ 
        myLineChart.data.datasets[0].data.push({ 
        x: String(x1), 
        y: String(y1), 
        }); 
        myLineChart.data.datasets[0].data.push({ 
        x: String((x6/et)*nt), 
        y: String(y8), 
        }); 
      } 
      else  { 
        myLineChart.data.datasets[0].data.push({ 
        x: String(x1), 
        y: String(y1), 
        }); 
        myLineChart.data.datasets[0].data.push({ 
        x: String(x6), 
        y: String(et), 
        }); 
      } 
      
      }
      else if(nt<tplav){
        myLineChart.data.datasets[0].data.push({ 
          x: String(x1), 
          y: String(y1), 
          }); 
          myLineChart.data.datasets[0].data.push({ 
            x: String(x8), 
            y: String(y8), 
            }); 
      }
      else{
        myLineChart.data.datasets[0].data.push({ 
          x: String(x1), 
          y: String(y1), 
          }); 
          myLineChart.data.datasets[0].data.push({ 
            x: String(x3), 
            y: String(y8), 
            }); 
      }
      myLineChart.data.labels.push(document.getElementById('nt').value); 
      myLineChart.update(); 
    
}

//график отзеркаленный 
function adddata() { 
  var nt = Number(document.getElementById('nt').value);//начальная температура 
  var x = 0 ; 
  var y = 0 ; 
  var et = Number(document.getElementById('et').value) ; //конечная температура 
  var tplav =Number(document.getElementById('tplav').value) ;//температура плавления 
  var m = Number(document.getElementById('m').value) ;//масса 
  var kpd = Number(document.getElementById('kpd').value) ;//кпд 
  var pn = Number(document.getElementById('pn').value) ;//мощность нагревателя 
  var l = Number(document.getElementById('l').value) ;//удельная теплота парообразования 
  var lambda = Number(document.getElementById('lambda').value) ;//удельная теплота плавления 
  var tparoobraz = Number(document.getElementById('tparoobraz').value);//температура парообразования 
  var Ctverdoe = Number(document.getElementById('Ctverdoe').value);//теплоёмкость в твёрдом 
  var Czhidkoe = Number(document.getElementById('Czhidkoe').value);//теплоёмкость в жидком 
  var x1 = 0; 
  var y1 = nt; 
  var x2 = ((Ctverdoe*m*(tplav-nt))/(kpd+pn)); 
  var y2 = tplav; 
  var x3 = (lambda*m)/(kpd*pn)+x2; 
  var y3 = y2; 
  var x4 = ((Czhidkoe*m*(tparoobraz-tplav))/(kpd+pn)) + x3; 
  var y4 = tparoobraz; 
  var x5 = (l*m)/(kpd*pn)+x4; 
  var y5 = y4; 
  var x6= ((Czhidkoe*m*(tparoobraz-tplav))/(kpd+pn)) + x5; 
  var y6=y2 ; 
  var x7= (lambda*m)/(kpd*pn) + x6; 
  var y7= y2; 
  var x8= x7+((Ctverdoe*m*(tplav-nt))/(kpd+pn)); 
  var y8= et; 

  if (nt>=tplav) { 
    myLineChart.data.datasets[0].data.push({ 
    x: String(x1), 
    y: String(nt), 
    }); 
    x1 = 0; 
    x2 = ((Ctverdoe*m*(tplav-et))/(kpd+pn)); 
    y2 = tplav; 
    x3 = 0; 

    y3 = y2; 
    x4 = ((Czhidkoe*m*(tparoobraz-tplav))/(kpd+pn)) + x3; 
    y4 = tparoobraz; 
    x5 = (l*m)/(kpd*pn)+x4; 
    y5 = y4; 
    x6= ((Czhidkoe*m*(tparoobraz-tplav))/(kpd+pn)) + x5; 
    y6=y2 ; 
    x7= (lambda*m)/(kpd*pn) + x6; 
    y7= y2; 
    x8= x7+((Ctverdoe*m*(tplav-et))/(kpd+pn)); 
    y8= et; 
  }
  else{ 
    myLineChart.data.datasets[0].data.push({ 
    x: String(x1), 
    y: String(y1), 
    }); 
    myLineChart.data.datasets[0].data.push({ 
    x: String(x2), 
    y: String(y2), 
    }); 
    myLineChart.data.datasets[0].data.push({ 
    x: String(x3), 
    y: String(y3), 
    }); 

  } 
  if (nt<tparoobraz) { 
    x1 = 0; 
    x2 = ((Ctverdoe*m*(tplav-et))/(kpd+pn)); 
    y2 = tplav; 
    x3 = 0; 

    y3 = y2; 
    x4 = ((Czhidkoe*m*(tparoobraz-tplav))/(kpd+pn)) + x3; 
    y4 = tparoobraz; 
    x5 = (l*m)/(kpd*pn)+x4; 
    y5 = y4; 
    x6= ((Czhidkoe*m*(tparoobraz-tplav))/(kpd+pn)) + x5; 
    y6=y2 ; 
    x7= (lambda*m)/(kpd*pn) + x6; 
    y7= y2; 
    x8= x7+((Ctverdoe*m*(tplav-et))/(kpd+pn)); 
    y8= et; 
    myLineChart.data.datasets[0].data.push({ 
    x: String(x4), 
    y: String(y4), 
    }); 

    myLineChart.data.datasets[0].data.push({ 
    x: String(x5), 
    y: String(y5), 
    }); 
  } 
  if (et>=tplav){myLineChart.data.datasets[0].data.push({ 
    x: String(x6), 
    y: String(et), 
    });} 
  else{ 
    myLineChart.data.datasets[0].data.push({ 
    x: String(x6), 
    y: String(y6), 
    }); 
    myLineChart.data.datasets[0].data.push({ 
    x: String(x7), 
    y: String(y7), 
    }); 
    myLineChart.data.datasets[0].data.push({ 
    x: String(x8), 
    y: String(y8), 
    }); 
  } 
  myLineChart.data.labels.push(document.getElementById('nt').value); 
  myLineChart.update(); 
} 
var option = { 
showLines: true 
}; 
var myLineChart = new Chart(canvas, { 
type: 'scatter', 
data: data, 
options: option 
});