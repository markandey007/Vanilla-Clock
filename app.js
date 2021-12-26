const clock = document.querySelector('.clock');

const currentTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const mon = now.getMonth()+1;
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    console.log(date, mon, year);
    console.log(hour, min, sec);

    const show = `
    <span>${date}</span>:
    <span>${mon}</span>:
    <span>${year}</span>
    <span><br></span>
    <span>${hour}</span>:
    <span>${min}</span>:
    <span>${sec}</span>

    `
    clock.innerHTML = show;
};

setInterval(currentTime, 1000);
