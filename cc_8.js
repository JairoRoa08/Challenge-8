// Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate);

    console.log('Net Salary: $${netSalary.toFixed(2)}');
}
calculateSalary(5000, 500, 0.1);
calculateSalary(7000, 1000, 0.15);

// Task 2: Function Expression
const calculateDiscount = function(price, discountRate) {
    const finalPrice = price - (price * discountRate);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
}

calculateDiscount(100, 0.2);
calculateDiscount(250, 0.15);

// Task 3: Arrow Function
const calculateServiceFee = (amount, serviceType) => {
    let feeRate;
    switch(serviceType) {
        case "Premium":
            feeRate = 0.15;
            break;
        case "Standard":
            feeRate = 0.10;
            break;
        case "Basic":
            feeRate = 0.05;
            break;
        default:
            console.log("Invalid service type");
            return; 
}
const serviceFee = amount * feeRate;

console.log(`Service Fee: $${serviceFee.toFixed(2)}`);
}

calculateServiceFee(200, "Premium");
calculateServiceFee(500, "Standard");
