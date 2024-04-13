let spinCountA = 0;
let aRot = null;
let prevRotA = null;
let totalRotationA = 0;

let spinCountB = 0;
let bRot = null;
let prevRotB = null;
let totalRotationB = 0;

function error(problem){
    document.getElementById("errors").innerHTML += problem
}

function calculateSpins(e){
    if (aRot === null){
        aRot = e.alpha
    }
    
    if (prevRotA !== null) {
        let delta = aRot - prevRotA;
        if (delta > 180) delta -= 360;
        if (delta < 180) delta += 360;
        totalRotationA += delta
    }
    prevRotA = e.alpha

    if (Math.abs(totalRotationA) >= 180) {
        spinCountA++;
        errror('Phone has spun 180 degrees alpha. Spin count:', spinCountA);
        document.getElementById("shuvTotal").innerHTML += spinCountA
        
        totalRotationA = 0;
    }
    ////////////////////
    if (bRot === null){
        bRot = e.beta
    }
    
    if (prevRotB !== null) {
        let delta = bRot - prevRotB;
        if (delta > 180) delta -= 360;
        if (delta < 180) delta += 360;
        totalRotationB += delta
    }
    prevRotB = e.beta

    if (Math.abs(totalRotationB) >= 180) {
        spinCountB++;
        errror('Phone has spun 180 degrees beta. Spin count:', spinCountB);

        
        totalRotationB = 0;
    }
}
function showRot(e){
    let a = Math.round(e.alpha / 30) * 30
    let b = Math.round(e.beta / 30) * 30
    let g = Math.round(e.gamma / 30) * 30

    document.getElementById("Shuv").innerHTML = a
    document.getElementById("Flip").innerHTML = b
    document.getElementById("KickHeel").innerHTML = g
    calculateSpins(e);
}

async function getRot(){
    if(typeof DeviceOrientationEvent !='undefined ' && typeof DeviceOrientationEvent.requestPermission === 'function'){
        //if it's IOS 13+
        try {
            const permissionState = await DeviceOrientationEvent.requestPermission();
            if(permissionState === 'granted') {
                window.addEventListener('deviceorientation', showRot);
            }
        } catch(error){
            console.log(error);
        }
    } else if('DeviceOrientationEvent' in window){
        //if it's NOT IOS 13+
        window.addEventListener('deviceorientation', showRot);
    } else {
        //Device Orientation not supported
    }
}
