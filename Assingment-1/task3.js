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

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));
