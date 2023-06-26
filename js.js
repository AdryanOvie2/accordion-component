const accordions = document.getElementsByClassName("accordion-header");
for ( let i = 0 ; i < accordions.length ; i++ ){
    accordions[i].addEventListener("click", function (){
        this.classList.toggle("active");
        const accordionPanel = this.nextElementSibling;
        accordionPanel.classList.toggle("accordion-expanded");
    });
}