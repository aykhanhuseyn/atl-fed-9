import style from './footerMenu.module.scss'
const menuItems=[
    {
        key:'about',
        name:'Haqqimizda',
        url:'/about',
    },
    {
        key:'service',
        name:'Xidmetler',
        url:'/services',
    },
    {
        key:'contact',
        name:'Elaqe',
        url:'/contact-us',
    },
]

export const FooterMenu=()=>{
    return(
        <div className={style.fbar}>
            <ul className={style.fbar__menu}>
                {menuItems.map(({key, name, url})=>
                    (<li key={key} className={style.fbar__menu__item}>
                        <a href={url} className={style.fbar__menu__link}>
                            <span  className={style.fbar__menu__link__text}>
                                {name}
                            </span>
                        </a>
                    </li>            
                ))}
            </ul>
        </div>
    )
}

