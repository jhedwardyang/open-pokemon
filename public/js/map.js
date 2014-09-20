if (window.DeviceMotionEvent != undefined) {
        window.addEventListener("devicemotion", accelerometerUpdate, true);
    }
function accelerometerUpdate(e) {
   var aX = event.accelerationIncludingGravity.x*1;
   var aY = event.accelerationIncludingGravity.y*1;
   var aZ = event.accelerationIncludingGravity.z*1;
   //The following two lines are just to calculate a
   // tilt. Not really needed. 
   xPosition = Math.atan2(aY, aZ);
   yPosition = Math.atan2(aX, aZ);
   $("#test").append(aX + " " + aY + " " + aZ + " \n <br />");
}