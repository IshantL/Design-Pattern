var cats =[{
  name: "cat A",
  image: 'cat.jpg'
},
{
  name: "cat B",
  image: 'cat2.jpg'
}]

var elem = document.getElementById('cat-image');
var catImages = cats.map((t)=>{
    return `<div>${t.name}</div><img src = ${t.image} alt = "cat" />`
})
elem.innerHTML =catImages;

var clicked =0;
 elem.addEventListener('click',()=>{
   console.log("Cat clicked");
   clicked ++;
  document.getElementById("show-result").innerHTML = clicked;
 })

