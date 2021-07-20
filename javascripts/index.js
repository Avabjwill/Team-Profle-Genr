//import employee classes 
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')
const Employee = require('./employee')
//import inquirer package to gather command line information

const inquirer = require('inquirer');

//function to initiate html and application run 
function initRun() {
    createHtml();
    addEmployee();
}

//function for generating HTML 
function createHtml() {
 const html = `('<!DOCTYPE html>')
 <html lang="en">
 <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        
    
    </head>
    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    
        <main class="container">
            <div class="row">
             ${htmlCard}
            </div>
    
        </main>
    
    
      
    </body>
    </html>` 
}

//create a function for manager to enter detail 
function addEmployee() {
    
    inquirer.prompt([    
        
       let detMan= ('')
        
        switch(employee) {
            case "Manager":
              system.out.println(Manager);
            break;
        }

        const addMember = ('');
    
        switch(addMember){
            case "Engineer":
               system.out.println(Engineer);
            break;
            default:
                system.out.println(Intern);
            break;
        }
    ])
    
}