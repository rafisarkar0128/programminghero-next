//Question No. 1
function describeValue(value) {
    return `${typeof value} | ${value ? "thruthy" : "falsy"}`;
}

//Question No. 2
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

//Question No. 3
function validateUsername(username) {
    let output = "Available";

    if (username.length < 4) {
        output = "Too Short";
    } else if (username.includes(" ")) {
        output = "No Space Allowed";
    } else if (username.toLowerCase()?.match("admin")?.length > 0) {
        output = "Reserved Word";
    }

    return output;
}

//Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare += (distance - 2) * 15;
    }

    if (waitingMinutes > 0) {
        fare += waitingMinutes * 2;
    }

    if (isNight) {
        fare += fare * (20 / 100);
    }

    return fare;
}

//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate > 6 && requiredRate <= 12) {
        verdict = "Tough";
    } else if (requiredRate > 12) {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
