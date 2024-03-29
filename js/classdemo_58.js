const showClassDemo =(week) =>{
    const showDemo = document.querySelector('.banner-section')
    switch(week){
        case 'W1':
            showDemo.innerHTML = `<iframe src="./demo/w01_58/index.html" width="100%" height="100%" />`;
          break;
        case 'W2':
            showDemo.innerHTML = `<iframe src="./demo/w02_58/tictactoe_58.html" width="100%" height="100%" />`;
          break;
        case 'W3':
            showDemo.innerHTML = `<iframe src="./demo/w03_58/index.html" width="100%" height="100%" />`;
          break;
        case 'W4':
            showDemo.innerHTML = `<iframe src="./demo/w04_58_menu_starter/index.html" width="100%" height="100%" />`;
          break;
        case 'W5_menu':
            showDemo.innerHTML = `<iframe src="./demo/w05_58_menu_starter/index.html" width="100%" height="100%" />`;
          break;
        case 'W5_modal':
            showDemo.innerHTML = `<iframe src="./demo/w05_58_modal/index.html" width="100%" height="100%" />`;
          break;
        case 'W6':
            showDemo.innerHTML = `<iframe src="./demo/w06_58/p3_58/p3_58.html" width="100%" height="100%" />`;
          break;
        case 'W14':
          showDemo.innerHTML = `<iframe src="./demo/w15-store-product_58/index.html" width="100%" height="100%" />`;
          break;
        case 'W15':
          showDemo.innerHTML = `<iframe src="./demo/w15-store-product_58/index.html" width="100%" height="100%" />`;
          break;
        case 'W1-md':
            showDemo.innerHTML = `<iframe src="./demo/w01_58/w01_58.html" width="100%" height="100%" />`;
          break;
        case 'W2-md':
            showDemo.innerHTML = `<iframe src="./demo/w02_58/w02_58.html" width="100%" height="100%" />`;
          break;
        case 'W3-md':
            showDemo.innerHTML = `<iframe src="./demo/w03_58/w03_58.html" width="100%" height="100%" />`;
          break;
        case 'W4-md':
            showDemo.innerHTML = `<iframe src="./demo/w04_58_menu_starter/w04_58.html" width="100%" height="100%" />`;
          break;
        case 'W5menu-md':
            showDemo.innerHTML = `<iframe src="./demo/w05_58_menu_starter/w05_58.html" width="100%" height="100%" />`;
          break;
        case 'W5modal-md':
            showDemo.innerHTML = `<iframe src="./demo/w05_58_modal/w05_58.html" width="100%" height="100%" />`;
          break;
        case 'W6-md':
            showDemo.innerHTML = `<iframe src="./demo/w06_58/w06_58.html" width="100%" height="100%" />`;
          break;
        case 'W14-md':
          showDemo.innerHTML = `<iframe src="./demo/w15-store-product_58/w14-homework_58.html" width="100%" height="100%" />`;
        break;
        case 'W15-md':
          showDemo.innerHTML = `<iframe src="./demo/w15-store-product_58/index.html" width="100%" height="100%" />`;
          break;
        case 'api-md':
          showDemo.innerHTML = `<iframe src="../md.html" width="100%" height="100%" />`;
          break;
        case 'f1':
          showDemo.innerHTML = `<iframe src="./Finance_API_javascript/f1.html" width="100%" height="100%" />`;
          break;
        case 'f2':
          showDemo.innerHTML = `<iframe src="./Finance_API_javascript/f2.html" width="100%" height="100%" />`;
          break;
        case 'f3':
          showDemo.innerHTML = `<iframe src="./Finance_API_javascript/f3.html" width="100%" height="100%" />`;
          break;
        case 'experience':
          showDemo.innerHTML = `<iframe src="./Finance_API_javascript/experience.html" width="100%" height="100%" />`;
          break;
    }
}