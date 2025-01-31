const rawDesktop = `
@media screen and (min-width: 1024px) {
  .container {
    padding: 30px 20px;
  }

  .header {
    padding: 15px;
  }

  .outputArea {
    font-size: 24px;
  }
}
`

const rawTablet = `
@media screen and (min-width: 600px) and (max-width: 1024px) {
  .container {
    padding: 15px 10px;
  }

  .header {
    height: auto;
    padding: 10px;
    font-size: 18px;
  }

  .titleSection {
    width: 100%;
  }

  .mainTitle {
    font-size: 24px;
    margin: 0.5%;
  }

  .subtitle {
    font-size: 18px;
  }

  .studentImg {
    width: 15%;
    height: auto;
  }

  .profileImage {
    width: 60%;
  }

  .labNav {
    padding: 10px 15px;
    height: auto;
  }

  .labButtons {
    gap: 15px;
  }

  .content {
    padding: 20px;
  }

  .mainContent {
    padding: 0;
  }

  .sidebar {
    width: 100%;
    margin-left: 0;
  }

  .outputArea {
    font-size: 18px;
  }
}
`

const rawMobile = `
@media screen and (max-width: 600px) {
  .container {
    padding: 10px 5px;
  }

  .header {
    height: auto;
    padding: 8px;
    font-size: 16px;
    flex-direction: column;
    text-align: center;
  }

  .titleSection {
    width: 100%;
    margin-bottom: 10px;
  }

  .mainTitle {
    font-size: 20px;
    margin: 0;
  }

  .subtitle {
    font-size: 16px;
  }

  .studentImg {
    width: 20%;
    height: auto;
    margin: 10px auto;
  }

  .profileImage {
    width: 50%;
  }

  .labNav {
    padding: 8px 10px;
    height: auto;
  }

  .labButtons {
    flex-direction: column;
    gap: 10px;
  }

  .content {
    padding: 15px;
  }

  .mainContent {
    width: 100%;
    padding: 30px 20px;
  }

  .sidebar {
    width: 100%;
    margin: 0;
  }

  .outputArea {
    font-size: 16px;
  }
}
`

export {rawDesktop, rawTablet, rawMobile}