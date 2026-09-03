function getDayType(day) {
    let output = "";

    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            output = "Weekend";
            break;
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            output = "Working Day";
            break;
        default:
            output = "Invalid Day";
    }

    return output;
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));
