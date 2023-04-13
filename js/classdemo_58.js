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
            showDemo.innerHTML = `<iframe src="./demo/w06_58/p1_58/p1_58.html" width="100%" height="100%" />`;
          break;
    }
}