var b1, k, k2, k3, k4, k5, k6, c1, c2, c3, c4, c5, c6, d, im, ad, c7, nw, c8, h, jp, sp, em, pl, l, nu, nu2,
 p, ot, sm, cr, db, nb, c9;
var c10, c11, l, ac, lb;

function preload(){
im=loadImage("book_guide_hero_books.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-150);
  b1=createElement("h1")
  b1.html("Nikku's Bookcollection")
  b1.position(600,20)
  b1.style("font-family"," Cambria, Cochin, Georgia, Times, 'Times New Roman', serif")
 
   
  k=createElement("h2")
  k.html("To kill a mockingbird")
  k.position(100,100)
  k.style("color","blue")

  k2=createElement("h2")
  k2.html("Speak")
  k2.position(100,160)
  k2.style("color","blue")
   
  k3=createElement("h2")
  k3.html("Sudha murthy:3000 stitches")
  k3.position(100,220)
  k3.style("color","blue")
   
  k4=createElement("h2")
  k4.html("Alchemist")
  k4.position(100,280)
  k4.style("color","blue")

  k5=createElement("h2")
  k5.html("Roald Dahl's : BFG")
  k5.position(100,340)
  k5.style("color","blue")

  k6=createElement("h2")
  k6.html("The Fault in our stars")
  k6.position(100,400)
  k6.style("color","blue")


   
c1=createCheckbox()
c1.position(70,120)

c2=createCheckbox()
c2.position(70,180)

c3=createCheckbox()
c3.position(70,240)

c4=createCheckbox()
c4.position(70,300)

c5=createCheckbox()
c5.position(70,360)

c6=createCheckbox()
c6.position(70,420)

d=createButton("Next")
d.position(500,500)
d.style("borderRadius","20px")
d.style("color","red")
d.mousePressed(ab)
alert("Buy 3 books and get a 20% cashback!")


}

function draw() {
  background(255,165,0); 
  image(im,1000,200,300,200)
  drawSprites();
}

function ab(){
  c1.hide()
  c2.hide()
  c3.hide()
  c4.hide()
  k.hide()
  k2.hide()
  k3.hide()
  k4.hide()
  k5.hide()
  k6.hide()
  c5.hide()
  c6.hide()
 ad=createElement("h1")
ad.html("ADD TO CART")
ad.position(200,160)
ad.style("color","blue")
c7=createCheckbox()
c7.position(150,190)
nw=createElement("h1")
nw.html("BUY NOW")
nw.style("color","purple")
nw.position(200,250)
c8=createCheckbox()
c8.position(150,280)
h=createButton("Proceed")
h.style("borderRadius","20px")
h.position(500,500)
h.style("color","blue")
h.mousePressed(mk)
}

function mk(){
  ad.hide()
  nw.hide()
  c7.hide()
  c8.hide()
alert("CONGRATULATIONS YOU GOT 20% CASHBACK!")
jp=createInput()
jp.position(350,200)
sp=createElement("h2")
sp.html("LOGIN:")
sp.position(650,100)
sp.style("color","brown")
sp.style("font-family", "fantasy")
em=createElement("h3")
em.html("Email id:")
em.position(400,150)
em.style("color","yellow")
pl=createElement("h3")
pl.html("Address:")
pl.position(400,250)
pl.style("color","yellow")
l=createInput()
l.position(350,300)
nu=createElement("h3")
nu.html("Phone no.")
nu.position(400,350)
nu.style("color","yellow")
nu2=createInput()
nu2.position(350,400)
p=createButton("Go Ahead")
p.position(500,500)
p.style("borderRadius","20px")
p.style("color","brown")
p.mousePressed(kl)
h.hide()
}

function kl(){

  jp.hide()
  sp.hide()
  em.hide()
  pl.hide()
  l.hide()
  nu.hide()
  nu2.hide()
  p.hide()
  d.hide()
  ot=createElement("h2")
  ot.html("Your total amount is Rs.250/-")
  ot.position(350,150)
  ot.style("color","purple")
  ot.style("font-family","Verdana, Geneva, Tahoma, sans-serif")
  sm=createElement("h1")
  sm.html("PAY BY:")
  sm.position(200,250)
  cr=createElement("h2")
  cr.html("Credit Card")
  cr.style("color","blue")
  cr.position(230,300)
  db=createElement("h2")
  db.html("Debit Card")
  db.position(230,350)
  db.style("color","green")
  nb=createElement("h2")
  nb.html("Online Netbanking")
  nb.style("color","red")
  nb.position(230,400)
  c9=createCheckbox()
  c9.position(200,330)
  c10=createCheckbox()
  c10.position(200,370)
  c11=createCheckbox()
  c11.position(200,420)
  l=createButton("Select")
  l.position(500,500)
  l.style("borderRadius","20px")
  l.style("color","purple")
  l.mousePressed(gb)
}

function gb(){
  
  ot.hide()
  sm.hide()
  cr.hide()
  db.hide()
  nb.hide()
  c9.hide()
  c10.hide()
  c11.hide()
  l.hide()
  ac=createElement("h2")
  ac.html("Thank you for your payment. We will be dispatching your shipment shortly.")
  ac.position(200,300)
  ac.style("font-family", "serif")
  ac.style("color","green")
 
  lb=createElement("h1")
  lb.html("DO VISIT AGAIN!")
  lb.position(400,500)
  lb.style("font-family", "serif")
  lb.style("color","green")
}

