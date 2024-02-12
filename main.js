// 랜덤번호를 생성✅
// 유저 input을 숫자로 받음✅
// 유저input < randomNum -> Up✅
// 유저input > randomNun -> Down✅
// 유저input = randomNum = 성공!✅
// 유저에게 5번의 기회가 있다.✅
// 5번 안에 맞추기 || 5번 기회를 날리면 게임종료 -> Go 버튼 disabled✅
// reset 버튼을 누르면 게임 초기화✅
// 유저는 1~100까지의 숫자만 입력할 수 있다.✅
// 범위 밖 숫자 입력시 유효한 범위의 숫자입력하란 경고 -> count 차감 x✅
// 유저가 이미 입력한 값을 재입력시 이미 입력한 숫자라는 경고 -> count 차감 x✅
// 숫자 입력해서 Go누르면 input창 숫자 초기화 지워버려~!
// 웹페이지는 반응형 UI로 만들 것

let chance = 5
let randomNum = 0
let inputHistory = []
let userInput = document.getElementById("userInput")
let playButton = document.getElementById("playBtn")
playButton.addEventListener("click", playGame)


let resetButton = document.getElementById("resetBtn")
resetButton.addEventListener("click", reset)

let leftChance = document.getElementById("chance")
let messagesText = document.getElementById("message")


function changeLeftChanceText() {
    leftChance.textContent = `남은 기회 : ${chance}번 남았다잉`

}
changeLeftChanceText()

function changeMessage(messages) {
    messagesText.textContent = messages
}

function reset() {
    chance = 5
    playButton.disabled = false
    makeRandomNumber()
    changeLeftChanceText()
}

function makeRandomNumber() {
    randomNum = Math.floor(Math.random() * 100) + 1
    console.log(randomNum)
}

function playGame() {
    let userValue = userInput.value


    if (userValue == "") {
        changeMessage("숫자를 입력해보슈")
        return
    }

    for (let i = 0; i < inputHistory.length; i++) {
        if (userValue == inputHistory[i]) {
            changeMessage("이미 입력했다잉")
            userInput.value = ""
            return
        }
    }
    inputHistory.push(userValue)


    if (userValue < 1 || userValue > 100) {
        changeMessage("1~100 사이의 숫자만 입력해라잉")
        userInput.value = ""
        return
    }


    chance = chance - 1
    changeLeftChanceText()
    if (chance == 0) {
        playButton.disabled = true
    }

    if (userValue < randomNum) {
        changeMessage("UP⬆️")
    } else if (userValue > randomNum) {
        changeMessage("DOWN⬇️")
    } else {
        changeMessage("정답이다잉!👏🏻")
        playButton.disabled = true
    }

    userInput.value = ""
}

makeRandomNumber()
