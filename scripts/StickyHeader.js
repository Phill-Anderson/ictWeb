import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector("#nav");
        this.pageSections = document.querySelectorAll(".page-section");
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    events() {
        window.addEventListener("scroll", throttle(() => {
            this.checkScrollDirection();
            if (window.scrollY > 60) {
                this.siteHeader.classList.add("scrolled");
            } else {
                this.siteHeader.classList.remove("scrolled");
            }
            this.pageSections.forEach(el => this.calcSection(el));
        }, 200));
        window.addEventListener("resize", debounce(() => {
            console.log("browser resize хийгдлээ");
            this.browserHeight = window.innerHeight;
        }, 300));
    }

    /*   runOnSroll() {
          this.checkScrollDirection();
          if (window.scrollY > 60) {
              this.siteHeader.classList.add("scrolled");
          } else {
              this.siteHeader.classList.remove("scrolled");
          }
          this.pageSections.forEach(el => this.calcSection(el));
      } */

    checkScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
            this.scrollDirection = "down";
        } else {
            this.scrollDirection = "up";
        }
        this.previousScrollY = window.scrollY; //  previousScrollY - ийн утгыг одоо байгаа scrollY -ийн утгаар шинэчилж байна.
    }

    calcSection(el) {
        // offsetTop - тухайн элемэнтийн дээд ирмэг
        // offsetHeight - тухайн элемэнтийн өндөр 
        // offsetTop + offsetHeight = тухайн элемэнтийн доод ирмэг
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100; // scroll нийт browserHeight - ийн хэдэн хувь дээр нь явж байгааг харуулна
            if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == "down" || (scrollPercent < 33 && this.scrollDirection == "up")) {
                let matchingLink = el.getAttribute("data-matching-link");
                document.querySelectorAll(`#menu a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"));
                document.querySelector(matchingLink).classList.add("is-current-link");
            }

        }
    }

}
export default StickyHeader;