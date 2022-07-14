console.log('sourced')

$(readyNow)

function readyNow() {
    console.log('ready')

    $('#addEmployee').on('click',addEmployee);
}

function addEmployee() {
    console.log('in AddEmployee')

    const newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(), 
        IDNumber: $('#IDNumber').val(), 
        jobTitle: $('#jobTitle').val(), 
        annualSalary: $('#annualSalary').val(), 
    }

    console.log(newEmployee);
}