const dateText = document.getElementById('date-text');
const dateBox = document.getElementById('date-box');
const timeBox = document.getElementById('time-box');

const date = new Date();


function getDates(day, month, year) {
    let cardsDiv = document.createElement('div');
    for (let i = 1; i <= new Date(parseInt(year), parseInt(month) + 1, 0).getDate(); i++) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        if (i <= day) {
            cardDiv.classList.add('active');
        }
        cardDiv.innerHTML = i;
        cardsDiv.appendChild(cardDiv);
    }
    return cardsDiv.innerHTML;
}

function getTimes(hours, minutes) {
    let cardsDiv = document.createElement('div');
    for (let i = 1; i <= 24; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('minCard');
        if (i <= hours) {
            cardDiv.innerHTML = i;
            cardDiv.classList.add('active');
        }
        else if (i == hours+1) {
            for(let i = 0; i < 6; i++){
                let minDiv = document.createElement('div');
                minDiv.classList.add('mins');
                if(minutes > 0) {
                    minDiv.classList.add('active');
                    minutes -= 10;
                }
                cardDiv.appendChild(minDiv);
            }
        }    
        cardsDiv.appendChild(cardDiv);
    }
    return cardsDiv.innerHTML;
}


dateText.innerHTML = `${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} <div class="time-text">${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>`;
dateBox.innerHTML = getDates(date.getDate(), date.getMonth(), date.getFullYear());
timeBox.innerHTML = getTimes(date.getHours(), date.getMinutes());
setInterval(() => {
    timeBox.innerHTML = getTimes(date.getHours(), date.getMinutes());
}, 60000);
