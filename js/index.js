window.onload = function () {
    var banner = new Banner();
    banner.start();
};

class Banner{
    constructor () {
        this.banners = [
            "img/banner/banner0.png", 
            "img/banner/banner1.png",  
            "img/banner/banner2.png", 
            "img/banner/banner3.png"
        ];

        this.backImages = [
            "img/banner/banner1.png",  
            "img/banner/banner2.png", 
            "img/banner/banner3.png"
        ];

        this.mainImage = 0;

        this.mainBanner = document.querySelector(".main-banner");
        this.backBanner = document.querySelector(".back-banner");
        this.addMainImage();
        this.addImages();
    }

    addImages() {
        this.backBanner.innerHTML = `${this.backImages.map(image => `
           <div class="col-4 box text-center">
                <div class="product"> 
                    <img src="${image}">
                </div>
            </div>

        `).join('')}`;
    }

    addMainImage() {
        this.mainBanner.innerHTML = `<img src="${this.banners[this.mainImage]}">`;
    }

    nextImage() {
        this.mainImage++;

        if(this.mainImage == this.banners.length) {
            this.mainImage = 1;
        }

        this.addMainImage();
    }

    previousImage() {
        this.mainImage--;
        this.addMainImage();
    }

    start() {
        setInterval(() => {
            this.nextImage();
        }, 4000);
    }
}

 var submitForm = function(event) {

    event.preventDefault();

    var form = event.target;

    var http = new XMLHttpRequest();
    http.open(form.method.toUpperCase(), 'http://api.vtexcrm.com.br/corebiz/dataentities/TE/documents', true);
    http.setRequestHeader('Accept', 'application/vnd.vtex.ds.v10+json');
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(new FormData(form));

    form.reset();
}