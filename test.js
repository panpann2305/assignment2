document.body.style.margin   =0
document.body.style.overflow ='hidden'

const cnv = document.createElement ('canvas')
cnv.width = window.innerWidth
cnv.height = window.innerHeight

document.body.appendChild (cnv)

const ctx = cnv.getContext (`2d`)

let x_pos = 0

function drawFrame () {
    ctx.fillStyle = `turquoise`
    ctx.fillRect (0,0, cnv.width, cnv.height)

    ctx.fillStyle = `hotpink`
    let y_pos = (cnv.height - 100)/2
    ctx.fillRect (x_pos, y_pos, 100, 100)

    requestAnimationFrame (drawFrame)

    x_pos++

    if (x_pos > cnv.width) {
        x_pos = -100
    }
}

drawFrame ()