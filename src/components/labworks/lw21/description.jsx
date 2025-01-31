import React from 'react';
import '../../../styles/task2block.css'
import '../../../styles/task2table.css'
import * as rawCode from './rawCode.jsx';
import imgVariant2 from '../../../assets/images/Variant2.png'
import imgVariant3 from '../../../assets/images/Variant2plus1.png'
import imgTask3 from '../../../assets/images/task3.png'
import imgT3header from '../../../assets/images/t3header.png'
import imgT3nav from '../../../assets/images/t3nav.png'
import imgT3block1 from '../../../assets/images/t3block1.png'
import imgT3block2 from '../../../assets/images/t3block2.png'
import imgT3block3 from '../../../assets/images/t3block3.png'
import imgT3footer from '../../../assets/images/t3footer.png'



const Goal = () => {
    return (
        <>
        <b>Тема:</b> Верстка html-документу. Блокова верстка. Верстка засобами CSS та Flexbox.
        <p>
        <b>Мета:</b>
        <ul className="listLw1">
            <li>придбати практичні навички роботи з версткою сторінок засобами CSS,
                версткою на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок.</li>
            <li>придбати практичні навички роботи верстки сторінок засобами CSS та Flexbox.</li>
        </ul>
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

const Task1 = () => {
    return (
        <>
            <h2>Зовнішній вигляд макету. Код макету.</h2>

        </>
    );
}

const Task2 = () => {
    return (
        <>
            <h2>Варіант 2</h2>
            <h3>Таблична верстка.</h3>
            <img style={{width:'500px'}} src={imgVariant2} alt="Variant 2" />

            <h2>Варіант 3</h2>
            <h3>Гумова верстка.</h3>
            <img style={{width:'500px'}} src={imgVariant3} alt="Variant 2" />
        </>
    );
}

const Task3 = () => {
    return (
        <>
            <h2>Варіант 2</h2>
            <h3>Виконати макет сайту за технологією FLEXBOX та засобами CSS.</h3>
            <img style={{width:'700px'}} src={imgTask3} alt="Task 3" />
        </>
    );
}

const FixedTable = () => {
    return (
    <>
        <div class="t2Fixed">
        <table class="t2Table">
            <tr class="t2HeaderRow">
                <td colspan="2" class="t2HeaderFixedTable">
                    <div class="inHeaderFixedTable"></div>
                </td>
            </tr>
            <tr class="t2MainRow">
                <td class="t2NavigationFixedTable"></td>
                <td class="t2ContentFixedTable">
                    <div class="t2ContentRedFixedTable"></div>
                    <div class="t2ContentSecondFixedTable">
                        <div class="t2ContentWhiteFixedTable"></div>
                        <div class="t2ContentBlueFixedTable"></div>
                    </div>
                </td>
            </tr>
            <tr class="t2FooterRow">
                <td colspan="2" class="t2FooterFixedTable"></td>
            </tr>
        </table>
        </div>

        <div>
            <h4>HTML-код</h4>
            <pre>{rawCode.rawTableFixed}</pre>
            <h4>CSS-код</h4>
            <pre>{rawCode.rawTableFixedCSS}</pre>
        </div>
    </>
    );
}

const FlexTable = () => {
    return (
        <>
        <div class="t2Flex">
        <table class="t2TableFlex">
            <tr class="t2HeaderRowFlex">
                <td colspan="2" class="t2HeaderFlexTable">
                    <div class="inHeaderFlexTable"></div>
                </td>
            </tr>
            <tr class="t2MainRowFlex">
                <td class="t2NavigationFlexTable"></td>
                <td class="t2ContentFlexTable">
                    <div class="t2ContentRedFlexTable"></div>
                    <div class="t2ContentSecondFlexTable">
                        <div class="t2ContentWhiteFlexTable"></div>
                        <div class="t2ContentBlueFlexTable"></div>
                    </div>
                </td>
            </tr>
            <tr class="t2FooterRowFlex">
                <td colspan="2" class="t2FooterFlexTable"></td>
            </tr>
        </table>
        </div>

        <div>
            <h4>HTML-код</h4>
            <pre>{rawCode.rawTableFlex}</pre>
            <h4>CSS-код</h4>
            <pre>{rawCode.rawTableFlexCSS}</pre>
        </div>
        </>
    );
}

const FixedBlock = () => {
    return (
        <>
        <div className="t2Fixed">
        <div className="t2HeaderFixed">
            <div className="inHeaderFixed"></div>
        </div>
        <div className="t2MainSectionFixed">
            <div className="t2NavigationFixed"></div>
            <div className="t2ContentFixed">
                <div className="t2ContentRedFixed"></div>
                <div className="t2ContentSecondFixed">
                    <div className="t2inSecondFixed">
                        <div className="t2ContentWhiteFixed"></div>
                        <div className="t2ContentRed2Fixed"></div>
                    </div>
                    <div className="t2ContentBlueFixed"></div>
                </div>
            </div>
        </div>
        <div className="t2FooterFixed"></div>
        </div>

        <div>
            <h4>HTML-код</h4>
            <pre>{rawCode.rawBlockFixed}</pre>
            <h4>CSS-код</h4>
            <pre>{rawCode.rawBlockFixedCSS}</pre>
        </div>
        </>
    );
}

const FlexBlock = () => {
    return (
        <>
        <div className="t2">
        <div className="t2Header">
            <div className="inHeader"></div>
        </div>
        <div className="t2MainSection">
            <div className="t2Navigation"></div>
            <div className="t2Content">
                <div className="t2ContentRed"></div>
                <div className="t2ContentSecond">
                    <div className="t2inSecond">
                        <div className="t2ContentWhite"></div>
                        <div className="t2ContentRed2"></div>
                    </div>
                    <div className="t2ContentBlue"></div>
                </div>
            </div>
        </div>
        <div className="t2Footer"></div>
        </div>

    <div>
        <h4>HTML-код</h4>
        <pre>{rawCode.rawBlockFlex}</pre>
        <h4>CSS-код</h4>
        <pre>{rawCode.rawBlockFlexCSS}</pre>
    </div>
    </>
    );
}

const Flex1 = () => {
    return (
        <div className="t3">
        <div className="t3Header">
            <img style={{width:'100%'}} src={imgT3header} alt="Header" />
            <img style={{width:'100%'}} src={imgT3nav} alt="Navigation" />
        </div>
        <div className="t3MainSection">
            <img style={{width:'100%'}} src={imgT3block1} alt="Block1" />
            <img style={{width:'100%'}} src={imgT3block2} alt="Block2" />
            <img style={{width:'100%'}} src={imgT3block3} alt="Block3" />
        </div>
        <div className="t3Footer"></div>
            <img style={{width:'100%'}} src={imgT3footer} alt="Footer" />
        </div>
    );
}

const Flex2 = () => {
    return (
        <>
        <h4>HTML-код (Flexbox)</h4>
        <pre>{rawCode.rawHTMLflex}</pre>
        </>
    );
}

const Flex3 = () => {
    return (
        <>
        <h4>CSS-код (Flexbox)</h4>
        <pre>{rawCode.rawCSSflex}</pre>
        </>
    );
}

const Conclusions = () => {
    return (
        <>
        В ході проведення даної лабораторної роботи були придбані практичні навички з версткою сторінок засобами CSS,
        версткою на основі плаваючих елементів та Flexbox.
        </>
    );
}

export const descriptionDictLW21 = {
    'goal': <Goal />,
    'task1': <Task1 />,
    'task2': <Task2 />,
    'fixed_table': <FixedTable />,
    'flex_table': <FlexTable />,
    'fixed_block': <FixedBlock />,
    'flex_block': <FlexBlock />,
    'task3': <Task3 />,
    'flex1': <Flex1 />,
    'flex2': <Flex2 />,
    'flex3': <Flex3 />,
    'conclusions': <Conclusions />
}

