import * as rawCode from './rawCode.jsx';
import imgClass from '../../../assets/images/classSelector.png';
import imgLists from '../../../assets/images/CSS_list_example.png';

const Goal = () => {
    return (
        <>
        <b>Тема:</b> Каскадні таблиці стилів. Селектори. Ідентифікатори.
                     Стильове оформлення текстових елементів в HTML-документах.
        <p>
        <b>Мета:</b> Придбати практичні навички роботи з селекторами: тегів, класів, ідентифікаторів; списками,
                     різноманітними властивостями кольору і фону, оформленням текстових елементів.
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


const Examples = () => {
    return (
        <>
            <h2>Способи підключння стилів з прикладами</h2>

        </>
    );
}

const Selectors = () => {
    return (
        <>
        <p>Селектор - від анг. слова select (укр. обрати).
           <br />Селектор - це частина CSS-правила, яка повідомляє браузеру, до якого елементу веб-сторінки буде застосований CSS стиль.
           Тобто, селектор - це вибірка та формальний опис того елемента чи групи елементів, до яких будуть застосовані CSS стилі.
        </p>
        </>
    );
}

const OtherSelectors = () => {
    return (
        <>
        <h4>Інші селектори</h4>
        <pre>{rawCode.rawOthers}</pre>
        </>
    );
}

const ClassSelector = () => {
    return (
        <>
        <h4>Селектор класу</h4>
        <img style={{width:'500px'}} src={imgClass} alt="Class selector image" />
        <pre>{rawCode.rawClassCss}</pre>
        </>
    );
}

const Fonts = () => {
    return (
        <>
        <h4>Підключння шрифтів</h4>
        <pre>{rawCode.rawFonts}</pre>
        </>
    );
}

const Conclusions = () => {
    return (
        <>
        В ході проведення даної лабораторної роботи були придбані практичні навички з селекторами: тегів, класів, ідентифікаторів; списками,
        різноманітними властивостями кольору і фону, оформленням текстових елементів.
        </>
    );
}

const Lists = () => {
    return (
        <>
        <h4>CSS: Списки</h4>
        <img style={{width:'900px'}} src={imgLists} alt="CSS list" />
        <h4>JS code</h4>
        <pre>{rawCode.rawJsList}</pre>
        <h3>CSS</h3>
        <pre>{rawCode.rawCssList}</pre>
        </>
    )
}

export const descriptionDictLW12 = {
    'goal': <Goal />,
    'examples': <Examples />,
    'selectors': <Selectors />,
    'class_selector': <ClassSelector />,
    'other_selectors': <OtherSelectors />,
    'independent': 'Самостійна робота №2',
    'font1': <Fonts />,
    'font2': <Lists />,
    'font3': 'CSS просунутий',
    'conclusions': <Conclusions />
}

