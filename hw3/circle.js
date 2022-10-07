
const circleArea = (radius) => {

    return   Math.PI * radius ** 2;
}


const circleCircumference = (radius) => {
    return 2 * Math.PI * radius;
}

module.exports = {
    circleArea,
    circleCircumference
}