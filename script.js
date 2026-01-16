// 21. فنكشن تعيد أول عنصر في المصفوفة
function getFirstElement(arr) {
    if (arr.length === 0) {
        return null;
    } else  {
     return arr[0];
    }
}
console.log('getFirstElement([1,2,3]) =', getFirstElement([1,2,3]));

// 22. فنكشن تعيد آخر عنصر في المصفوفة
function getLastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}
console.log('getLastElement([1,2,3]) =', getLastElement([1,2,3]));

// 23. فنكشن تعيد مجموع كل الأرقام في المصفوفة
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log('sumArray([1,2,3,4]) =', sumArray([1,2,3,4]));

// 24. فنكشن تعيد متوسط أرقام المصفوفة
function averageArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
}
console.log('averageArray([1,2,3,4]) =', averageArray([1,2,3,4]));

// 25. فنكشن تبحث عن عنصر داخل المصفوفة وتعيد true إذا وجد
function findElement(arr, elem) {
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] == elem) {
            return true;
        }
    }
    return false;
}
console.log('findElement([1,2,3],2) =', findElement([1,2,3],2));

// 26. فنكشن تعيد مصفوفة جديدة تحتوي على الأرقام الزوجية فقط من المصفوفة الأصلية
function filterEvens(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log('filterEvens([1,2,3,4]) =', filterEvens([1,2,3,4]));

// 27. فنكشن تعكس ترتيب المصفوفة
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length -1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log('reverseArray([1,2,3]) =', reverseArray([1,2,3]));

// 28. فنكشن تعكس النص (مثال: "abc" تصبح "cba")
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log('reverseString("abc") =', reverseString("abc"));

// 29. فنكشن تحول جميع حروف النص إلى حروف كبيرة (Uppercase)
function toUpper(str) {
    if (str === "") {
        return "";
    } else {
        return str.toUpperCase();
    }
}
console.log('toUpper("hello") =', toUpper("hello"));

// 30. فنكشن تحذف المسافات من بداية ونهاية النص
function trimString(str) {
    if (str === "") {
        return "";
    } else {
        return str.trim();
    }
}
console.log('trimString("  hello  ") =', trimString("  hello  "));
