document.addEventListener('DOMContentLoaded', () => {
    const textBoxes = document.querySelectorAll('.text-box');
    textBoxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            box.textContent = "Terrier brasileiro, conhecido informalmente como Fox paulistinha, uma raça de cães do tipo terrier, de porte médio para pequeno, oriunda do Brasil."
         });

         box.addEventListener('click', () => {
            box.textContent = "Yorkshire terrier, também chamada york e yorkie, é uma raça canina de pequeno porte do grupo dos terriers, originária do condado de Yorkshire na Inglaterra."
        });

        box.addEventListener('click', () => {
            box.textContent = "Jack russell terrier é uma raça canina originária da Inglaterra. Foi desenvolvida na metade do século XIX pelo Reverendo John Russel, que buscava um animal imbatível na caça à raposa."
        });



        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = '#ccc';
        });

        box.addEventListener('mouseleave', () => {
            box.style.backgroundColor = '';
        });
    });

    
       newButton.addEventListener('click', () => {
        const newBox = document.createElement('div');
        newBox.classList.add('text-box');
        newBox.textContent = 'Pequenos Notáveis';
        document.querySelector('.text-section').appendChild(newBox);


        newBox.addEventListener('click', () => {
            newBox.textContent = 'Fox Paulistinha';
        });

        newBox.addEventListener('mouseenter', () => {
            newBox.style.backgroundColor = '#ccc';
        });

        newBox.addEventListener('mouseleave', () => {
            newBox.style.backgroundColor = '';
        });
    });
});
