export class BannerLoader {
  chevrons;
  banner;

  bcakgroundImageSrc;
  preloader;

  imagePos;

  intervalRef;

  constructor() {
    this.chevrons = {
      left: document.getElementById("chevron-left"),
      right: document.getElementById("chevron-right"),
    };
    this.banner = document.getElementById("banner");
    this.backgroundImageSrc = [
      "../../assets/banner/banner-0.jpg",
      "../../assets/banner/banner-1.jpg",
      "../../assets/banner/banner-2.jpg",
      "../../assets/banner/banner-3.jpg",
    ];
    this.imagePos = 0;
    //Preload an image to prevent background flashing
    this.preloader = new Image();
  }

  monitorClicks() {
    this.chevrons.left.onclick = () => {
      this.decrement();
    };
    this.chevrons.right.onclick = () => {
      this.increment();
    };
  }

  setAutoChangeInterval() {
    this.intervalRef = setInterval(() => {
      this.increment();
    }, 5000);
  }

  increment() {
    this.imagePos = (this.imagePos + 1) % 4;
    this.setBannerImage();
  }

  decrement() {
    this.imagePos -= 1;
    this.imagePos = this.imagePos > -1 ? this.imagePos : 3;
    this.setBannerImage();
  }

  setBannerImage() {
    clearInterval(this.intervalRef);
    this.intervalRef = setInterval(() => {
      this.increment();
    }, 5000);
    this.banner.style.backgroundImage = `url(${
      this.backgroundImageSrc[this.imagePos]
    })`;

    this.preloadNextImageToPreventFlashing();
  }

  preloadNextImageToPreventFlashing() {
    this.preloader.src = this.backgroundImageSrc[(this.imagePos + 1) % 4];
  }
}
