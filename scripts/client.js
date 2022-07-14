console.log('sourced')

$(readyNow)

function readyNow() {
    console.log('ready')

    $('#addEmployee').on('click',createEmployee);
}

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

    clearInputs();
    addEmployee(newEmployee);
}

function addEmployee(employeeObject) {
        $('#employeeTable').append(`
        <tr>
            <th>${employeeObject.firstName}</th>
            <th>${employeeObject.lastName}</th>
            <th>${employeeObject.IDNumber}</th>
            <th>${employeeObject.jobTitle}</th>
            <th>${employeeObject.annualSalary}</th>
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