function ANAGRAM_CHECK(Str1) {
    var str2 = Str1.toLowerCase();
    var array = [];
    for (var i = 0; i < str2.length; i++) {
        array[i] = str2.charAt(i);
    }

    var tmp;
    //sorting array after splitting it
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    //The join() method joins the sorted array  and returns the string.
    var text = "";
    for (var i = 0; i < array.length; i++) {
        text += array[i];
    }
    return text;
}
//function call
var Str1 = ANAGRAM_CHECK("Mayank Omar");
var Str2 = ANAGRAM_CHECK("Mayank Omar");
//calculating length of  Sorted Strings
var length_Str1 = Str1.length;
var length_Str2 = Str2.length;
//camparing length of Sorted Strings 
if (length_Str1 == length_Str2) {
    //if both Strings are same will output it as Anagram
    if (Str1 == Str2) {
        console.log("True");
    }
    //else it will output as not anagram
    else {
        console.log("False");
    }

} else {
    console.log("Strings are of different length");
}