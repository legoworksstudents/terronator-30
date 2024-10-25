let Contador = 0
function siguelineas (Time: number) {
    Contador = 0
    while (Contador <= Time) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
            neZha.setMotorSpeed(neZha.MotorList.M2, 35)
            neZha.setMotorSpeed(neZha.MotorList.M1, 35)
        } else if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
            neZha.setMotorSpeed(neZha.MotorList.M2, 5)
            neZha.setMotorSpeed(neZha.MotorList.M1, 25)
        } else if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
            neZha.setMotorSpeed(neZha.MotorList.M2, 25)
            neZha.setMotorSpeed(neZha.MotorList.M1, 5)
        }
    }
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
}
function Pa_alante (Time: number) {
    neZha.setMotorSpeed(neZha.MotorList.M2, 50)
    neZha.setMotorSpeed(neZha.MotorList.M1, 50)
    basic.pause(Time)
    neZha.stopAllMotor()
}
input.onButtonPressed(Button.A, function () {
    siguelineas(10)
})
basic.forever(function () {
	
})
loops.everyInterval(3000, function () {
    Contador += 1
})
