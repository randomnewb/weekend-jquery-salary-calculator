console.log('sourced')

$(readyNow)

function readyNow() {
    console.log('ready')

    // Event handler for adding employee button
    $('#addEmployee').on('click',createEmployee);

    // Event handler for removing a specific employee through event delegation
    $('body').on('click','.removeEmployee',removeEmployee);
}

// Create an empty array to store employee objects
let employeesArray = [];


/**
 * Creates an employee object from input fields data
 * Adds the employee object to an employees array
 * Calls a function to clear inputs
 * Calls a function to append the employee to the DOM
 * Calls the function to update the monthly costs
 */
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

/**
 * Takes an employee object and appends its property values to a table on the DOM
 * along with a removeEmployee button ('X')
 * @param {object} employeeObject 
 */
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

/**
 * Clears user input fields
 */
function clearInputs() {
    $('#firstName').val('')
    $('#lastName').val('') 
    $('#IDNumber').val('') 
    $('#jobTitle').val('') 
    $('#annualSalary').val('') 
}

/**
 * Uses the value(s) from an annualSalary property of an array of employee objects 
 * in order to determine the monthly cost of all employee objects
 * Updates the monthly cost on the DOM
 * Styles the background-color conditionally
 * @param {array} employees 
 */
function updateCosts(employees) {
    let totalCost = 0;
    for (let prop of employees) {
        // console.log(prop.annualSalary);
        totalCost += Number(prop.annualSalary);
        // console.log(totalCost);
        // console.log(employees);
        totalCost = Math.round((totalCost / 12) * 100) / 100
    }
    $('#monthlyCosts').text(`Monthly costs: $${totalCost}`);

    if (totalCost > 20000) {
        $('#monthlyCosts').css('background-color', 'red');
    } else $('#monthlyCosts').css('background-color', 'white');
}

/**
 * Finds the index of an element in the table and removes the matching index
 * from the employee array
 * Calls the updateCosts function 
 */

function removeEmployee() {
    // console.log('In removeEmployees')
    let childArrayIndex = $(this).parent().parent().index();
    console.log(childArrayIndex);
    $(this).parent().parent().remove();
    employeesArray.splice((childArrayIndex - 1),1);
    updateCosts(employeesArray);
}