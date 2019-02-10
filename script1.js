class ToRead {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Book extends ToRead {
    constructor(title, author, genre) {
        super(title, author);
        this.genre = genre;
    }
}

class Checkout {
    constructor() {
        this.literature = [];
    }
    addToList(genre, title) {
        this.literature.push(...new Array(genre).fill(title));
        }
    
    }


//Create new instances
const ss = new ToRead("There Will Come Soft Rains", "Ray Bradbury"); 
const book1 = new Book("A Handmaid's Tale", "Margaret Atwood", "Dystopian");
const book2 = new Book("The Celestine Prophecy", "James Redfield", "Nonfiction");
const book3 = new Book ("The Undoing Project", "Michael Lewis", "Sports/Nonfiction")
const list = new Checkout();

//Add to array
list.addToList("Dystopian", book1);
list.addToList("Sports", book2);
list.addToList("Adventure/Fiction", book3);
list.addToList("Short Story", ss);

alert("Here are the books on your list so far: ");

var lit = list.literature;
for (i=0; i<lit.length; i++) {
    alert(list.literature[i].title);
};

alert("You have " + lit.length + " books total listed.");
