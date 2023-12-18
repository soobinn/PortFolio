// const lenis = new Lenis();

// gsap.registerPlugin(CustomEase);
// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
// });
// gsap.ticker.lagSmoothing(0);
/*************************************************/

//loading
const numList = document.querySelectorAll(".loading .num-box .num:first-child");

ldTl = gsap.timeline();

$(".loading .text-box .text span").each(function (index) {
    ldTl.to($(this), {
        y: 0,
        duration: 0.5,
        delay: index * 0.01,
    });
});

gsap.from(numList, {
    textContent: 0,
    duration: 3,
    snap: { textContent: 1 },
    stagger: 0.1,
    onComplete: () => {
        gsap.to(".loading .text-area", {
            duration: 0.5,
            opacity: 0,
            ease: "power4.easeInOut",
        });

        gsap.to(".loading", {
            duration: 0.5,
            top: "-100%",
            delay: 0.8,
            ease: "power4.easeInOut",
        });
    },
});
// header

$("[data-menu]").each(function () {
    $(this).click(function (e) {
        e.preventDefault();
        var dataValue = $(this).data("menu");
        scrollToMenu(dataValue);
        $(this).addClass("on").siblings().removeClass("on");
    });
});

function scrollToMenu(menuSelector) {
    var conHeight = $(menuSelector).offset().top - 50;
    $("html, body").animate({ scrollTop: conHeight }, 500);
}

$("header .nav-list .mobile-menu").click(function (e) {
    if ($(".mobile-con ").hasClass("on")) {
        $(".mobile-menu .circle").toggleClass("on");
        $(".mobile-con").toggleClass("on");
    } else {
        $(".mobile-menu .circle").toggleClass("on");
        $(".mobile-con").toggleClass("on");
    }
});

$(".mobile-con .mobile-list a").click(function (e) {
    $(".mobile-menu .circle").removeClass("on");
    $(".mobile-con").removeClass("on");
});
// 메인 text

const headTxt = new SplitType(".sc-main .text-wrap .desc .text:nth-child(2)", {
    types: "words, chars",
});

gsap.from(".sc-main .text-wrap .desc .text:nth-child(2) .char", {
    yPercent: 100,
    stagger: {
        from: "random",
        each: 0.1,
    },
    scrollTrigger: {
        trigger: ".sc-main",
        start: "30% 0%",
        end: "100% 80%",
        scrub: 1,
    },
});

lineTl = gsap.timeline();

$(".header-module").each(function () {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: this,
            start: "0% 50%",
            end: "100% 100%",
        },
    });

    tl.to(this, {
        "--width": "100%",
    })
        .to($(this).find(".header-line div"), {
            opacity: 1,
            stagger: 0.1,
        })
        .to($(this).find(".inner"), {
            y: 0,
            opacity: 1,
        });
});

// contact배경 바꾸기
ScrollTrigger.create({
    trigger: ".sc-contact",
    start: "0% 50%",
    end: "100% 50%",
    onToggle: function (self) {
        if (self.isActive) {
            $("body").addClass("on");
        } else {
            $("body").removeClass("on");
        }
    },
});
