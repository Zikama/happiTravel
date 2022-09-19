import Link from 'next/link';
import React, {useMemo} from 'react';
import CaretDown from './../public/assets/img/chevron-down.svg';
import Button from './Button';

const menus = require('../data/menu.json');

export function Menu() {

    const dropDownRefs = useMemo(() => {
        const refs = {}
        menus.map((menu, i) => {
            if(menu.menu.length > 0) {
                refs[i] = React.createRef(null);
            }
        })
        return refs
    }, [])

    return <div className="art_menu">
        <div className="art_menu_wrapper">
            <ul>
                {menus.map((menu, i) => {
                    return <li key={i} className={menu.is_multiple ? "art_menu_item art_is_multiple" : "art_menu_item"} onMouseOver={menu.menu.length ? () => {
                        if (dropDownRefs[i] && dropDownRefs[i].current) {
                            dropDownRefs[i].current.classList.add('art_show');
                        }
                    } : null} onMouseOut={menu.menu.length ? () => {
                        if (dropDownRefs[i] && dropDownRefs[i].current) {
                            dropDownRefs[i].current.classList.remove('art_show');
                        }
                    } : null}>
                        {menu.menu.length > 0 ? (<>
                            <a className="art_menu_dropdown" onClick={(e) => e.preventDefault()}>
                                {menu.name.toUpperCase()}
                                <CaretDown style={{color: "#c1c3c0"}}/>
                            </a>
                            {menu.is_multiple ? (<div className="art_menu_dropdown_container art_multiples" ref={dropDownRefs[i]}>
                                {menu.menu.map((d_menu, i) => {
                                    return (
                                        <div className="art_multiples_wrapper" key={i}>
                                            <div className="art_multiples_title">
                                                <h6>{d_menu.description.toUpperCase()}</h6>
                                            </div>
                                            <ul className="art_multiples_lists">
                                                {d_menu.menu.map((list, i) => {
                                                    return <li key={i} className="art_multiples_list art_list">
                                                        <Link href={list.link}>
                                                            {list.name}
                                                        </Link>
                                                    </li>;
                                                })}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>) : (
                                <ul className="art_menu_dropdown_container" ref={dropDownRefs[i]}>
                                    {menu.menu[0].menu.map(((_m, i) => {
                                        return <li className="art_list" key={i}>
                                               <a href={_m.link}>{_m.name}</a> 
                                            </li>;
                                    }))}
                                </ul>
                            )}

                        </>
                        ) :

                            <Link href={menu.link}>
                                {menu.name.toUpperCase()}
                            </Link>}

                    </li>;
                })}
            </ul>
            <Link href={`/appointment`}>
                <a className="art_nav_btn">
                    <Button text={`Appointment`} />
                </a>
            </Link>
        </div>
    </div>;
}
