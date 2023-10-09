function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();
  var clothesData=[
    {
      "id": id(),
      "name": "Blue Cotton T-Shirt",
      "price": 19.99,
      "category": "Men",
      "image": " https://www.theploumanach.com/cdn/shop/products/smart-casual-cotton-shirt-royal-blue-clothing-678.jpg?v=1600798297 "
    },
    {
        "id": id(),
        "name": "Slim Fit Jeans",
        "price": 49.99,
        "category": "Men",
        "image": "https://th.bing.com/th/id/R.287ac34fcad69d52c99414d388defe4e?rik=n78yekflCJ5oCA&riu=http%3a%2f%2fwww.repertoirefashion.co.uk%2fblog%2fwp-content%2fuploads%2f2016%2f03%2fHM-Mens-Skinny-Denim-Jeans-Harvey-Haydon-Shoot-002.jpg&ehk=UvzMgbHBXhjrZMff5sZve9S3cyqLI2SmGMEE2RqKDhY%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        "id": id(),
        "name": "Black Leather Jacket",
        "price": 79.99,
        "category": "Men",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81gPumH6e1L._AC_UL1500_.jpg"
      },
      {
        "id": id(),
        "name": "Floral Sundress",
        "price": 39.99,
        "category": "Women",
        "image": "https://i.pinimg.com/originals/31/0c/25/310c257864439ee5ab64edbbbacac059.jpg"
      },
      {
        "id": id(),
        "name": "Running Shoes",
        "price": 59.99,
        "category": "Men",
        "image": "https://n.nordstrommedia.com/id/842e824a-ec57-42aa-ba44-fa100756a349.jpeg?h=900&w=750"
      },
      {
        "id": id(),
        "name": "Striped Polo Shirt",
        "price": 24.99,
        "category": "Men",
        "image": "https://www.gant.co.uk/on/demandware.static/-/Sites-gant-master/default/dw11715128/PhotoStudio/time__1680183945__202302-2062023-852-model-fv-1.jpg"
      },
      
      {
        "id": id(),
        "name": "Khaki Chinos",
        "price": 34.99,
        "category": "Men",
        "image": "https://i.pinimg.com/originals/ba/38/9f/ba389fa00ca06f796bf80ce4c14dddd3.jpg"
      },
      {
        "id":id(),
        "name": "Denim Jacket",
        "price": 59.99,
        "category": "Women",
        "image": "https://oldnavy.gap.com/webcontent/0052/755/033/cn52755033.jpg"
      },
      {
        "id": id(),
        "name": "Maxi Evening Gown",
        "price": 89.99,
        "category": "Women",
        "image": "https://th.bing.com/th/id/OIP.pb9Zr30qbAvSs29qy4O6AQHaJ4?pid=ImgDet&rs=1"
      },
      {
        "id": id(),
        "name": "Sneakers",
        "price": 44.99,
        "category": "Men",
        "image": "https://th.bing.com/th/id/R.3bd987dd69cde14402d976d70499fe89?rik=hI4KM7onw2%2ftHA&pid=ImgRaw&r=0"
      },
      {
        "id": id(),
        "name": " Print T-Shirt",
        "price": 22.99,
        "category": "Men",
        "image": "https://m.media-amazon.com/images/I/71ejKn8jYtL._AC_UY1100_.jpg"
      },
      {
        "id": id(),
        "name": "Cargo Shorts",
        "price": 29.99,
        "category": "Men",
        "image": "https://www.hallensteins.com/content/products/hb-legion-cargo-short-tan-front-10001680.jpg?width=2464"
      },
      {
        "id": id(),
        "name": "Leather Boots",
        "price": 69.99,
        "category": "Men",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoSodWtO8h7PxCMZ-h-VthiY3zZyMLDMi3NynC9oY&s"
      }
     
    ]
////////////////////////append/////////////

function showData(){
  each(clothesData,function(element,i){
  $(".list").append(`<div class="listone"><img class="img" src=${element.image} ><div id="name"><div>${element.name}</div><div>${element.price}$</div><div>category:${element.category}</div></div><div>`)
})

}
showData()
///////////////////search"////////////////
function searched(){
  var input = $("#put").val()
  each(clothesData,function(element,i){
    if(element.name===input || element.category===input){
    $(".list").hide()
    $(".search").append(`<div class="listone"><img class="img" src=${element.image} > <div id="name"><div>${element.name}</div><div>${element.price}</div><div>${element.category}</div></div></div>`)
    }
  })

}


///////////////////filterByCategory//////////
var men =[]
var women = []

function filterClothes(){
  each(clothesData,function(element,i){
if(element.category==="Men"){
men.push(element)
}
else {
women.push(element)
}
  })

}
filterClothes()
function byWomen(){
  each(women,function(element,i){
    $(".list").hide()
     $(".women").append(`<div class="listone"><img class="img" src=${element.image} > <div id="name"><div>${element.name}</div><div>${element.price}</div><div>${element.category}</div></div></div>`)
  })
  
}
function byMen(){
  each(men,function(element,i){
    $(".list").hide()
    $(".men").append(`<div class="listone"><img class="img" src=${element.image} > <div id="name"><div>${element.name}</div><div>${element.price}</div><div>${element.category}</div></div></div>`)
  })
  
}
function show(){
  $(".list").show()
}























































/////////////////////helpfunction////////////////////////////

function each(array, func) { 
  for (var i = 0; i < array.length; i++) { 
        func(array[i], i); 
  } 
}

function map(array, f) { 
  var acc = []; 
  each(array, function(element, i) { 
        acc.push(f(element, i)); 
  }); 
  return acc; 
}

function filter(array, predicate) {
var acc = [];
each(array, function (element, index) {
 // notice we added the index here
 if (predicate(element, index)) {
   // notice we added the index here
   acc.push(element);
 }
});
return acc;
}

function reduce(array, f, acc) {
if (acc === undefined) {
 acc = array[0];
 array = array.slice(1);
}
each(array, function (element, i) {
 acc = f(acc, element, i);
});
return acc;
}


















    