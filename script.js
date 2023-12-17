const randomNumber = (minimum, maximum) => { return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; }

let questions = [
    {
        "name": "Czym jest ciąg arytmetyczny?",
        "answers": {
            "1": "Ciąg, w którym każdy element jest iloczynem poprzedniego elementu",
            "2": "Ciąg, w którym każdy kolejny element różni się o stałą wartość od poprzedniego elementu"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jaką nazwę nosi różnica między dowolnymi dwoma kolejnymi wyrazami w ciągu arytmetycznym?",
        "answers": {
            "1": "Różnicą",
            "2": "Rozstępem"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli pierwszy wyraz ciągu arytmetycznego to 3, a różnica wynosi 5, jaki będzie szósty wyraz tego ciągu?",
        "answers": {
            "1": "27",
            "2": "28"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli suma pierwszych 5 wyrazów ciągu arytmetycznego wynosi 60, a pierwszy wyraz to 8, jaka jest różnica tego ciągu?",
        "answers": {
            "1": "10",
            "2": "12"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli wyraz ogólny ciągu arytmetycznego jest określony jako a_n = a_1 + (n - 1) * d, co oznacza d w tym wzorze?",
        "answers": {
            "1": "Różnicę",
            "2": "Pierwszy wyraz ciągu"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli w ciągu arytmetycznym ostatni wyraz wynosi 35, pierwszy wynosi 5, a liczba wyrazów to 7, jaka jest różnica tego ciągu?",
        "answers": {
            "1": "5",
            "2": "6"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jak obliczyć sumę n pierwszych wyrazów ciągu arytmetycznego?",
        "answers": {
            "1": "n/2 * (a_1 + a_n)",
            "2": "n * (a_1 + a_n)"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli suma 10 kolejnych liczb tworzy ciąg arytmetyczny, a pierwsza liczba to 3, jaka jest suma tych liczb?",
        "answers": {
            "1": "90",
            "2": "105"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli w ciągu arytmetycznym a_1 = 10 i a_4 = 22, jaka jest różnica tego ciągu?",
        "answers": {
            "1": "3",
            "2": "4"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jaki jest 20. wyraz ciągu arytmetycznego o pierwszym elemencie równym 7 i różnicy równą 4?",
        "answers": {
            "1": "83",
            "2": "87"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli a_1 = 2, a_4 = 14, jaki jest piąty wyraz tego ciągu arytmetycznego?",
        "answers": {
            "1": "16",
            "2": "18"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli suma pierwszych 8 wyrazów ciągu arytmetycznego wynosi 216, a pierwszy wyraz to 3, jaka jest różnica tego ciągu?",
        "answers": {
            "1": "6",
            "2": "9"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Czym jest ciąg geometryczny?",
        "answers": {
            "1": "Ciąg, w którym każdy kolejny element jest sumą poprzednich elementów",
            "2": "Ciąg, w którym każdy kolejny element jest iloczynem poprzedniego elementu i pewnej stałej"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jak nazywa się stała iloraz między dowolnymi dwoma kolejnymi wyrazami w ciągu geometrycznym?",
        "answers": {
            "1": "Różnicą",
            "2": "Ilorazem"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli pierwszy wyraz ciągu geometrycznego to 2, a iloraz wynosi 3, jaki będzie piąty wyraz tego ciągu?",
        "answers": {
            "1": "486",
            "2": "243"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli suma nieskończonego ciągu geometrycznego wynosi 40, a iloraz to 0.5, jaki jest pierwszy wyraz tego ciągu?",
        "answers": {
            "1": "20",
            "2": "10"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli wyraz ogólny ciągu geometrycznego jest określony jako a_n = a_1 * r^(n-1), co oznacza r w tym wzorze?",
        "answers": {
            "1": "Różnicę",
            "2": "Iloraz"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli w ciągu geometrycznym ostatni wyraz wynosi 128, pierwszy wynosi 2, a liczba wyrazów to 8, jaki jest iloraz tego ciągu?",
        "answers": {
            "1": "2",
            "2": "4"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jak obliczyć sumę n pierwszych wyrazów ciągu geometrycznego?",
        "answers": {
            "1": "a_1 * (1 - r^n) / (1 - r)",
            "2": "n * (a_1 + a_n)"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli suma 5 kolejnych liczb tworzy ciąg geometryczny, a pierwsza liczba to 16, jaki jest iloraz tego ciągu?",
        "answers": {
            "1": "2",
            "2": "4"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli w ciągu geometrycznym a_1 = 9 i a_4 = 81, jaki jest iloraz tego ciągu?",
        "answers": {
            "1": "3",
            "2": "9"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jaki jest 10. wyraz ciągu geometrycznego o pierwszym elemencie równym 4 i ilorazie równym 2?",
        "answers": {
            "1": "8192",
            "2": "2048"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli a_1 = 3, a_4 = 48, jaki jest piąty wyraz tego ciągu geometrycznego?",
        "answers": {
            "1": "192",
            "2": "96"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli suma nieskończonego ciągu geometrycznego wynosi 12, a pierwszy wyraz to 6, jaki jest iloraz tego ciągu?",
        "answers": {
            "1": "0.5",
            "2": "2"
        },
        "correct": 1,
        "selected": undefined
    }
]


const holder = document.querySelector('.holder')
let temp = holder.innerHTML

let openedWindows = 0

function openWindow(id) {
    if (id > 1) {
        if (questions[id - 2].selected === undefined) {
            return;
        }
    }

    if (openedWindows + 1 !== id) return;
    openedWindows++

    const card = document.getElementById(id)

    // zmiana wyglądu karty
    card.innerHTML = `<span onclick="displayModal(${id})">zobacz</span>`
    card.style.color = 'black'
    card.style.backgroundColor = 'bisque'
    temp = holder.innerHTML
}

function back() {
    holder.innerHTML = temp
}

function handle(contentId) {
    let i1 = document.getElementById('in_1').checked
    let i2 = document.getElementById('in_2').checked

    if (i1) {
        questions[contentId - 1].selected = 1
    }

    if (i2) {
        questions[contentId - 1].selected = 2
    }

    if (!i1 && !i2) {
        questions[contentId - 1].selected = 3
    }

    back()

    const card = document.getElementById(contentId)

    if (questions[contentId - 1].correct === 1 && i1) {
        card.style.backgroundColor = 'green'
        card.innerHTML = 'dobrze'

    } else if (questions[contentId - 1].correct === 2 && i2) {
        card.style.backgroundColor = 'green'
        card.innerHTML = 'dobrze'

    } else {
        card.style.backgroundColor = 'red'
        card.innerHTML = 'źle'
    }

    if (contentId === questions.length) {
        holder.innerHTML = `
            <div style="z-index: 2">
                <h2 style="text-align: center">Koniec gry</h2>
                <p style="text-align: center">Dobre odpowiedzi: ${questions.filter(q => q.correct === q.selected).length}</p>
            </div>
        `
    }
}

function displayModal(contentId) {

    holder.innerHTML = `
        <div style="background-color: #b01b2e; padding: 10px; z-index: 2">
            <h2>Pytanie nr ${contentId}</h2>
            <span>${questions[contentId-1].name}</span><br>
            <label>
                <input type="radio" name="answer" id="in_1" value="1" style="margin-top: 10px">${questions[contentId-1].answers[1]}<br>
            </label>
            <label>
                <input type="radio" name="answer" id="in_2" value="2">${questions[contentId-1].answers[2]}<br>
            </label>
            <button onclick="handle(${contentId}) " style="background-color: #fabc02; padding: 5px; border: none; cursor: pointer; margin-top: 10px">Zatwierdź odpowiedź</button>
        </div>
    `
}

let movementSpeed = 3

const background = document.querySelector('.background')
background.style.background = 'linear-gradient(to bottom, #00000c 80%,#95979c 100%)'
let snowflakes = []
const snowflakesPerSecond = 7
setInterval(function () {
    const snowflake = document.createElement('div')
    snowflake.setAttribute('class', 'snowflake')
    background.prepend(snowflake)
    const {width} = getComputedStyle(background)
    const {width: snWidth} = getComputedStyle(snowflake)
    let maxLeftMargin = parseInt(width.substring(0, width.length - 2)) - parseInt(snWidth.substring(0, snWidth.length - 2))
    snowflake.style.marginLeft = `${randomNumber(0, maxLeftMargin)}px`
    snowflakes.push(snowflake)
}, 1000/snowflakesPerSecond)

setInterval(function () {
    snowflakes.forEach(snowflake => {
        const {marginTop} = getComputedStyle(snowflake)
        const currentMarginTopValue = parseInt(marginTop.substring(0, marginTop.length - 2))

        if (currentMarginTopValue + 5*movementSpeed >= window.innerHeight) {
            snowflake.remove()
        } else {
            const newMarginTopValue = currentMarginTopValue + movementSpeed
            snowflake.style.marginTop = `${newMarginTopValue}px`
        }
    })
}, 1000/60)