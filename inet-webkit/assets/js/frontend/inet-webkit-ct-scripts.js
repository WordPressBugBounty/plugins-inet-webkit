jQuery(document).ready(function (t) {
    if(typeof Cookies !== 'undefined' && Cookies.get('contact-close-greeting') != 'On') {
        t(".contact-greeting").removeClass("isHideGreeting");
    } else {

    }

    function o() {
        t(".contact-greeting").addClass("isHideGreeting");
    }

    function n() {
        t(".inet-webkit-call-container").removeClass("isShowCallList"), t(".inet-webkit-call-button-icon-child").removeClass("isHideElement"), t(".inet-webkit-call-button-close-icon").removeClass("isShowCloseButton")
    }

    function s() {
        t(".inet-webkit-contact-container").removeClass("isButtonShow"), t(".inet-webkit-close-button-icon").removeClass("isShowCloseButton"), t(".inet-webkit-button-group-icon").removeClass("isHideGroupIcon")
    }

    window.addEventListener("load", function () {
        t(".inet-webkit-contact-tawkto").on("click", function () {
            t(".inet-webkit-contact-container").removeClass("isButtonShow"), t(".inet-webkit-close-button-icon").removeClass("isShowCloseButton"), t(".inet-webkit-button-group-icon").removeClass("isHideGroupIcon")
        }), t(".inet-webkit-contact-messenger").click(function (o) {
            o.preventDefault(), t(".inet-webkit-fbc").addClass("isFbcShow"), FB.CustomerChat.show(), FB.CustomerChat.showDialog(), t(".inet-webkit-contact-container").removeClass("isButtonShow"), t(".inet-webkit-close-button-icon").removeClass("isShowCloseButton"), t(".inet-webkit-button-group-icon").removeClass("isHideGroupIcon")
        });

        try {
            if ("undefined" == typeof FB || void 0 === FB.CustomerChat) return !1;
            FB.Event.subscribe("customerchat.dialogShow", function () {
                t(".inet-webkit-contact-button").addClass("isHideElement"), t(".inet-webkit-call-main").addClass("isHideElement"), t(".inet-webkit-contact-container").removeClass("isButtonShow"), t(".inet-webkit-call-container").removeClass("isShowCallList"), t(".inet-webkit-btt").removeClass("show")
            }), FB.Event.subscribe("customerchat.dialogHide", function () {
                FB.CustomerChat.hide(), t(".inet-webkit-contact-button").removeClass("isHideElement"), t(".inet-webkit-call-main").removeClass("isHideElement"), t(".inet-webkit-fbc").removeClass("isFbcShow"), t(".inet-webkit-button-group-icon").removeClass("isHideGroupIcon"), t(".inet-webkit-close-button-icon").removeClass("isShowCloseButton")
            })
        } catch (t) {
            console.log(t)
        }
    }), t(".inet-webkit-contact-close-greeting").click(function () {
        if (typeof Cookies !== 'undefined') {
            Cookies.set('contact-close-greeting', 'On', { expires: 7 });
        }
        o();
    }), t(".inet-webkit-header-close").on("click touch", function () {
        n()
    }), t(".inet-webkit-contact-header-close").on("click touch", function () {
        s()
    }), t(".inet-webkit-contact-button").on("click touch", function () {
        o(), t(".inet-webkit-contact-container").toggleClass("isButtonShow"), t(".inet-webkit-close-button-icon").toggleClass("isShowCloseButton"), t(".inet-webkit-button-group-icon").toggleClass("isHideGroupIcon"), t(".contact-greeting").addClass("isHideGreeting")
    }), t(".inet-webkit-call-main").on("click touch", function () {
        o(), t(".inet-webkit-call-container").toggleClass("isShowCallList"), t(".inet-webkit-call-button-icon-child").toggleClass("isHideElement"), t(".inet-webkit-call-button-close-icon").toggleClass("isShowCloseButton")
    }), t(document).on("click touch", function (o) {
        t(o.target).parents().addBack().is(".inet-webkit-call-main") || n(), t(o.target).parents().addBack().is(".inet-webkit-contact-button") || s()
    }), t(".inet-webkit-call-container").on("click touch", function (t) {
        t.stopPropagation()
    }), t(".inet-webkit-contact-container").on("click touch", function (t) {
        t.stopPropagation()
    });

    var c, a = t("#inet-webkit-contact").hasClass("inet-webkit-left"),
        e = t("#inet-webkit-contact").hasClass("inet-webkit-right"),
        l = t(".inet-webkit-call").hasClass("inet-webkit-left"),
        m = t(".inet-webkit-call").hasClass("inet-webkit-right"),
        i = t(".inet-webkit-btt").hasClass("inet-webkit-left"), h = t(".inet-webkit-btt").hasClass("inet-webkit-right");
    e ? t(".inet-webkit-contact-container, .inet-webkit-main-contact, .inet-webkit-contact-button").removeClass("onLeft").addClass("onRight") : a && t(".inet-webkit-contact-container, .inet-webkit-main-contact, .inet-webkit-contact-button").removeClass("onRight").addClass("onLeft"), m ? t(".inet-webkit-call, .inet-webkit-call-container, .inet-webkit-call-main, .inet-webkit-main-contact").removeClass("onLeft").addClass("onRight") : l && t(".inet-webkit-call, .inet-webkit-call-container, .inet-webkit-call-main, .inet-webkit-main-contact").removeClass("onRight").addClass("onLeft"), h ? t(".inet-webkit-btt").removeClass("onLeft").addClass("onRight") : i && t(".inet-webkit-btt").removeClass("onRight").addClass("onLeft"), null == t(".inet-webkit-call")[0] && t(".inet-webkit-btt").removeClass("inet-webkit-btt-high").addClass("inet-webkit-btt-middle"), null == t("#inet-webkit-contact")[0] && t(".inet-webkit-btt").removeClass("inet-webkit-btt-low").removeClass("inet-webkit-btt-high").addClass("inet-webkit-btt-middle"), null == t(".inet-webkit-call")[0] && null == t("#inet-webkit-contact")[0] && t(".inet-webkit-btt").removeClass("inet-webkit-btt-high").removeClass("inet-webkit-btt-middle").addClass("inet-webkit-btt-low"), null == t("#inet-webkit-contact")[0] ? t(".inet-webkit-call").removeClass("inet-webkit-call-middle").addClass("inet-webkit-call-low") : t(".inet-webkit-call").removeClass("inet-webkit-call-low").addClass("inet-webkit-call-middle"), t(window).scroll(function () {
        t(this).scrollTop() > 300 ? t(".inet-webkit-btt").addClass("show") : t(".inet-webkit-btt").removeClass("show")
    }), t(".inet-webkit-btt").click(function () {
        return t("html, body").animate({scrollTop: 0}, 600), !1
    }), t(".woocommerce").on("change", "input.qty", function () {
        void 0 !== c && clearTimeout(c), c = setTimeout(function () {
            t("[name='update_cart']").trigger("click")
        }, 1e3)
    })
});