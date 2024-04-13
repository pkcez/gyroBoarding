function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}


function showRot(e){
    //console.log(e);
    let a = Math.round(e.alpha / 90) * 90
    let b = Math.round(e.beta / 90) * 90
    let g = Math.round(e.gamma / 90) * 90

    document.getElementById("Shuv").innerHTML = Math.round(a / 90) * 90
    document.getElementById("Flip").innerHTML = Math.round(b / 90) * 90
    document.getElementById("KickHeel").innerHTML = Math.round(g / 90) * 90
    
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
