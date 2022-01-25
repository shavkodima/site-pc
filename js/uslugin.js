
let uslugin = [
    {
        category:"Настройка компьютеров",
        title:"Установка windows",
        price:"25"
    },
    {
        category:"Настройка компьютеров",
        title:"Установка Ubuntu",
        price:"35"
    },
    {
        category:"Настройка компьютеров",
        title:"Установка драйверов",
        price:"25"
    },
    {
        category:"Настройка компьютеров",
        title:"Установка программ",
        price:"25"
    },
    {
        category:"Настройка компьютеров",
        title:"Комплексная установка (windows +драйвера +программы)",
        price:"50"
    },
    {
        category:"Настройка компьютеров",
        title:"Настройка компьютера",
        price:"35"
    },
    {
        category:"Настройка компьютеров",
        title:"Удаление вирусов",
        price:"35"
    },
    {
        category:"Настройка компьютеров",
        title:"Установка антивируса",
        price:"25"
    },
    {
        category:"Настройка компьютеров",
        title:"Настройка периферийного оборудования",
        price:"35"
    },
    {
        category:"Настройка компьютеров",
        title:"Прошивка Bios",
        price:"60"
    }
    ,
    {
        category:"Настройка компьютеров",
        title:"Восстановление информации",
        price:"от 60"
    },
    {
        category:"Ремонт компьютеров",
        title:"Ремонт блока питания",
        price:"от 25"
    },
    {
        category:"Ремонт компьютеров",
        title:"Ремонт материнской платы",
        price:"от 35"
    },
    {
        category:"Ремонт компьютеров",
        title:"Замена HDD",
        price:"25"
    },
    {
        category:"Ремонт компьютеров",
        title:"Установка SSD",
        price:"25"
    },
    {
        category:"Ремонт компьютеров",
        title:"Добавление оперативной памяти",
        price:"25"
    },
    {
        category:"Ремонт компьютеров",
        title:"Замена корпуса",
        price:"35"
    },
    {
        category:"Ремонт компьютеров",
        title:"Сборка компьютера",
        price:"35"
    }
    ,
    {
        category:"Ремонт компьютеров",
        title:"Сборка компьютера",
        price:"дог."
    }



]



export const uslugi = ()=>{
    
const header = document.querySelector('.header-uslugi');

header.addEventListener('click', function(event){
    event.preventDefault()
    let target = event.target;
    if(target.className == "btn-category"){
        getElemsArray(target.textContent);
    }
})




const getElemsArray = (value)=>{
    const arr = uslugin.filter(item=>{
        for(let key in item){
            if(item[key] == value){
                return true;
            }
        }
    })
    showDisplay(arr)
}

const showDisplay = (arr)=>{
    let li="";
    const list = document.querySelector('.list-uslugi');
    arr.forEach(element => {
        li += `
        <li>
        <article class="content-uslugi__item">
            <p class="uslugi-item__p">${element.title}</p>
            <p class="uslugi-item__p">${element.price} руб.</p>
            <p class="uslugi-item__p"><a href="#">Заказать</a></p>
            <p class="uslugi-item__p"><a href="#">Подробнее</a></p>
        </article>
        </li>
        `
    });
    list.innerHTML =  li;
}

getElemsArray("Настройка компьютеров")



}