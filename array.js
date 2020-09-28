/*
//Array
let studentList = ['Prawit', 'Raveevarn', 'Thavin', 'Pravitra']
console.log(studentList);
for (let i = 0; i < studentList.length; i++) {
    console.log('Student number ', i, ' is ' , studentList[i])
}

let List = ['string', 1, {id: 1}, ['code1']]
console.log(List)
for (let i = 0; i < List.length; i++) {
    console.log('Array number ', i, ' is ' , List[i])
}
*/

// Array.push สำหรับเพิ่มข้อมูลต่อท้ายใน array
// Array.pop สำหรับลบข้อมูลสุดท้ายใน array
// Array.unshift สำหรับแทรกข้อมูลด้านหน้าตัวแรก
// Array.shift สำหรับลบข้อมูลด้านหน้าตัวแรก
// Array.splice เป็นการลบ เพิ่ม ในตำแหน่งที่ต้องการ
// Array.splice( start, deleteCount, add1, add2, add...)

let aList = ['1', '2']
console.log('Original', aList)
aList.push('3')
aList.push('4')
aList.push('5')
console.log('After push', aList)
aPop = aList.pop()
console.log('After pop', aList)
console.log('Pop value', aPop)
aShift = aList.shift()
console.log('After shift', aList)
console.log('Shift value', aShift)
aUnshift = aList.unshift('A')
console.log('After unshift', aList)
console.log('Unshift value', aUnshift)

aList.splice(aList.length - 1,1)
console.log('After splice (length - 1,1)', aList)
aList.splice(2,0,'2.1','2.2')
console.log(aList)