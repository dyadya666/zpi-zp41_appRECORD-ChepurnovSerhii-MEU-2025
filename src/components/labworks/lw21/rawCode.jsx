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

export {rawClassCss, rawOthers, rawFonts, rawCssList, rawJsList, rawHTMLflex, rawCSSflex}