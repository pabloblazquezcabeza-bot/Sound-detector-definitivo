let ruido: number;
let ruidoAnterior = -1
let escuchando = true
basic.forever(function () {
    ruido = input.soundLevel()
    if (escuchando) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    if (ruido != ruidoAnterior) {
        if (ruido < 50) {
            basic.showIcon(IconNames.Happy)
        } else if (ruido < 100) {
            basic.showIcon(IconNames.Meh)
        } else if (ruido < 150) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Angry)
        }
        ruidoAnterior = ruido
        escuchando = false
        basic.pause(2000)
        escuchando = true
    }
})
