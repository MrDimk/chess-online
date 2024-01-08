function init() {
    const appContainer = document.querySelector('#chess-app');
    console.log(appContainer);
    const testElement = document.createElement('h1');
    testElement.innerText = 'Hello world!';
    appContainer.appendChild(testElement);
}

init();
