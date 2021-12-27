import {strLimit, strLimitWords, strLimitWordsByLength} from "../string/limit";

const xpressMongo = "A light mongodb model/helper library for nodejs, provides modeling for your documents while keeping you very close to mongodb native syntax"
const noSpace = "sdfghjkdfuytefvbndmsnbvsghjfkjhgdfghjskjhgdhjkahjdgvhsbjnbvgcsdvhbjknshghhjksfhghhsdhghdsjk";

console.log("strLimit =>", strLimit(xpressMongo, 100, "..."))
console.log("strLimitWords =>", strLimitWords(xpressMongo, 10, "..."))
console.log("strLimitWordsByLength =>", strLimitWordsByLength(noSpace, 10, "..."))

// console.log(strLimitWords("Do have a lovely day.", 4, "..."))