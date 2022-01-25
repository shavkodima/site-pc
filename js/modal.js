
export const modal = ()=>{



    const htmlModal = `
    <div class="modal">
    <div class="main-section__item-column-form">
    <span class="close-modal">X</span>

    <div class="main-section__form">
        <p>Бесплатно проконсультируем и ответим на все Ваши вопросы</p>
        <div class="main-form">
            <form action="" method="post">
                <input type="tel" class="form-phone" name="phone" placeholder="+375 xx 123-45-67" required="">
                <input type="submit" class="send-btn" value="Быстрая консультация">
            </form>
            <p class="status-form"></p>
        </div>
        <p class="desc">Нажимая на кнопку “Быстрая консультация” - вы даете согласие на обработку Ваших персональных данных</p>
    </div>
</div>
</modal>
    
    `



    document.body.innerHTML += htmlModal;

const headerBtn = document.querySelector('.btn');
const closeModal = document.querySelector('.close-modal');

headerBtn.addEventListener('click', function(e){
        e.preventDefault()
        const modal = document.querySelector('.modal');
        modal.classList.add('activ')

})

closeModal.addEventListener('click', function(e){
    e.preventDefault()
    const modal = document.querySelector('.modal');
    modal.classList.remove('activ')

})

}


