// Dar uma titulo a pagina

let title = "Take Your Time";
document.querySelector("#title").innerHTML = title;

// Receber o nome da tarefa realizada
function getInputValues() {
    const activityName = document.querySelector('#nameActivity').value;
    const startTime = new Date('1970-01-01 ' + document.querySelector('#initialHour').value);
    const endTime = new Date('1970-01-01 ' + document.querySelector('#finalHour').value);
    return {activityName, startTime, endTime};
  }

// Receber as horas e transformar em numeros
function calculateElapsedTime({startTime, endTime}) {
    const elapsedTime = endTime - startTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    return {hours, minutes};
  }
  
function calculateAndDisplayTime() {
    const {activityName, ...times} = getInputValues();
    const {hours, minutes} = calculateElapsedTime(times);

    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.push({activityName, hours, minutes});
    localStorage.setItem('activities', JSON.stringify(activities));

    document.querySelector('#result').innerHTML = `Você gastou ${hours} horas e ${minutes} minutos na atividade "${activityName}".`;
  }

