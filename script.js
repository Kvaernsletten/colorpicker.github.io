
var redSelected = false;
var greenSelected = false;
var blueSelected = false;

var leftSelected = false;
var rightSelected = false;


function setBackgroundColor() {

    if (redSelected) {
        document.getElementById('body').classList = [];
        document.getElementById('body').classList.add('colorRed');
    }
    if (greenSelected) {
        document.getElementById('body').classList = [];
        document.getElementById('body').classList.add('colorGreen');
    }
    if (blueSelected) {
        document.getElementById('body').classList = [];
        document.getElementById('body').classList.add('colorBlue');
    }
}

function setBoxColor() {

    //RED
    //     if(redSelected && leftSelected){
    //         document.getElementById('emptyBoxLeft').classList =[];
    //         document.getElementById('emptyBoxLeft').classList.add('colorRed');
    //     }
    //     if (redSelected && rightSelected){
    //         document.getElementById('emptyBoxRight').classList =[];
    //         document.getElementById('emptyBoxRight').classList.add('colorRed');
    //     }

    //     //GREEN
    //     if(greenSelected && leftSelected){
    //         document.getElementById('emptyBoxLeft').classList =[];
    //         document.getElementById('emptyBoxLeft').classList.add('colorGreen');
    //     }
    //     if(greenSelected && rightSelected){
    //         document.getElementById('emptyBoxRight').classList =[];
    //         document.getElementById('emptyBoxRight').classList.add('colorGreen');
    //     }

    //     //BLUE
    //     if(blueSelected && leftSelected){
    //         document.getElementById('emptyBoxLeft').classList =[];
    //         document.getElementById('emptyBoxLeft').classList.add('colorBlue');
    //     }
    //     if(blueSelected && rightSelected){
    //         document.getElementById('emptyBoxRight').classList =[];
    //         document.getElementById('emptyBox').classList.add('colorBlue');
    // }

    if (redSelected) {
        if (leftSelected && !rightSelected) {
            removeColorsLeft();
            document.getElementById('emptyBoxLeft').classList.add('colorRed');
        }
        else if (rightSelected) {
            removeColorsRight();
            document.getElementById('emptyBoxRight').classList.add('colorRed');
        }
    }
    if (greenSelected) {
        if (leftSelected && !rightSelected) {
            removeColorsLeft()
            document.getElementById('emptyBoxLeft').classList.add('colorGreen');
        }
        else if (rightSelected) {
            removeColorsRight();
            document.getElementById('emptyBoxRight').classList.add('colorGreen');
        }
    }
    if (blueSelected) {
        if (leftSelected && !rightSelected) {
            removeColorsLeft();
            document.getElementById('emptyBoxLeft').classList.add('colorBlue');
        }
        else if (rightSelected) {
            removeColorsRight();
            document.getElementById('emptyBoxRight').classList.add('colorBlue');
        }
    }
}

function removeColorsLeft(){
    document.getElementById('emptyBoxLeft').classList.remove('colorRed');
    document.getElementById('emptyBoxLeft').classList.remove('colorGreen');
    document.getElementById('emptyBoxLeft').classList.remove('colorBlue');
}
function removeColorsRight(){
    document.getElementById('emptyBoxRight').classList.remove('colorRed');
    document.getElementById('emptyBoxRight').classList.remove('colorGreen');
    document.getElementById('emptyBoxRight').classList.remove('colorBlue');
}

function selectedRed() {

    redSelected = true;
    greenSelected = false;
    blueSelected = false;
    selected();
}

function selectedGreen() {

    redSelected = false;
    greenSelected = true;
    blueSelected = false;
    selected();
}

function selectedBlue() {

    redSelected = false;
    greenSelected = false;
    blueSelected = true;
    selected();
}

function selected() {

    if (redSelected) {
        document.getElementById('green').classList = [];
        document.getElementById('blue').classList = [];
        document.getElementById('red').classList.add('selected');
    }

    if (greenSelected) {
        document.getElementById('red').classList = [];
        document.getElementById('blue').classList = [];
        document.getElementById('green').classList.add('selected');
    }

    if (blueSelected) {
        document.getElementById('red').classList = [];
        document.getElementById('green').classList = [];
        document.getElementById('blue').classList.add('selected');
    }

}

function selectedLeft() {

    leftSelected = true;
    rightSelected = false;
    selectedLR();

}

function selectedRight() {

    leftSelected = false;
    rightSelected = true;
    selectedLR();

}

function selectedLR() {

    if (leftSelected) {
        document.getElementById('emptyBoxLeft').classList.add('selected');
        document.getElementById('emptyBoxRight').classList.remove('selected');
    }

    if (rightSelected) {
        document.getElementById('emptyBoxLeft').classList.remove('selected');
        document.getElementById('emptyBoxRight').classList.add('selected');
    }
}

    