const cards = document.querySelectorAll('.cards')
        const sptimer = document.querySelectorAll('.time>span')
        const h5text = document.getElementById('text')
        let firstCard, secondCard
        let changecard = 0
        let lockcard = 0
        let ms = 0
        let s = 0
        let clk = 1
        let flag = 0
        let gametime = ''
        let timer = 60
        cards.forEach((val) => {
            let randimg = Math.floor(Math.random() * 12)
            val.style.order = randimg
        })
        cards.forEach((val) => {
            val.addEventListener('click', cardclick)
        })
        function cardclick() {
            if (lockcard) {
                return
            }
            this.classList.add('change')
            if (!changecard) {
                changecard = 1
                firstCard = this
            }
            else {
                secondCard = this
                lockcard = 1
                matchcard()
            }
            if (clk <= 1) {
                gametime = setInterval(() => {
                    ms++
                    if (ms <= 99) {
                        if (ms < 10) {
                            sptimer[2].innerHTML = '0' + ms
                        }
                        else {
                            sptimer[2].innerHTML = ms
                        }
                    }
                    else {
                        ms = 0
                        if (s <= 59) {
                            s++
                            if (s < 10) {
                                sptimer[0].innerHTML = '0' + s
                            }
                            else {
                                sptimer[0].innerHTML = s
                            }
                        }
                    }
                }, 10);
                //////////////////////// روش دوم//////////////////////////////////////////////
                // gametime = setInterval(() => {
                //     if (timer <= 60 && timer > 0) {
                //         timer--
                //         sptimer[0].innerHTML = timer
                //     }
                //     else {
                //         sptimer[0].innerHTML = '00'
                //         h5text.innerHTML = 'Game Over!!!!!'
                //         lockcard = 1
                //     }
                // }, 1000);
                //////////////////////// روش دوم//////////////////////////////////////////////
            }
            else {
                clk = 1
            }
            clk++
        }
        function matchcard() {
            if (firstCard.getAttribute('data-match') == secondCard.getAttribute('data-match')) {
                document.getElementById('s1').play()
                firstCard.removeEventListener('click', cardclick)
                secondCard.removeEventListener('click', cardclick)
                flag++
                if (flag == 6) {
                    clearInterval(gametime)
                    h5text.innerHTML = 'Your Time Was ' + sptimer[0].innerHTML + ':' + sptimer[2].innerHTML
                }
                ////////////////////اضافه کردن کلاس op////////////////////////
                // setTimeout(() => {
                //     firstCard.firstElementChild.classList.add('op')
                //     secondCard.firstElementChild.classList.add('op')
                //     resetcard()
                // }, 1500);
                ////////////////////اضافه کردن کلاس op////////////////////////
                // console.log(flag);
                resetcard()
            }
            else {
                setTimeout(() => {
                    firstCard.classList.remove('change')
                    secondCard.classList.remove('change')
                    resetcard()
                }, 1500);

            }


        }
        function resetcard() {
            lockcard = 0
            changecard = 0
            firstCard = 0
            secondCard = 0
        }