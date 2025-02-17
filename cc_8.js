// Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate);

    console.log('Net Salary: $${netSalary.toFixed(2)}');
}
calculateSalary(5000, 500, 0.1);
calculateSalary(7000, 1000, 0.15);