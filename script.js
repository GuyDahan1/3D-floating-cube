const container = document.querySelector('.container');
const cube = document.querySelector('.cube');
let imgCube = document.querySelectorAll('.cube img');
let imgIndex = 1
let size = 220

function changeWalls() {
    imgIndex = imgIndex > 8 ? 1 : imgIndex
    imgCube.forEach(img => img.src = `/walls/${imgIndex}.jpg`)
    imgIndex++
}

function mousedown(e) {
    window.addEventListener("mousemove", onDrag)
    window.addEventListener("mouseup", mouseUp)
    window.addEventListener('wheel',(wheelEvent)=>{resizeCube(wheelEvent)} );

    function onDrag({movementX, movementY}) {
        let getStyle = window.getComputedStyle(container)
        let left = parseInt(getStyle.left)
        let top = parseInt(getStyle.top)
        container.style.left = `${left + movementX}px`
        container.style.top = `${top + movementY}px`
    }

    function mouseUp() {
        window.removeEventListener('mousemove', onDrag)
        window.removeEventListener('mouseup', mouseUp)
    }


    function resizeCube(wheelEvent) {
        size = wheelEvent.deltaY > 0 ? size - 15 : size + 15
        if (size > 50 && size < 540){
            imgCube.forEach(img => img.style.width = `${size}px`)
            imgCube.forEach(img => img.style.height = `${size}px`)
            imgCube[0].style.transform = ` rotateY(0deg) translateZ(${size / 2}px)`
            imgCube[1].style.transform = ` rotateY(90deg) translateZ(${size / 2}px)`
            imgCube[2].style.transform = ` rotateY(180deg) translateZ(${size / 2}px)`
            imgCube[3].style.transform = ` rotateY(-90deg) translateZ(${size / 2}px)`
            imgCube[4].style.transform = ` rotateX(-90deg) translateZ(${size / 2}px)`
            imgCube[5].style.transform = ` rotateX(90deg) translateZ(${size / 2}px)`
        }
    }

}



cube.addEventListener("mousedown", mousedown)
cube.addEventListener("click", changeWalls)


