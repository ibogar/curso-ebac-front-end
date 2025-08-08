function Media(type, launchYear, author){
    this.type = type,
    this.launchYear = launchYear,
    this.author = author

    this.description = function (){
        console.log(`${this.title} is a ${this.type} created by ${this.author} in ${this.launchYear}`)
    }
}

function Anime(title, launchYear, author, type) {
    this.title = title;
    let _type = "anime";
    this.setType = function(){
        this.type = _type;
    }
    Media.call(this, type, launchYear, author);
    this.setType();
}

function Manga(title, launchYear, author, type) {
    this.title = title;
    let _type = "manga";
    this.setType = function(){
        this.type = _type;
    }
    Media.call(this, type, launchYear, author);
    this.setType();
}

var demonSlayer = new Anime("Demon Slayer - Mugen Train", 2021, "Koyoharu Gotouge");
var onePiece = new Manga("One Piece", 1999, "Eichiro Oda");
var naruto = new Media("manga", 2002, "Masashi Kishimoto")
naruto.title = "Naruto";

demonSlayer.description();
onePiece.description();
naruto.description();