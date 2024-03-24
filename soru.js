function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}
Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}
let sorular = [
    new Soru("1- Hangisi javascript paket yönetim uygulamasidir?", { a: "Node.js", b: "Typscript", c: "Npm", d: "Nuget"}, "c"),
    new Soru("2- Hangisi frontend kapsaminda değerlendirilmez? ", { a: "Css", b: "Html", c: "Javascript", d: "Sql"}, "d"),
    new Soru("3- Hangisi backend kapsaminda değerlendirilir?", { a: "Node.js", b: "Typscript", c: "Angular", d: "React"}, "a"),
    new Soru("4- Hangisi javascript programlama dili kullanmaz?", { a: "React", b: "Angular", c: "Vuejs", d: "Asp.net"}, "b"),
];