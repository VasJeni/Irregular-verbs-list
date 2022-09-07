"use strict"
const WORDS_IN_PART = 2
const TABLE_HEAD = ['#', 'base form', 'past simple', 'past participle']
const BASE_FORM = ["be","beat", "become", "begin", "bend", "bet", "bite", "bleed", "blow", "break", "breed", "bring",
    "build", "burn", "buy", "catch", "choose", "come", "cost", "cut", "do", "dig", "draw", "dream", "drink", "drive",
    "eat", "fall", "feed", "feel", "fight", "find", "fly", "forget", "forgive", "freeze", "get", "give", "go", "grow",
    "hang","have", "hear", "hide", "hit", "hold", "hurt", "keep", "know", "lay", "lead", 'learn', "lean", "leave", "lend", "let",
    "lose", "make", "mean", "meet", "pay", "put", "quit", "read", "ride", "ring", "rise", "run", "say",
    "see", "sell", "send", "set", "shake", "shine", "shoe", "shoot", "show", "shrink", "shut", "sing", "sink", "sit",
    "sleep", 'smell',"speak", "spend", "spill", "spread", "speed", "stand", "steal", "stick", "sting", "stink", "swear",
    "sweep", "swim", "swing", "take", "teach", "tear", "tell", "think", "throw", "understand", "wake", "wear", "win",
    "write"]
const PAST_SIMPLE = ['was/were',"beat", "became", "began", "bent", "bet", "bit", "bled", "blew", "broke", "bred", "brought", "built",
    "burnt/burned", "bought", "caught", "chose", "came", "cost", "cut", "did", "dug", "drew", "dreamt/dreamed", "drank", "drove",
    "ate", "fell", "fed", "felt", "fought", "found", "flew", "forgot", "forgave", "froze", "got", "gave", "went", "grew","hung", "had",
    "heard", "hid", "hit", "held", "hurt", "kept", "knew", "laid", "led",'learned/learnt', "leant/leaned", "left", "lent", "let", "lost", "made",
    "meant", "met", "paid", "put", "quit", "read", "rode", "rang", "rose", "ran", "said", "saw", "sold", "sent", "set",
    "shook", "shone", "shod", "shot", "showed", "shrank", "shut", "sang", "sank", "sat", "slept", "smelled/smelt", "spoke", "spent", "spilt/spilled",
    "spread", "sped", "stood", "stole", "stuck", "stung", "stank", "swore", "swept", "swam", "swung", "took", "taught", "tore",
    "told", "thought", "threw", "understood", "woke", "wore", "won", "wrote"]
const PAST_PARTICIPLE = ["been", "beaten", "become", "begun", "bent", "bet", "bitten", "bled", "blown", "broken", "bred", "brought",
    "built", "burnt/burned", "bought", "caught", "chosen", "come", "cost", "cut", "done", "dug", "drawn", "dreamt/dreamed",
    "drunk", "driven", "eaten", "fallen", "fed", "felt", "fought", "found", "flown", "forgotten", "forgiven", "frozen", "got",
    "given", "gone", "grown",'hung', "had", "heard", "hidden", "hit", "held", "hurt", "kept", "known", "laid", "led" ,'learned/learnt', "leant/leaned", "left",
    "lent", "let", "lost", "made", "meant", "met", "paid", "put", "quit", "read", "ridden", "rung", "risen", "run", "said",
    "seen", "sold", "sent", "set", "shaken", "shone", "shod", "shot", "shown", "shrunk", "shut", "sung", "sunk", "sat", "slept", 'smelled/smelt',
    "spoken", "spent", "spilt/spilled", "spread", "sped", "stood", "stolen", "stuck", "stung", "stunk", "sworn", "swept", "swum",
    "swung", "taken", "taught", "torn", "told", "thought", "thrown", "understood", "woken", "worn", "won", "written"]
const TRANSLATE = ["бути","бити", "стати", "починати", "зігнути", "ставка", "кусати", "кровоточити", "дути/дмухати", "ломати", "порода",
    "принести", "будувати", "спалювати", "купувати", "упіймати", "вибирати", "прийти", "вартість", "різати", "робити", "копати",
    "малювати", "мріяти", "пити", "керувати(автомобілем)", "їсти", "падати", "годувати", "відчувати", "боротися", "шукати", "літати", "забувати",
    "пробачити", "замерзнути", "отримати", "давати", "йти", "рости", 'вішати',"мати", "чути", "сховати", "ударяти/бити", "утримувати", "робити боляче",
    "зберігати/утримувати", "знати", "лежати", "вести",'вчитись', "худий", "залишати", "позичати", "дозволяти", "втрачати", "зробити", "означає",
    "зустрічати", "платити", "ставити", "кинути", "читати", "їздити(верхи)", "дзвонити", "підніматися", "бігати", "казати",
    "бачити", "продавати", "відправити", "встановити", "струсити", "блищати, (светить)", "взуття", "стріляти", "показувати", "скорочуватися",
    "закрваити", "співати", "раковина", "сидіти", "спати", 'пахнути', "говорити", "витрачати", "розлив", "поширення", "швидкість", "стояти",
    "красти", "застрягати", "жало", "сморід", "лаятись", "підмітати", "плавати", "гойдатись", "брати", "навчати", "рвати",
    "розповідати", "думати", "кинути", "зрозуміти", "прокидатись/будити", "носити одяг", "виграти", "писати"]
const DICTIONARY_LIST = [TRANSLATE, BASE_FORM, PAST_SIMPLE, PAST_PARTICIPLE]
const NAMES_BUTTONS = ['learn', 'exam', 'test', 'check']
const BUTTONS = createButtons(NAMES_BUTTONS)

let main_container = document.getElementsByClassName('container')[0]

let table = createTable()
let verb_positions = []


document.addEventListener('DOMContentLoaded', () => {
    drawTable(table, BUTTONS[0])
    main_container.appendChild(createForm(1))
})

function createButtons(NAMES_BUTTONS) {
    let buttonsList = []
    for (let i = 0; i < NAMES_BUTTONS.length; i++) {
        let button = document.createElement('div')
        button.classList.add('btn', "btn-primary", "mx-2", NAMES_BUTTONS[i])
        buttonsList.push(button)
    }
    buttonsList.forEach((elem) => {
        if (elem.classList.contains('test')) {
            elem.innerText = 'test'
            elem.addEventListener('click', () => {
                main_container.innerHTML = ''
                let form = createForm(verb_positions)
                main_container.appendChild(form)
                main_container.appendChild(BUTTONS[3])
            })
        } else if (elem.classList.contains('learn')) {
            elem.innerText = 'learn'
            elem.addEventListener('click', () => {
                    let container = document.getElementsByClassName('container')[0]
                    container.innerHTML = ''
                    verb_positions = makeWordPositionsList(BASE_FORM)
                    createTableBody(verb_positions)
                    let table = createTable(verb_positions)
                    drawTable(table, BUTTONS[2])
                }
            )
        } else if (elem.classList.contains('check')) {
            elem.innerText = 'check'
            elem.addEventListener('click', () => {
                let pass = false
                let data = document.querySelectorAll('input')
                data.forEach((input) => {
                    let counter = input.getAttribute('id')
                    let counterForm = counter.charAt(counter.length - 1)
                    let counterWord = counter.slice(0, counter.length - 1)
                    if (input.value.trim().toLocaleLowerCase() !== DICTIONARY_LIST[counterForm][counterWord]) {
                        input.setAttribute('placeholder', `${input.value.trim()} is incorrect, correct value = ${DICTIONARY_LIST[counterForm][counterWord]}`)
                        input.value = ''
                        if (!input.classList.contains('incorrect')) {
                            input.classList.add('incorrect')
                            if (!input.classList.contains('bg-success')) {
                                input.classList.remove('bg-success')
                            }
                        }
                    } else {
                        if (input.classList.contains('incorrect')) {
                            input.classList.remove('incorrect')
                            input.setAttribute('disabled', "")
                        }
                        if (!input.classList.contains('bg-success')) {
                            input.classList.add('bg-success')
                        }
                    }
                })
                for (let i = 0; i < data.length; i++) {
                    if (data[i].classList.contains('incorrect')) {
                        pass = false
                        break;
                    } else {
                        pass = true
                    }
                }
                if (pass) {
                    alert('Great, get nex one')
                    let buttonCheck = document.querySelector('.check')
                    buttonCheck.remove()
                    main_container.appendChild(BUTTONS[0])
                } else {
                    alert('Wrong, write correct answers!')
                }
            })
        }
    })
    return buttonsList
}

function createForm(wordsPositions = []) {
    let form = document.createElement('form')
    for (let k = 0; k < wordsPositions.length; k++) {
        let formRow = document.createElement('div')
        formRow.classList.add('form-row', 'form-group')
        for (let i = 0; i < DICTIONARY_LIST.length; i++) {
            let col = document.createElement('div')
            col.classList.add('col-12', 'col-md-6')
            let input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.classList.add('form-control')
            if (i < 1) {
                input.setAttribute('disabled', "")
                input.setAttribute('value', DICTIONARY_LIST[i][wordsPositions[k]])
            }
            if (i === 1) {
                input.setAttribute('placeholder', 'Base form')
            }
            if (i === 2) {
                input.setAttribute('placeholder', 'past simple')
            }
            if (i === 3) {
                input.setAttribute('placeholder', 'past participle')
            }
            input.setAttribute('id', String(wordsPositions[k]) + String(i))
            col.appendChild(input)
            formRow.appendChild(col)
        }
        form.appendChild(formRow)
        //main_container.appendChild(BUTTONS[3])
    }
    return form
}

function createTableHead() {
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    thead.appendChild(tr)
    for (let i = 0; i < TABLE_HEAD.length; i++) {
        let th_scope_col = document.createElement('th')
        th_scope_col.setAttribute('scope', 'col')
        th_scope_col.innerText = TABLE_HEAD[i]
        tr.appendChild(th_scope_col)
    }
    return thead
}

function createTableBody(PositionsArr) {
    let tbody = document.createElement('tbody')
    if (PositionsArr === undefined) {
        for (let i = 0; i < BASE_FORM.length, i < PAST_SIMPLE.length, i < PAST_PARTICIPLE.length, i < TRANSLATE.length; i++) {
            let html = '<th scope="row">' + (parseInt(i) + 1) + '</th><td>' + BASE_FORM[i] + '<br>' + TRANSLATE[i] + '</td><td>' +
                PAST_SIMPLE[i] + '</td><td>' + PAST_PARTICIPLE[i] + '</td>'
            let tr = document.createElement('tr')
            tr.innerHTML = html
            tbody.appendChild(tr)
        }
    } else {
        for (let i = 0; i < PositionsArr.length; i++) {
            let html = '<th scope="row">' + (parseInt(i) + 1) + '</th><td>' + BASE_FORM[PositionsArr[i]] + '<br>' +
                TRANSLATE[PositionsArr[i]] + '</td><td>' + PAST_SIMPLE[PositionsArr[i]] + '</td><td>' +
                PAST_PARTICIPLE[PositionsArr[i]] + '</td>'
            let tr = document.createElement('tr')
            tr.innerHTML = html
            tbody.appendChild(tr)
        }
    }
    return tbody
}

function drawTable(table, button) {
    main_container.innerHTML = ''
    main_container.appendChild(table)
    main_container.appendChild(button)
}

function makeWordPositionsList(wordsArr) {
    let maxLength = wordsArr.length
    let positions = []
    for (let i = 0; i < WORDS_IN_PART; i++) {
        positions.push(Math.floor(Math.random() * maxLength))
    }
    return positions
}

function createTable(wordsPositions) {
    let table = document.createElement('table')
    table.classList.add('table')
    let thead = createTableHead()
    let tbody = createTableBody(wordsPositions)
    table.appendChild(thead)
    table.appendChild(tbody)
    return table
}
