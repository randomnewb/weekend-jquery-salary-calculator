console.log('sourced')

$(readyNow)

function readyNow() {
    console.log('ready')

    $('#addEmployee').on('click',createEmployee);
    $('body').on('click','.removeEmployee',removeEmployee);
}


let employeesArray = [];

function createEmployee() {
    console.log('in createEmployee')

    const newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(), 
        IDNumber: $('#IDNumber').val(), 
        jobTitle: $('#jobTitle').val(), 
        annualSalary: $('#annualSalary').val(), 
    }
    
    console.log(newEmployee);
    employeesArray.push(newEmployee);
    clearInputs();
    addEmployee(newEmployee);
    updateCosts(employeesArray);
}

function addEmployee(employeeObject) {
        $('#employeeTable').append(`
        <tr>
            <th>${employeeObject.firstName}</th>
            <th>${employeeObject.lastName}</th>
            <th>${employeeObject.IDNumber}</th>
            <th>${employeeObject.jobTitle}</th>
            <th>${employeeObject.annualSalary}</th>
            <th><button class="removeEmployee">X</button></th>
        </tr>
        `)
    }

function clearInputs() {
    $('#firstName').val('')
    $('#lastName').val('') 
    $('#IDNumber').val('') 
    $('#jobTitle').val('') 
    $('#annualSalary').val('') 
}

function updateCosts(employees) {
    let totalCost = 0;
    for (let prop of employees) {
        // console.log(prop.annualSalary);
        totalCost += Number(prop.annualSalary);
        // console.log(totalCost);
        // console.log(employees);
        totalCost = totalCost / 12
    }
    $('#monthlyCosts').text(`Monthly costs: ${totalCost}`);

    if (totalCost > 20000) {
        $('#monthlyCosts').css('background-color', 'red');
    } else $('#monthlyCosts').css('background-color', 'white');
}

function removeEmployee() {
    // console.log('In removeEmployees')
    let childArrayIndex = $(this).parent().parent().index();
    console.log(childArrayIndex);
    $(this).parent().parent().remove();
    employeesArray.splice((childArrayIndex - 1),1);
    updateCosts(employeesArray);
}