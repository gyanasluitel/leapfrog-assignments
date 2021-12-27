class Carousel {
    constructor(container, {transitionTime, holdTime}) {
        // Current Index of Image
        this.currentIndex = 0;
        
        this.width = "600px";
        this.height = "420px";
        this.position = 0;
        this.indicatorList = [];
        this.holdTime = holdTime;
        // this.transitionSpeed= transitionTime;
        this.transitionSpeed = (parseInt(this.width) / transitionTime);
        this.autoPlayInterval = null;
 
        // CAROUSEL
        this.carouselContainer = document.querySelector(container);
        this.carouselContainer.style.width = this.width;
        this.carouselContainer.style.height = this.height;
        this.carouselContainer.style.margin = "2% auto";
        this.carouselContainer.style.position = "relative";
        this.carouselContainer.style.overflow = "hidden";


        // // CAROUSEL WRAPPER AND IMAGES
        this.carouselImageWrapper = this.carouselContainer.querySelector(".carousel-image-wrapper");
        this.carouselImageWrapper.style.position = "absolute";
        this.carouselImageWrapper.style.left = "-0px";

        this.images = this.carouselContainer.querySelectorAll(".carousel-image-wrapper img");
        this.imagesLength = this.images.length;
        this.carouselImageWrapper.style.width = (parseInt(this.width) * this.imagesLength) + "px"; 

        for (let i = 0; i < this.imagesLength; i++) {
            this.images[i].style.width = this.width;
            this.images[i].style.height = this.height;
            this.images[i].style.float = "left";
        }


        // LEFT BUTTON
        this.leftButton = document.createElement("button");
        this.leftButton.innerHTML = "&#8592;";
        this.leftButton.setAttribute("class", "leftButton");
        this.leftButton.style.position = "absolute";
        this.leftButton.style.top = "50%";
        this.leftButton.style.transform = "translate(0, -50px)";
        this.leftButton.style.backgroundColor = 'rgba(0,0,0,0)';
        this.leftButton.style.opacity = "0.8";
        this.leftButton.style.color = "#d5d7db";
        this.leftButton.style.padding = "2px";
        this.leftButton.style.border = "none";
        this.leftButton.style.fontSize = "48px";
        this.leftButton.style.left = "0px";

        this.leftButton.addEventListener("mouseover", () => {
            this.leftButton.style.cursor = "pointer";
            this.leftButton.style.color = "#fff";
            this.leftButton.style.opacity = "1";
            this.leftButton.style.backgroundColor = "rgba(0,0,0,0.4)"
        });
        this.leftButton.addEventListener("mouseout", () => {
            this.leftButton.style.color = "#d5d7db";
            this.leftButton.style.backgroundColor = 'rgba(0,0,0,0)';

        });
        this.leftButton.addEventListener("click", () => this.previousImage());
        
        this.carouselContainer.appendChild(this.leftButton);



        // RIGHT BUTTON
        this.rightButton = document.createElement("button");
        this.rightButton.innerHTML = "&#8594;";
        this.rightButton.setAttribute("class", "rightButton");
        this.rightButton.style.position = "absolute";
        this.rightButton.style.top = "50%";
        this.rightButton.style.transform = "translate(0, -50px)";
        this.rightButton.style.backgroundColor = 'rgba(0,0,0,0)';
        this.rightButton.style.opacity = "0.8";
        this.rightButton.style.color = "#d5d7db";
        this.rightButton.style.padding = "2px";
        this.rightButton.style.border = 'none';
        this.rightButton.style.fontSize = '48px';
        this.rightButton.style.right = "0px";

        this.rightButton.addEventListener("mouseover", () => {
            this.rightButton.style.cursor = "pointer";
            this.rightButton.style.color = "#fff";
            this.rightButton.style.opacity = "1";
            this.rightButton.style.backgroundColor = "rgba(0,0,0,0.4)"
        });

        this.rightButton.addEventListener("mouseout", () => {
            this.rightButton.style.color = "#d5d7db";
            this.rightButton.style.backgroundColor = "rgba(0,0,0,0)"
        });

        this.rightButton.addEventListener("click", () => this.nextImage());
        
        this.carouselContainer.appendChild(this.rightButton);

        this.indicatorButtons();

        this.autoPlay();
    }   
        

    // INDICATOR BUTTONS
    indicatorButtons = () => {
        this.indicatorGroup = document.createElement("div");
        this.indicatorGroup.setAttribute("class", "indicator-group");
        this.indicatorGroup.style.position = "absolute";
        this.indicatorGroup.style.bottom = "5px";
        this.indicatorGroup.style.width = "fit-content";
        this.indicatorGroup.style.left = "50%";
        this.indicatorGroup.style.transform = "translate(-50px, 0)";

        for (let i = 0; i < this.imagesLength; i++) {
            const newIndicator = document.createElement("input");
            newIndicator.type = "radio";
            newIndicator.name = "indicator" + "-" + "i";
            newIndicator.value = i;
            newIndicator.style.margin = "0 3px";

            newIndicator.addEventListener("mouseover", () => {
                newIndicator.style.cursor = "pointer";
            });

            newIndicator.addEventListener("click", () => {
                let previousIndex = this.currentIndex;
                this.currentIndex = newIndicator.value;

                if (previousIndex === this.currentIndex) {
                    return;
                } else {
                    this.imageAnimate();
                }
            });

            this.indicatorList.push(newIndicator);
            this.indicatorGroup.appendChild(newIndicator);
        };

        this.indicatorList[this.currentIndex].checked = true;
        this.carouselContainer.appendChild(this.indicatorGroup);
    };

    // WHEN PREVIOUS BUTTON (<-) IS CLICKED
    previousImage = () => {
        if (this.currentIndex === 0){
            this.currentIndex = this.imagesLength - 1;
        } else {
            this.currentIndex--;
        }
        this.imageAnimate();
        // console.log(this.currentIndex);
    }

    // WHEN NEXT BUTTON (->) IS CLICKED
    nextImage = () => {
        if (this.currentIndex === this.imagesLength - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        this.imageAnimate();
    }

    // IMAGE TRANSITION ANIMATION
    imageAnimate = () => {
        clearInterval(this.autoPlayInterval);
        let startAnimation = window.requestAnimationFrame(this.imageAnimate);
        if (this.position === - (this.currentIndex * parseInt(this.width))) {
            window.cancelAnimationFrame(startAnimation);
        } else if (this.position < -(this.currentIndex * parseInt(this.width))) {
            this.position += this.transitionSpeed;
        } else {
            this.position -= this.transitionSpeed;
        }

        this.carouselImageWrapper.style.left = this.position + "px";
        this.indicatorList[this.currentIndex].checked = true;

        clearInterval(this.autoPlayInterval);
        this.autoPlay();
    }

    autoPlay = () => {
        this.autoPlayInterval = setInterval(() => {
            if (this.currentIndex < this.imagesLength - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }

            // this.currentIndex = (this.currentIndex + 1) % this.imagesLength 
            // this.indicatorList[this.currentIndex].checked = true;
            this.imageAnimate();
        }, this.holdTime);
    };
}


const carousel = new Carousel(".carousel-container", {transitionTime: "20", holdTime: "2000"});

const carousel2 = new Carousel(".carousel-container-2", {transitionTime: "20", holdTime: "4000"});

