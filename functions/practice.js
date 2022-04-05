function floor(diameter) {
    // var diameter = 8
    var radius = diameter/2
    var floorArea = Math.PI * (radius * radius)
    // console.log(floorArea)
    return floorArea
}
// floor(8)

function walls(diameter, height) {
    // var diameter = 10
    // var height = 8 
    var radius = diameter/2
    var circumference = 2 * Math.PI * radius
    var wallArea = circumference * height 
    // console.log(wallArea)
    return wallArea
}
// walls(8, 10)



function materialsNeeded() {

    var d = document.getElementById("across").value 
    var h = document.getElementById("height").value

    var carpetNeeded = Math.ceil(floor(d))
    var paintNeeded = Math.ceil(walls(d, h))

    console.log('Carpet need is '+carpetNeeded+'sqft')
    console.log('Paint need is'+paintNeeded+'sqft')
}

// materialsNeeded()
