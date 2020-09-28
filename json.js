//JSON.stringify, JSON.parse
//JSON.stringify แปลงข้อมูลชนืดต่างๆให้เป็น string ในรูปแบบ JSON
//JSON.parse แปลง JSON ให้เป็นข้อมูลอื่นๆ

let aObjects = {
    code: '001',
    name: 'Prawit Kosalanun',
    age: 50
}
aJSON = JSON.stringify(aObjects)
console.log('JSON format',aJSON)

aOBJECT = JSON.parse(aJSON)
console.log('Object format', aOBJECT)
console.log(aOBJECT.code, aOBJECT.name)

// เครื่องหมาย = ของ object คือการ link
// การเปลี่ยนแปลงจะเหมือนกันทั้ง 2 objects
let aObjects2 = aObjects
console.log(aObjects)
console.log(aObjects2)
aObjects2.name = 'Raveevarn Chanvijit'
console.log(aObjects)
console.log(aObjects2)

//การcopy objects 
//ทั้ง2objectsจะแยกจากกันเป็นอิสระ
aObjects2 = JSON.parse(JSON.stringify(aObjects))
aObjects2.name = 'Prawit Kosalanun'
console.log(aObjects)
console.log(aObjects2)

