//Number
var number1 = 5;
console.log(number1)

var number2 = 6;

var sum = number1 + number2
console.log(sum)

//String
var text2 = "Hello"
var text1 = "World"
var text = text1 + " " + text2 + " " + sum
console.log(text)

//Boolean
var isTrue = true
var isFalse = false
console.log("Bien nay dang co gia tri la: " + isFalse)

//Array
var array = [1, 2, 3, 4, "Ha Noi", true, false]
var lengthArray = array.length
console.log(lengthArray)

//Truy xuất phần tử cuối = độ dài - 1
var data = array[lengthArray - 1]
console.log(data)


//Array example 2 -  Method : Pop - remove the last variable 
var array = [1, 2, 3, 4, "Ha Noi", true, false]
var lengthArray = array.length
console.log(lengthArray)

var data = array[lengthArray - 1]

array.pop()
console.log(array)

// Array example 3 - Method : Push - substitute the last variable
array.push(100)
console.log(array)

//Array example 4 - Method: Shift - delete the first variable; Unshift - substitute the first variable
array.unshift('Vietnam')
console.log(array)

//var arr1 = [1,2,3]
//var arr2 = [4,5,6]
//var arr3 = [7,8,9]
//var arr = arr1.concat(arr2, arr3)
//var arr = [...arr1, ...arr2]
//console.log(arr)

//i+=2 i=i+2

// for (var i = 0; i < arr.length - 1; i++) {
//     if (arr[i] % 2 == 0) { 
//         console.log("số chẵn : " + arr[i]) }
//     else { 
//         console.log("số lẻ : " + arr[i]) }
//     }

// tạo ra một biến tổng
// For
// Qua mỗi lần lặp thì sum + a[i]
// Ra khỏi vòng lặp thì in ra giá trị của sum

// var sum = 0
// for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr [i]
//     console.log("Sum : " + sum)
// } 
// console.log("Sum : " + sum)
    
// tạo ra một mảng arr2 có giá trị gấp 2 lần giá trị của các phần tử arr với arr = [1,2,3,4,5,6]
// Sử dụng vòng lặp For 
// Method push ()
// Mục tiêu arr2 = [2,4,6,8,10,12]

// var arr = [1, 2, 3, 4, 5, 6]

// var arr2 = []
// for (var i = 0; i< arr.length; i++) {
//     double = arr[i] * 2
//     arr2.push (double) 
// }
// console.log (arr2)

// Object
// var obj = { property : "value-text", number }

var user = {
    name : "Thu Hang",
    age : 20,
    city : "Ha Noi",
    isMarried : false
}
// console.log(user.name)
// console.log(user.isMarried)

//Gán lại giá trị cho thuộc tính
user.name = "Do Thu Hang"

// Thêm thuộc tính mới cho object
user.email = "hang@techmaster.vn"
console.log(user)

//Xoá thuộc tính của object
delete user.age
console.log(user)