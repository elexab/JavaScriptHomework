class BookComponent{
    constructor(title, image, id){
            this.title = title;
            this.image = image;
            this.id = id;
        this.template = `
        <div class="card" style="width: 13rem">
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${this.title}</h5> 
        <button id="${this.id}" class="btn btn-primary">Show Description</button>
        </div>
        </div>
        `
        //FIRST BOOK CARD      
        document.addEventListener("click", function(e){
            if (e.target && e.target.id == "first") {
                if (e.target && e.target.id == "first") {
                    if(document.getElementById("first").textContent == "Show Description") {
                                     document.getElementById("post").innerText = desc1 
                                     document.getElementById("first").innerText ="Hide Description"
                                  }
                                  else if(document.getElementById("first").innerText ="Hide Description") {
                                    document.getElementById("post").innerText = ""
                                    document.getElementById("first").innerText = "Show Description"
                                }                
                                 }

                    }  
            });
            //SECOND BOOK CARD
            document.addEventListener("click", function(e){
                if (e.target && e.target.id == "second") {
                    if (e.target && e.target.id == "second") {
                        if(document.getElementById("second").textContent == "Show Description") {
                                         document.getElementById("post").innerText = desc2 
                                         document.getElementById("second").innerText ="Hide Description"
                                      }
                                      else if(document.getElementById("second").innerText ="Hide Description") {
                                        document.getElementById("post").innerText = ""
                                        document.getElementById("second").innerText = "Show Description"
                                    }                
                                     }
    
                        }  
                }); 
            //THIRD BOOK CARD 
            document.addEventListener("click", function(e){
                if (e.target && e.target.id == "third") {
                    if (e.target && e.target.id == "third") {
                        if(document.getElementById("third").textContent == "Show Description") {
                                         document.getElementById("post").innerText = desc3 
                                         document.getElementById("third").innerText ="Hide Description"
                                      }
                                      else if(document.getElementById("third").innerText ="Hide Description") {
                                        document.getElementById("post").innerText = ""
                                        document.getElementById("third").innerText = "Show Description"
                                    }                
                                     }
    
                        }  
                });
            //FOURTH BOOK CARD 
            document.addEventListener("click", function(e){
                if (e.target && e.target.id == "fourth") {
                    if (e.target && e.target.id == "fourth") {
                        if(document.getElementById("fourth").textContent == "Show Description") {
                                         document.getElementById("post").innerText = desc4 
                                         document.getElementById("fourth").innerText ="Hide Description"
                                      }
                                      else if(document.getElementById("fourth").innerText ="Hide Description") {
                                        document.getElementById("post").innerText = ""
                                        document.getElementById("fourth").innerText = "Show Description"
                                    }                
                                     }
    
                        }  
                }); 
            //FIFTH BOOK CARD 
            document.addEventListener("click", function(e){
                if (e.target && e.target.id == "fifth") {
                    if (e.target && e.target.id == "fifth") {
                        if(document.getElementById("fifth").textContent == "Show Description") {
                                         document.getElementById("post").innerText = desc5 
                                         document.getElementById("fifth").innerText = "Hide Description"
                                      }
                                      else if(document.getElementById("fifth").innerText ="Hide Description") {
                                        document.getElementById("post").innerText = ""
                                        document.getElementById("fifth").innerText = "Show Description"
                                    }                
                                     }
    
                        }  
                });                
    } 
      
}

class BookListComponent{
    constructor(){
        this.template = `
    <div>
        ${new BookComponent("Never Have I Ever", "https://prodimage.images-bn.com/pimages/9780062855312_p0_v2_s550x406.jpg", "first").template}
        ${new BookComponent("Ask Again, Yes","https://prodimage.images-bn.com/pimages/9781982106980_p0_v4_s550x406.jpg", "second").template}
        ${new BookComponent("The Silent Patient", "https://prodimage.images-bn.com/pimages/9781250301697_p0_v5_s550x406.jpg", "third").template}
        ${new BookComponent("One Good Deed","https://prodimage.images-bn.com/pimages/9781538750568_p0_v1_s550x406.jpg", "fourth").template}
        ${new BookComponent("The Cellar", "https://prodimage.images-bn.com/pimages/9781492600978_p0_v3_s550x406.jpg", "fifth").template}
        
    </div>    
    `
    }
    
    
}
let redButton = `<button type="button" class="btn btn-danger">Hide Description</button>`;
let htmlString = ""; 

htmlString += `<p id="post"></p>`;

const desc1 = "Amy Whey is proud of her ordinary life and the simple pleasures that come with it—teaching diving lessons, baking cookies for new neighbors, helping her best friend, Charlotte, run their local book club. Her greatest joy is her family: her devoted professor husband, her spirited fifteen-year-old stepdaughter, her adorable infant son. And, of course, the steadfast and supportive Charlotte. But Amy’s sweet, uncomplicated life begins to unravel when the mysterious and alluring Angelica Roux arrives on her doorstep one book club night.";
const desc2 = "Ask Again, Yes is a deeply affecting exploration of the lifelong friendship and love that blossoms between Kate Gleeson and Peter Stanhope, born six months apart. One shocking night their loyalties are divided, and their bond will be tested again and again over the next 40 years. Luminous, heartbreaking, and redemptive, Ask Again, Yes reveals the way childhood memories change when viewed from the distance of adulthood—villains lose their menace and those who appeared innocent seem less so. Kate and Peter’s love story, while haunted by echoes from the past, is marked by tenderness, generosity, and grace.";
const desc3 = "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.";
const desc4 = "It's 1949. When war veteran Aloysius Archer is released from Carderock Prison, he is sent to Poca City on parole with a short list of do's and a much longer list of don'ts: do report regularly to his parole officer, don't go to bars, certainly don't drink alcohol, do get a job—and don't ever associate with loose women.";
const desc5 = "Summer is trapped in a cellar with the man who took her-and three other girls: Rose, Poppy, and Violet. His perfect flowers. His family. But flowers can't survive long cut off from the sun, and time is running out...";

document.getElementById("root").innerHTML = new BookListComponent().template;
document.getElementById("desc").innerHTML = htmlString;

