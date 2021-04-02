import React from 'react';
import Link from './Link.js';

const Header = () => {
    return (<header>
        <Link name="Форум" href="https://dou.ua/forums/" />
        <Link name="Лента" href="https://dou.ua/lenta/" />
        <Link name="Зарплаты" href="https://jobs.dou.ua/salaries/" />
        <Link name="Работа" href="https://jobs.dou.ua/" />
        <Link name="Календарь" href="https://dou.ua/calendar/" />
    </header>);
};

export default Header;