function showRot(e){
    //console.log(e);
    let a = e.alpha
    let b = e.beta
    let g = e.gamma

    document.getElementById("rot").innerHTML = "| A: " + a + " | B: " + b + " | G: " + g + " |"
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
