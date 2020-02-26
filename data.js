var url = "http://dummy.restapiexample.com/api/v1/employees";
var table = document.getElementById("main");

fetch(url)
    .then((obj) => obj.json())
    .then((obj) => {
        for(let i = 0; i < obj.data.length; i++){
            var row = table.insertRow(-1);
            var id = row.insertCell(-1);
            id.innerHTML = obj.data[i].id;
            var name = row.insertCell(-1);
            name.innerHTML = obj.data[i].employee_name;
            var salary = row.insertCell(-1);
            salary.innerHTML = obj.data[i].employee_salary;
            var age = row.insertCell(-1);
            age.innerHTML = obj.data[i].employee_age;
            var buttons=row.insertCell(-1);
            buttons.innerHTML="<a href= \"#delete\"  onclick=\"remove(obj.data[i].id)\" class=\"btn btn-danger\" data-toggle=\"modal\">Delete</a></a>"
        }
    })
    .catch(function(obj){
        console.log(obj)
    });


// function postData(event){
//     event.preventDefault();
//
//     let employeename = document.getElementById('one').value;
//     //console.log(employeename);
//     let employeesalary = document.getElementById('two').value;
//     //console.log(employeesalary);
//     let employeeage = document.getElementById('three').value;
//     //console.log(employeeage);
//     fetch('http://dummy.restapiexample.com/api/v1/create', {
//         method: 'POST',
//         headers : new Headers(),
//         body:JSON.stringify({employeename:employeename,employeesalary:employeesalary,employeeage:employeeage})
//     }).then((res) => res.json())
//         .then((data) =>  console.log(data))
//         .catch((err)=>console.log(err))
// }



function submitData() {
    event.preventDefault();
    //console.log('hi');
    var formData = new FormData(document.getElementById('postData'));

    result = {};

    for (var entry of formData.entries()) {
        result[entry[0]] = entry[1];
    }

    // console.log(formData);
    fetch('http://dummy.restapiexample.com/api/v1/create', {
        method: 'POST',
        body: JSON.stringify(result)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    }).catch((err) => console.log(err));
}

//Adding new Employee



// function remove(id){
//     fetch("http://dummy.restapiexample.com/api/v1/delete" + "/"+id,{
//         method: 'DELETE'
//     }).then(() => {
//         console.log(id+'removed');
//     }).catch(err => {
//         console.error(err)
//     });
// }