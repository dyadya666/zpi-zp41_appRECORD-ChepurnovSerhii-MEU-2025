import reactElementToJSXString from 'react-element-to-jsx-string';
import * as rawCode from './rawCode.jsx';
import imgCode from '../../../assets/images/imageCode.png';

const Goal = () => {
    return (
        <>
        <b>Тема:</b> Структура HTML-документа. Вибір предметної галузі.
                     Робота з посиланнями, таблицями, зображеннями, списками в HTML-документі.
        <p>
        <b>Мета:</b> придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами
                     Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
        </p>
        <a target="_blank" rel="noreferrer" href="https://github.com/dyadya666/zpi-zp41_appWEB-ChepurnovSerhii-MEU-2025">Посилання на репозиторій власного WEB-застосунку</a>
        <br /><a target="_blank" rel="noreferrer" href="https://dyadya666.github.io/zpi-zp41_appWEB-ChepurnovSerhii-MEU-2025/">Посилання на живу сторінку власного WEB-застосунку</a>
        <br />
        <br /><a target="_blank" rel="noreferrer" href="https://github.com/dyadya666/zpi-zp41_appRECORD-ChepurnovSerhii-MEU-2025">Посилання на репозиторій звітного HTML-документа</a>
        <br /><a target="_blank" rel="noreferrer" href="https://dyadya666.github.io/zpi-zp41_appRECORD-ChepurnovSerhii-MEU-2025/">Посилання на живу сторінку звітного HTML-документ</a>
        <br />
        <br /><a target="_blank" rel="noreferrer" href="https://github.com/dyadya666/zpi-zp41_appINDEPENDENT-ChepurnovSerhii-MEU-2025">Посилання на репозиторій з самостійними роботами</a>
        <br /><a target="_blank" rel="noreferrer" href="https://dyadya666.github.io/zpi-zp41_appINDEPENDENT-ChepurnovSerhii-MEU-2025/">Посилання живу сторінку з самостійними роботами</a>

        </>
    );
    }


const Desc = () => {
    return (
        <>
            <h2>Веб сайт прокату автомобілів</h2>
            <b>Тема:</b> АІС прокату автомобілів
            <p>
                <b>Мета проекту:</b> знайти найближчу станцію оренди автомобіля, оформити оренду, обрати авто за технічними характеристиками
                (модель, марка авто, кількість місць для сидіння, тип палива, тип КПП)
            </p>
            <b>Сценарій використання сайту:</b>
            <ul className="listLw1">
                <li>Користувач отримує перелік найближчих станцій оренди;</li>
                <li>Користувач обирає авто;</li>
                <li>Система перевіряє баланс користувача;</li>
                <li>Користувач підтверджує/скасовує оренду;</li>
                <li>Система формує замовлення;</li>
                <li>Користувач оплачує замовлення;</li>
                <li>Система надає доступ до авто;</li>
                <li>По завершенню подорожі перевіряється стан авто та заноситься до списку станції прибуття.</li>
            </ul>
        </>
    );
}


const Structure = () => {
    return (
        <>
            {rawCode.rawIndexHtml()}
            <h4>index.js</h4>
            <pre>{reactElementToJSXString(rawCode.rawIndexJs)}</pre>
            <h4>App.jsx</h4>
            <pre>{reactElementToJSXString(rawCode.rawApp)}</pre>
            <h4>header.jsx</h4>
            <pre>{reactElementToJSXString(rawCode.rawHeader)}</pre>
            <h4>navigationItem.jsx</h4>
            <pre>{reactElementToJSXString(rawCode.rawNavigationItem)}</pre>
            <h4>navigation.jsx</h4>
            <pre>{reactElementToJSXString(rawCode.rawNavigation)}</pre>
            <h4>viewport.jsx</h4>
            <pre>{reactElementToJSXString(rawCode.rawViewport)}</pre>
            <h4>MainSection</h4>
            <pre>{reactElementToJSXString(rawCode.rawMainSection)}</pre>
        </>
    );
}

const Images = () => {
    return (
        <>
        <h4>CarGrid</h4>
        <img style={{width:'900px'}} src={imgCode} alt="Code of images" />
        <pre>{reactElementToJSXString(rawCode.rawImage)}</pre>
        </>
    );
}

const Conclusions = () => {
    return (
        <>
        В ході проведення даної лабораторної роботи були придбані практичні навички роботи з HTML-документом, таблицями,
        зображеннями, посиланнями, списками, формами.
        </>
    );
}

export const descriptionDictLW1 = {
    'describe': <Desc />,
    'goal': <Goal />,
    'structure': <Structure />,
    'conclusions': <Conclusions />,
    'code1': 'Tables',
    'code2': 'Forms',
    'code3': <Images />
}

