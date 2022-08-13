"use strict"
const TABLE_HEAD = ['#', 'base form', 'past simple', 'past participle']

const BASE_FORM = ["beat", "become", "begin", "bend", "bet", "bite", "bleed", "blow", "break", "breed", "bring",
    "build", "burn", "buy", "catch", "choose", "come", "cost", "cut", "do", "dig", "draw", "dream", "drink", "drive",
    "eat", "fall", "feed", "feel", "fight", "find", "fly", "forget", "forgive", "freeze", "get", "give", "go", "grow",
    "have", "hear", "hide", "hit", "hold", "hurt", "keep", "know", "lay", "lead", "lean", "leave", "lend", "let",
    "lose", "make", "mean", "meet", "pay", "put", "quit", "read", "ride", "ring", "rise", "run", "say",
    "see", "sell", "send", "set", "shake", "shine", "shoe", "shoot", "show", "shrink", "shut", "sing", "sink", "sit",
    "sleep", "speak", "spend", "spill", "spread", "speed", "stand", "steal", "stick", "sting", "stink", "swear",
    "sweep", "swim", "swing", "take", "teach", "tear", "tell", "think", "throw", "understand", "wake", "wear", "win",
    "write"]
const PAST_SIMPLE = ["beat", "became", "began", "bent", "bet", "bit", "bled", "blew", "broke", "bred", "brought", "built",
    "burnt/burned", "bought", "caught", "chose", "came", "cost", "cut", "did", "dug", "drew", "dreamt/dreamed", "drank", "drove",
    "ate", "fell", "fed", "felt", "fought", "found", "flew", "forgot", "forgave", "froze", "got", "gave", "went", "grew", "had",
    "heard", "hid", "hit", "held", "hurt", "kept", "knew", "laid", "led", "leant/leaned", "left", "lent", "let", "lost", "made",
    "meant", "met", "paid", "put", "quit", "read", "rode", "rang", "rose", "ran", "said", "saw", "sold", "sent", "set",
    "shook", "shone", "shod", "shot", "showed", "shrank", "shut", "sang", "sank", "sat", "slept", "spoke", "spent", "spilt/spilled",
    "spread", "sped", "stood", "stole", "stuck", "stung", "stank", "swore", "swept", "swam", "swung", "took", "taught", "tore",
    "told", "thought", "threw", "understood", "woke", "wore", "won", "wrote"]

const PAST_PARTICIPLE = ["beaten", "become", "begun", "bent", "bet", "bitten", "bled", "blown", "broken", "bred", "brought",
    "built", "burnt/burned", "bought", "caught", "chosen", "come", "cost", "cut", "done", "dug", "drawn", "dreamt/dreamed",
    "drunk", "driven", "eaten", "fallen", "fed", "felt", "fought", "found", "flown", "forgotten", "forgiven", "frozen", "got",
    "given", "gone", "grown", "had", "heard", "hidden", "hit", "held", "hurt", "kept", "known", "laid", "led", "leant/leaned", "left",
    "lent", "let", "lost", "made", "meant", "met", "paid", "put", "quit", "read", "ridden", "rung", "risen", "run", "said",
    "seen", "sold", "sent", "set", "shaken", "shone", "shod", "shot", "shown", "shrunk", "shut", "sung", "sunk", "sat", "slept",
    "spoken", "spent", "spilt/spilled", "spread", "sped", "stood", "stolen", "stuck", "stung", "stunk", "sworn", "swept", "swum",
    "swung", "taken", "taught", "torn", "told", "thought", "thrown", "understood", "woken", "worn", "won", "written"]

const TRANSLATE = ["бити", "стати", "почати", "зігнути", "ставка", "укус", "кровоточити", "удар", "перерву", "порода",
    "принести", "будувати", "спалювати", "купити", "виловити", "вибрати", "прийти", "вартість", "вирізати", "робити", "копати",
    "малювати", "сон", "пити", "диск", "їсти", "падіння", "годувати", "відчувати", "боротися", "знайти", "літати", "забути",
    "пробачити", "замерзнути", "отримати", "дати", "йти", "рости", "мати", "чути", "приховати", "удар", "утримувати", "боляче",
    "зберегти", "знати", "лежати", "вести", "худий", "залишати", "позичати", "дозволяє", "втрачати", "зробити", "означає",
    "зустріти", "платити", "поставити", "кинути", "прочитати", "їздити", "кільце", "підніматися", "бігати", "сказати",
    "побачити", "продавати", "відправити", "встановити", "струсити", "блиск", "взуття", "стріляти", "показувати", "скорочуватися",
    "закрити", "співати", "раковина", "сидіти", "сон", "говорити", "витрачати", "розлив", "поширення", "швидкість", "стояти",
    "красти", "палка", "жало", "сморід", "лаятись", "підмітати", "плавати", "гойдалка", "брати", "навчати", "сльоза",
    "розповідати", "думаю", "кинути", "зрозуміти", "розбудити", "знос", "виграти", "писати"]

const MAIN_TABLE_BUTTONS = ['learn', 'exam']
const LEARN_BUTTONS = ['minor_test']

let main_container = document.getElementsByClassName('container')[0]

let table = createTable()

drawTable(table, MAIN_TABLE_BUTTONS)

drawLearnProcess()


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
        console.log("I'm a createTableBody function else")
        console.log(tbody)
        console.log("I'm a createTableBody function else")
    }
    return tbody
}

function drawTable(table, buttons_names) {
    main_container.innerHTML = ''
    main_container.appendChild(table)
    let buttons = drawButtons(buttons_names)
    for (let i = 0; i < buttons.length; i++) {
        main_container.appendChild(buttons[i])
    }
}

function drawButtons(listButtonsName) {
    let tableButtonsArr = []
    if(Array.isArray(listButtonsName)) {
        for (let i = 0; i < listButtonsName.length; i++) {
            let button = document.createElement('div')
            button.innerText = listButtonsName[i]
            button.classList.add(listButtonsName[i], 'btn', "btn-primary", "mx-2")
            tableButtonsArr.push(button)
        }
    } else {
        let button = document.createElement('div')
        button.innerText = listButtonsName
        button.classList.add(listButtonsName.trim(), 'btn', "btn-primary", "mx-2")
        tableButtonsArr.push(button)
    }
    return tableButtonsArr
}

function makeWordPositionsList(wordsArr) {
    let maxLength = wordsArr.length
    let positionsArr = []
    for (let i = 0; i < 5; i++) {
        positionsArr.push(Math.floor(Math.random() * maxLength))
    }
    return positionsArr
}

function takeWordsByPosition(verbArr, positionsArr) {
    let wordsArr = []
    for (let k = 0; k < positionsArr.length; k++) {
        let verbs = []
        for (let j = 0; j < verbArr.length; j++) {
            verbs.push(verbArr[j][positionsArr[k]])
        }
        wordsArr.push(verbs)
    }
    return wordsArr
}

function drawLearnProcess() {
    try {
        let learnButton = document.getElementsByClassName('learn')[0]
        learnButton.addEventListener('click', () => {
            let container = document.getElementsByClassName('container')[0]
            container.innerHTML = ''
            let verb_positions = makeWordPositionsList(BASE_FORM)
            createTableBody(verb_positions)
            let table = createTable(verb_positions)
            drawTable(table, LEARN_BUTTONS)
        })
    } catch (err) {
        console.log('error in function drawLearnProcess')
    }
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