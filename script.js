let workers;
let taskToWork;
let inpDeadLineTime;
workers = (prompt('Input an array of any numbers for workers', '4,6,3,...').trim());
taskToWork = prompt('Input an array of any numbers for task to work', '2,5,1,...');
inpDeadLineTime = (prompt('Input dead line time', 'yyyy.mm.dd').trim());


function termToContinue(workers, taskToWork, inpDeadLineTime) {
    let now = new Date();
    let deadLineTime = new Date((inpDeadLineTime.split(".")[0]), (inpDeadLineTime.split(".")[1] - 1), (inpDeadLineTime.split(".")[2]))
        // let arrNow = now.split(".");
    let nDay = (Math.round((deadLineTime.getTime() - now.getTime()) / (24 * 3600 * 1000)));
    let workDay = 0;
    let year = (now.getFullYear().toString());
    let month = (now.getMonth().toString());
    let date = (now.getDate().toString());

    for (let i = 0; i <= nDay; i++) {

        let nowDate = new Date(year, month, date++);

        if (nowDate.getDay() !== 0 && nowDate.getDay() !== 6) {

            workDay++;

        }

    };

    // workHours - in a hours for the following calculations;
    let workHours = workDay * 8;
    let arrWorkers = workers.split(",");

    let sumArrWorkers = 0;
    for (let number of arrWorkers) { sumArrWorkers += +number; };

    let arrTaskToWork = taskToWork.split(",");

    let sumArrTaskToWork = 0;
    for (let numbers of arrTaskToWork) { sumArrTaskToWork += +numbers; };

    console.log(workers);
    console.log(taskToWork);
    console.log(inpDeadLineTime);


    let needToEndWork = (Math.ceil((sumArrTaskToWork / sumArrWorkers) * 8));
    let delta = 0;
    if (needToEndWork <= workHours) {
        delta = Math.ceil((workHours - needToEndWork) / 8);
        alert(`All tasks will be successfully completed in ${delta} days before the deadline!`)
    } else {
        delta = Math.round(needToEndWork - workHours);
        alert(`Will the development team have to spend extra ${delta} hours after the deadline to complete all tasks in the backlog`)
    };

    return;

}

termToContinue(workers, taskToWork, inpDeadLineTime);