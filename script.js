async function loadSection(id,file){
try{

const response=await fetch(file);

const html=await response.text();

document.getElementById(id).innerHTML=html;

}

catch(error){

console.log("Error loading:",file);

}

}

loadSection(
"heroSection",
"sections/hero.html"
);

loadSection(
"aboutSection",
"sections/about.html"
);

loadSection(
"howSection",
"sections/howitworks.html"
);

loadSection(
"foundersSection",
"sections/founders.html"
);

loadSection(
"trustSection",
"sections/trust.html"
);

loadSection(
"contactSection",
"sections/contact.html"
);

loadSection(
"footerSection",
"sections/footer.html"
);
