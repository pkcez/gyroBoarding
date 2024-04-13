
function showRot(e){
    //console.log(e);
    let a = Math.round(e.alpha / 90) * 90
    let b = Math.round(e.beta / 90) * 90
    let g = Math.round(e.gamma / 90) * 90

    document.getElementById("Shuv").innerHTML = a
    document.getElementById("Flip").innerHTML = b
    document.getElementById("KickHeel").innerHTML = g

    var newRot = [a, b, g]
    lastRotationValues = newRot;
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
