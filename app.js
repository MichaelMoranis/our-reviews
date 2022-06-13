// local reviews data
const reviews = [
   {
     id: 1,
     name: "susan smith",
     job: "Desing Gráfico",
     img:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
     text:
       "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
   },
   {
     id: 2,
     name: "anna johnson",
     job: "Desenvolvedora Web",
     img:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
     text:
       "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
   },
   {
     id: 3,
     name: "peter jones",
     job: "Desing de Interiores",
     img:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
     text:
       "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
   },
   {
     id: 4,
     name: "bill anderson",
     job: "O Chefe",
     img:
       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
     text:
       "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
   },
 ];
 // SELECIONAR ITEMS

 const img = document.getElementById("person-img");
 const author = document.getElementById("author");
 const job = document.getElementById("job");
 const info = document.getElementById("info");

 const prevbtn = document.querySelector(".prev-btn");
 const nextbtn = document.querySelector(".next-btn");
 const randomBtn = document.querySelector(".random-btn");

 // DEFINIR ITENS INICIAIS

 let currentItem = 0;

 // CARREGAR ITEM INICIAL 

 window.addEventListener("DOMContentLoaded",function() {
   showPerson(currentItem);
 });

 // mostrar pessoa com base no item 

 function showPerson(person) {
   const item = reviews[person];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
 };

 // mostrar proxima pessoa 

 nextbtn.addEventListener("click", function() {
   currentItem++;
   if (currentItem > reviews.length - 1) {
      currentItem = 0;
   } 
   showPerson(currentItem);
 });
