function analyzePassword(){

    let password =
        document.getElementById("password").value;
        document.getElementById("len").innerHTML =
password.length >= 8
? "✅ Minimum 8 Characters"
: "❌ Minimum 8 Characters";

document.getElementById("upper").innerHTML =
/[A-Z]/.test(password)
? "✅ Uppercase Letter"
: "❌ Uppercase Letter";

document.getElementById("lower").innerHTML =
/[a-z]/.test(password)
? "✅ Lowercase Letter"
: "❌ Lowercase Letter";

document.getElementById("num").innerHTML =
/[0-9]/.test(password)
? "✅ Number"
: "❌ Number";

document.getElementById("special").innerHTML =
/[!@#$%^&*]/.test(password)
? "✅ Special Character"
: "❌ Special Character";

    let score = 0;

    let suggestions = [];

    if(password.length >= 8)
        score++;
    else
        suggestions.push("Use at least 8 characters");

    if(/[A-Z]/.test(password))
        score++;
    else
        suggestions.push("Add uppercase letter");

    if(/[a-z]/.test(password))
        score++;
    else
        suggestions.push("Add lowercase letter");

    if(/[0-9]/.test(password))
        score++;
    else
        suggestions.push("Add number");

    if(/[!@#$%^&*]/.test(password))
        score++;
    else
        suggestions.push("Add special character");

    let strength = "";

    if(score <= 2)
        strength = "WEAK";

    else if(score <= 4)
        strength = "MEDIUM";

    else
        strength = "STRONG";

    let strengthText =
    document.getElementById("strength");

    strengthText.innerHTML =
    "Strength: " + strength;

    if(score <= 2)
    {
        strengthText.style.color = "#ff1744";
    }
    else if(score <= 4)
    {
        strengthText.style.color = "#ff9800";
    }
    else
    {
        strengthText.style.color = "#00ff88";
}
document.getElementById("lengthInfo").innerHTML =
"Password Length: " + password.length + " characters";
    let percentage = score * 20;

document.getElementById("score").innerHTML =
"Security Score: " + percentage + "%";
let level = "";

document.getElementById("lengthValue").innerHTML =
password.length;

document.getElementById("scoreValue").innerHTML =
percentage + "%";
if(score <= 2)
{
    level = "Basic Security";
}
else if(score <= 4)
{
    level = "Advanced Security";
}
else
{
    level = "Military Grade Security";
}


document.getElementById("securityLevel").innerHTML =
"Estimated Security Level: " + level;
        let bar =
document.getElementById("strengthBar");

bar.style.width = (score*20) + "%";

if(score <= 2)
{
    bar.style.background = "#ff1744";
}
else if(score <= 4)
{
    bar.style.background = "#ff9800";
}
else
{
    bar.style.background = "#00ff88";
}

    document.getElementById("suggestions").innerHTML =
        suggestions.join("<br>");
}

function generatePassword()
{
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let special = "!@#$%^&*";

    let password = "";

    // Guarantee at least one of each
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    let allChars = upper + lower + numbers + special;

    // Fill remaining characters
    for(let i = 0; i < 8; i++)
    {
        password += allChars[
            Math.floor(Math.random() * allChars.length)
        ];
    }

    // Shuffle password
    password = password
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');

    document.getElementById("password").value = password;

    analyzePassword();
}

function togglePassword()
{
    let pass =
    document.getElementById("password");

    if(pass.type === "password")
    {
        pass.type = "text";
    }
    else
    {
        pass.type = "password";
    }
}

function copyPassword()
{
    let password =
    document.getElementById("password").value;

    navigator.clipboard.writeText(password);

    alert("Password copied!");
}