const skillArray      = ['Front-end Developer', 'Back-end Developer', 'Database Admin', 'DevOps Engineer'];
let currentSkillIndex = 0;
let currentWord       = 0;
let writeBackwards    = false;

setInterval(function() {
    let currentSkillElement = skillArray[currentSkillIndex];

    if ( ! writeBackwards ) document.querySelector('#skill').textContent += currentSkillElement[currentWord];

    if ( currentWord === currentSkillElement.length || writeBackwards ) {
        writeBackwards = true;

        let backwardText = currentSkillElement.substring(0, currentWord);

        document.querySelector('#skill').textContent = backwardText;

        if ( currentWord === 0 ) {
            currentSkillIndex++;

            if ( currentSkillIndex === skillArray.length ) currentSkillIndex = 0;

            writeBackwards    = false;
            currentWord       = 0;
        } else {
            currentWord--;
        }

    } else {
        currentWord++;
    }

}, 150);