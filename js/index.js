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

    start() {
        setInterval(() => {
            this.nextImage();
        }, 4000);
    }
}

 var submitForm = function(event) {

    event.preventDefault();

    var form = document.getElementById('formSubmit');

    var jsonData = JSON.stringify({
        'name'   : form.name.value,
        'email'  : form.email.value,
        'phone'  : form.phone.value,
        'notice' : form.notice.value
    });

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'http://api.vtexcrm.com.br/corebiz/dataentities/TE/documents', true);
    httpRequest.setRequestHeader('Accept', 'application/vnd.vtex.ds.v10+json');
    httpRequest.setRequestHeader("Content-type", "application/json");
    httpRequest.send(jsonData);

    form.reset();
};