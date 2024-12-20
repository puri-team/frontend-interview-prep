/*
на каждый клик на кнопку
1) показать на экране картинку размером 500 x 150, доступной по ссылке “https://random.imagecdn.app/500/150.jpg”
2) при повторном клике должна показаться новая картинка вместо старой
3) до момента загрузки показывать плейсхолдер размером с картинку (например, прямоугольник 500 x 150 зеленого цвета)
4) в случае ошибки загрузки показать плейсхолдер ошибки (например, прямоугольник 500 x 150 красного цвета)
5) в случае успешной загрузки нужно вывести console.log с текстом, что картинка загрузилась

<main>
    <div id="image-container"></div>
    <button id="image-loading-button">
      Load Image
    </button>
</main>

 */

const imageContainer = document.getElementsById('image-container');
const button = document.getElementsById('image-loading-button');

button.onclick = () => {
    imageContainer.removeChild();

    const img = document.createElement('img');

    img.src = 'https://random.imagecdn.app/500/150.jpg';
    img.width = 500;
    img.height = 150;
    img.style = {
        backgroundColor: 'green'
    };

    img.onload = () => {
        console.log('succeed load');
    }

    img.onerror = () => {
        img.style = {
            backgroundColor: 'red'
        };
    }

    imageContainer.appendChild(img);
}
