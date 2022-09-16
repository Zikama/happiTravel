import Link from 'next/link';
import React from 'react';
import Mail from './../public/assets/img/mail.svg';
import Phone from './../public/assets/img/phone.svg';
import Facebook from './../public/assets/img/socialmedial/facebook.svg';
import Instagram from './../public/assets/img/socialmedial/instagram.svg';
import Twitter from './../public/assets/img/socialmedial/twitter.svg';
import Logo from './Logo';
import { Menu } from './Menu';


const options = require('../data/contacts.json');

export default function Nav() {
    const icons = {
        Facebook, Twitter, Instagram
    };

  return (
    <nav className="art_nav">
        <div className=" art_top_intro">
            <div className="container">
                <div className="art_contacts">
                    {
                        options.phoneNumbers.map(function (phoneNumber, i) {
                            return (
                                <Link href={'tel:' + phoneNumber} key={i}>
                                    <a>
                                        <Phone width={24} fill={"#fff"} strokeWidth={0} />
                                        {phoneNumber}
                                    </a>
                                </Link>
                            )
                        })
                    }
                    {<Link href={'mailto:' + options.email[0]}>
                        <a>
                            <Mail width={28} strokeWidth={1.5} />
                            {options.email[0]}
                        </a>
                    </Link>
                        
                    }
                </div>

                <div className="art_social">
                    {
                        options.socialMedia.map((socialMedia, i) => {
                            const Icon = icons[socialMedia.icon];
                            return (
                                <Link href={socialMedia.url} target="_blank" rel="noopener noreferrer" key={i}>
                                <a title={socialMedia.name}>
                                    <Icon width={20} strokeWidth={1.5} />
                                </a>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className="art_bar">
            <div className="container art_bar_wrapper">
                
                <div className="art_logo">
                    <Link href={'/'}>
                        <a>
                            <Logo width="100%" height="100%"/>
                        </a>
                    </Link>
                </div>

                {Menu()}
            </div>
        </div>

    </nav>
  )
}


