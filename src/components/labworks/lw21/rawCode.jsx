const rawClassCss = `
  .sideNav {
    font-family: lakkiReddy;
    display: flex;
    min-width: 200px;
    flex-direction: column;
    color: #fff;
    flex-grow: 1;
    max-width: 304px;
    padding: 91px 17px;
    font: 400 44px;
  }
  
  .carSelector {
    display: flex;
    min-height: 340px;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 45px 5px;
  }
  
  .selectorTitle {
    width: 100%;
    font-size: 48px;
    line-height: 1;
    padding: 5px;
  }`

const rawFonts = `
@font-face {
  font-family: zenDots;
  src: url(../assets/fonts/ZENDOTSREGULAR.TTF);
}

@font-face {
  font-family: lakkiReddy;
  src: url(../assets/fonts/LakkiReddy-Regular.ttf);
}

@font-face {
  font-family: specialElite;
  src: url(../assets/fonts/SpecialElite-Regular.ttf);
}
`

const rawOthers = `
@media (max-width: 991px) {
    .main {
      max-width: 100%;
    }
  
    .sideNav {
      padding-bottom: 100px;
    }
  
    .selectorTitle {
      font-size: 40px;
    }
`

const rawCssList = `
.labButtons {
  display: inline-flex;
  margin-left: 65px;
  width: 100%;
  max-width: fit-content;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.labButton {
  border-radius: 28px;
  background-color: rgba(195, 136, 27, 1);
  padding: 15px 32px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  font: 400 20px Inter, sans-serif;
  border: none;
  cursor: pointer;
}
`

const rawJsList = `
export const Navigation = ({ onLabworkChange }) => {
    const callback = (event) => {
        const id = event.target.dataset.labworkid;
        onLabworkChange(id);
    }
  
    return (
      <nav className="labNav">
        <ul className="labButtons">
          <li type="none">
            <button data-labworkid="LW11" onClick={callback} className="labButton">
            Лабораторна робота №1.1
            </button>
          </li>
          <li type="none">
            <button data-labworkid="LW12" onClick={callback} className="labButton">
            Лабораторна робота №1.2
            </button>
          </li>
          <li type="none">
            <button data-labworkid='LW21' onClick={callback} className="labButton">
            Лабораторна робота №2.1
            </button>
            </li>
          <li type="none">
            <button data-labworkid='LW22' onClick={callback} className="labButton">
            Лабораторна робота №2.2
            </button>
          </li>
          <li type="none">
            <button data-labworkid='LW31' onClick={callback} className="labButton">
            Лабораторна робота №3.1
            </button>
            </li>
          <li type="none">
            <button data-labworkid='LW32' onClick={callback} className="labButton">
            Лабораторна робота №3.2
            </button>
            </li>
        </ul>
      </nav>
    );
  }
`

const rawHTMLflex = `
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
`

const rawCSSflex = `
.t3 {
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
  }
  
  .t3Header {
    width: 100%;
    height: 10%;
    padding: 2%;
    box-sizing: border-box;
    position: relative;
  }
  
  .t3MainSection {
    display: flex;
    width: 100%;
    height: 80%;
    position: relative;
  }
  
  .t3Footer {
    width: 100%;
    height: 10%;
    position: relative;
  }
`

const rawTableFixed = `
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
`

const rawTableFixedCSS = `

`

const rawTableFlex = `

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
`

const rawTableFlexCSS = `
.t2Flex {
    height: 100vh;
    box-sizing: border-box;
  }
  
  .t2TableFlex {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
  }
  
  .t2HeaderRowFlex, .t2FooterRowFlex {
    height: 10%; /* Використовуємо відсоток для висоти header і footer */
  }
  
  .t2HeaderFlexTable {
    background-color: yellow;
    position: relative;
  }
  
  .inHeaderFlexTable {
    background-color: white;
    width: 40%; /* Використовуємо відсоток */
    height: 50%; /* Використовуємо відсоток */
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  
  .t2MainRowFlex {
    height: 80%; /* Використовуємо відсоток для висоти основного контенту */
  }
  
  .t2NavigationFlexTable {
    background-color: blue;
    width: 25%; /* Використовуємо відсоток для ширини навігації */
    height: 100%;
  }
  
  .t2ContentFlexTable {
    background-color: white;
    width: 75%; /* Використовуємо відсоток для ширини контенту */
    height: 100%;
    box-sizing: border-box;
  }
  
  .t2ContentRedFlexTable {
    background-color: red;
    height: 20%;
    margin: 1.5% 1.5% 0; /* Використовуємо відсотки для margin */
  }
  
  .t2ContentSecondFlexTable {
    display: flex;
    padding: 1.5% 1.5% 0; /* Використовуємо відсотки для padding */
    height: calc(80% - 3%); /* Використовуємо відсотки для висоти */
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
  }
  
  .t2ContentWhiteFlexTable {
    background-color: antiquewhite;
    width: 58%; /* Використовуємо відсотки для ширини */
    height: 100%;
  }
  
  .t2ContentBlueFlexTable {
    background-color: blue;
    width: 40%; /* Використовуємо відсотки для ширини */
    height: 100%;
  }
  
  .t2FooterFlexTable {
    background-color: yellow;
    height: 100%;
    position: relative;
  }
`

const rawBlockFixed = `
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
`

const rawBlockFixedCSS = `
.t2Fixed {
    display: flex;
    flex-direction: column;
    height: 700px;
    width: 1000px;
    box-sizing: border-box;
  }
  
  .t2HeaderFixed {
    background-color: yellow;
    width: 100%;
    height: 100px;
    position: relative;
  }
  
  .inHeaderFixed {
    background-color: white;
    width: 400px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  
  .t2MainSectionFixed {
    display: flex;
    width: 100%;
    height: calc(100vh - 200px); /* Висота з урахуванням висоти header і footer */
    position: relative;
  }
  
  .t2NavigationFixed {
    background-color: blue;
    flex: 0 0 25%;
    height: 100%;
  }
  
  .t2ContentFixed {
    background-color: white;
    flex: 0 0 75%;
    height: 100%;
    box-sizing: border-box;
  }
  
  .t2ContentRedFixed {
    background-color: red;
    height: 20%;
    margin: 15px 15px 0;
  }
  
  .t2ContentSecondFixed {
    display: flex;
    padding: 15px 15px 0;
    height: calc(80% - 30px); /* Висота з урахуванням padding */
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
  }

  .t2inSecondFixed{
    width: 58%; /* Використовуємо відсоток */
  }

  .t2ContentWhiteFixed {
    background-color: antiquewhite;
    height: 80%;
  }

  .t2ContentRed2Fixed{
    background-color: red;
    height: 20%;
  }
  
  .t2ContentBlueFixed {
    background-color: blue;
    width: 40%;
    height: 100%;
  }
  
  .t2FooterFixed {
    background-color: yellow;
    width: 100%;
    height: 100px;
    position: relative;
  } 
`

const rawBlockFlex = `
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
`

const rawBlockFlexCSS = `
.t2 {
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
  }
  
  .t2Header {
    background-color: yellow;
    width: 100%;
    height: 10%; /* Використовуємо відсоток */
    position: relative;
  }
  
  .inHeader {
    background-color: white;
    width: 40%; /* Використовуємо відсоток */
    height: 50%; /* Використовуємо відсоток */
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  
  .t2MainSection {
    display: flex;
    width: 100%;
    height: 80%; /* Використовуємо відсоток */
    position: relative;
  }
  
  .t2Navigation {
    background-color: blue;
    flex: 0 0 25%; /* Використовуємо відсоток */
    height: 100%;
  }
  
  .t2Content {
    background-color: white;
    flex: 1; /* Гнучка ширина */
    height: 100%;
    box-sizing: border-box;
  }
  
  .t2ContentRed {
    background-color: red;
    height: 20%;
    margin: 1.5% 1.5% 0; /* Використовуємо відсоток для margin */
  }
  
  .t2ContentSecond {
    display: flex;
    padding: 1.5% 1.5% 0; /* Використовуємо відсоток для padding */
    height: calc(80% - 3%); /* Використовуємо відсотки */
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
  }

  .t2inSecond{
    width: 58%; /* Використовуємо відсоток */
  }
  
  .t2ContentWhite {
    background-color: antiquewhite;
    height: 80%;
  }

  .t2ContentRed2{
    background-color: red;
    height: 20%;
  }
  
  .t2ContentBlue {
    background-color: blue;
    width: 40%; /* Використовуємо відсоток */
    height: 100%;
  }
  
  .t2Footer {
    background-color: yellow;
    width: 100%;
    height: 10%; /* Використовуємо відсоток */
    position: relative;
  }
`

export {rawClassCss, rawOthers, rawFonts, rawCssList, rawJsList, rawHTMLflex, rawCSSflex, rawTableFixed, rawTableFlex,
  rawBlockFixed, rawBlockFlex, rawTableFixedCSS, rawTableFlexCSS, rawBlockFixedCSS, rawBlockFlexCSS
}