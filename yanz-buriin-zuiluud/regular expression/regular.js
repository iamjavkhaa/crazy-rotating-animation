

function reg() {
    var sentence = 'My name is Naranda.Is And he is my friend. His name is blabla is...';
    var regEx = / is\.| is |\.is/ig;     //  i g  2iin bairiig solij bolno
                            // i means ignore the case tom jijig usgiig yalgahgui
                            // regEx.test(sentence)  --> boolean butsaadag
                            // sentence.match(regEx)  --> object esvel massive butsaana
                            // g gedeg n taarch baigaa buh string iig avna g baihgui bol ehnii taarsan string iig l avna
    console.log(regEx.test(sentence)) 
    sentence.match(regEx);
    var regMass = sentence.match(regEx);
    return regMass;
}
console.log(reg())




function date() {
    var sentence = '3/18/2022';
    sentence = sentence.replace(/\//g, '-');    //  \ ---> ene bol escape operator
                                                //  | ---> ene bol or operator
    sentence.replaceAll("/", '-')
    return sentence;
}
console.log(date())







function haalt() {
    var sentence = 'My name is Naranda.Is And he is my friend. His name is blabla is...'
    var reg1 = /[is]/ig;  //  i bolon s gedeg usgiig tus tusad n haij avna  a-z A-z 0-9 gej bichij boln
    var reg1 = /[0-9a-z]/g;
    var reg1 = /[0-9a-z]/g; 
    var reg1 = /[^a-z ]/g;   //  a-z hurtelh  usegnuudees busadiig n avna 
    var reg1 = /[^a-z ]/g;   //  a-z hurtelh  usegnuudees busadiig n avna. ard taliin white spa


    return sentence.match(reg1)
}


var str = 'My name is Julia, Hello Duolingo #$#^&@*#$+'
var reg2 = /^.{10}$/;  //  10 shirheg index esu zuerl 10 shirheg charactertei baih yostoig ^ iltgej bna
                    //  $ meang 10 characteraar togsoh yostoig iltgej bna.
                    

function countCase(sentence, word) {
    const regEx = new RegExp(word);
    console.log(sentence.match(word));
}