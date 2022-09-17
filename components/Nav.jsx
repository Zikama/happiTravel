import Link from "next/link";
import React from "react";
import Mail from "./../public/assets/img/mail.svg";
import Phone from "./../public/assets/img/phone.svg";
import Facebook from "./../public/assets/img/socialmedial/facebook.svg";
import Instagram from "./../public/assets/img/socialmedial/instagram.svg";
import Twitter from "./../public/assets/img/socialmedial/twitter.svg";
import Burger from "./Burger";
import Logo from "./Logo";
import { Menu } from "./Menu";

const options = require("../data/contacts.json");

export default function Nav() {
  const navRef = React.useRef();
  React.useEffect(() => {
    function ScollNavDetector(e) {
      if (navRef.current) {
        let didScroll,
          lastScrollTop = 0,
          delta = 52,
          nav = navRef.current,
          _event = e;
        // navbarHeight = nav.offsetHeight;

        document.addEventListener(
          "scroll",
          function (e) {
            didScroll = true;
            _event = e || window.event;
          },
          { passive: true }
        );

        setInterval(() => {
          didScroll = true;
          if (didScroll) {
            hasScrolled(_event);
            didScroll = false;
          }
        }, 20);

        function hasScrolled(e) {
          const { scrollY } = window;
          let st = scrollY || e.scrollY;

          // Make sure they scroll more than delta
          if (Math.abs(lastScrollTop - st) <= delta) {
            return;
          }
          if (st >= nav.querySelector(".art_bar").offsetTop) {
            if (!nav.classList.contains("fixed")) {
              nav.classList.add("fixed");
            }
            lastScrollTop = st;
            return;
          } else {
            if (nav.classList.contains("fixed")) {
              nav.classList.remove("fixed");
              lastScrollTop = 0;
              if (typeof cb === "function") {
                cb(nav, "down");
              }
            }
          }
        }
      }
    }

    if (window) {
      // ScollNavDetector()
      document.addEventListener("scroll", ScollNavDetector, { passive: true });
    }

    return () => {
      document.removeEventListener("scroll", ScollNavDetector, {
        passive: true,
      });
    };
  }, []);

  const icons = {
    Facebook,
    Twitter,
    Instagram,
  };

  return (
    <nav className="art_nav" ref={navRef}>
      <div className=" art_top_intro art_show-large">
        <div className="container">
          <div className="art_contacts">
            {options.phoneNumbers.map(function (phoneNumber, i) {
              return (
                <Link href={"tel:" + phoneNumber} key={i}>
                  <a>
                    <Phone width={24} fill={"#fff"} strokeWidth={0} />
                    {phoneNumber}
                  </a>
                </Link>
              );
            })}
            {
              <Link href={"mailto:" + options.email[0]}>
                <a>
                  <Mail width={28} strokeWidth={1.5} />
                  {options.email[0]}
                </a>
              </Link>
            }
          </div>

          <div className="art_social">
            {options.socialMedia.map((socialMedia, i) => {
              const Icon = icons[socialMedia.icon];
              return (
                <Link
                  href={socialMedia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                >
                  <a title={socialMedia.name}>
                    <Icon width={20} strokeWidth={1.5} />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="art_bar">
        <div className="container art_bar_wrapper">
          <div className="art_logo">
            <div className="art_menu_burger art_show-small">
              <button className="art_burger_btn">
                <Burger />
              </button>
            </div>
            <Link href={"/"}>
              <a>
                <Logo width="170px" height="100%" />
              </a>
            </Link>
          </div>

          {Menu()}
        </div>
      </div>
    </nav>
  );
}
