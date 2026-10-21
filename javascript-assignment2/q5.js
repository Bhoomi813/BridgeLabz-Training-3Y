
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check security conditions
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test another outcome
isWindowClosed = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Demonstrate OR and NOT operators
if (isAlarmOn || !isDoorLocked) {
    console.log("Alarm is active or door is unlocked");
}
