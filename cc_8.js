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

// Task 4: Parameters and Arguments
function calculateRentalCost(days, carType, insurance= false) {
    let dailyRate;
    switch(carType) {
        case "Economy":
            dailyRate = 40;
            break;
        case "Standard":
            dailyRate = 60;
            break;
        case "Luxury":
            dailyRate = 100;
            break;
        default:
            console.log("Invalid car type");
            return;
}
let totalCost = days * dailyRate;
if (insurance) {
    totalCost += days * 20; // Insurance costs $20/day
}
console.log(`Total Rental Cost: $${totalCost}`);
}
calculateRentalCost(3, "Economy", true);
calculateRentalCost(5, "Luxury", false);

// Task 5: Returning Values
function calculateLoanPayment (principle, rate, time) {
    const totalPayment = principle + (principle * rate * time);
    console.log('Total Payment: $${totalPayment.toFixed(2)');
}
calculateLoanPayment(1000, 0.05, 2);
calculateLoanPayment(5000, 0.07, 3);

// Task 6: Higher-Order Functions
let transaction = [200, 500, 3000, 800, 2000, 1000, 500]
function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
let largeTransactions = filterLargeTransactions(transactions, amount => amount > 1000);
console.log(largeTransactions);

// Task 7: Closures
function createCartTracker() {
    let total = 0;
    return function(itemValue) {
        total += itemValue;
        return 'Total Cart Value: $${total}';
    };
}
let cart = createCartTracker();
console.log(cart(20));
console.log(cart(35));

