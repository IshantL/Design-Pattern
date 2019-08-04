var elem = document.getElementById('cat-image');
var clicked =0;
elem.addEventListener('click',()=>{
  console.log("Cat clicked");
  clicked ++;
  document.getElementById("show-result").innerHTML = clicked;
})

