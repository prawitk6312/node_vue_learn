//ตัวแปร object 
let student = {
    code: '001',
    name: 'Prawit'
}
console.log(student)
console.log(student.code, student.name)
console.log(student['code'])
console.log(student['name'])

//การเพิ่ม property ใน object
student.age = 50;
console.log(student)
//การลบ property ใน object
delete student.age
console.log(student)
