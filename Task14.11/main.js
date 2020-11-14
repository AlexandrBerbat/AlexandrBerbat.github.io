
const sTo1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`hello1`);
        resolve();
    }, 2000);
})
.then(() => {
    console.log(`hello2`);
})
.then(() => {
    console.log(`hello3`);
});