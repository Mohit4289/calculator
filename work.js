document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById("input")
    let first = '';
    let second  = '';
    let operator = '';
    const newdiv = document.querySelectorAll(".numbers div") ;

    newdiv.forEach(elem => {
        elem.addEventListener('click' , function (){
            const content = this.textContent;

            if (content === 'Ac') {
                first = '';
                second = '';
                operator = '';
                display.textContent = ''
            }else if (!isNaN(content) || content === '.'){
                first += content
                display.textContent = first
            }else if (content === '=' && operator ){
                if (first && second) {
                    first = calc(second,first,operator)
                    display.textContent = first
                    second = '';
                    operator = '';
                }
            }else if (['+','-','/','x','%'].includes(content)){
                if (first){
                    second = first
                    first = '';
                    operator = content === 'x' ? '*' : content
                    display.textContent = operator
                }
            }
        });
    });
    function calc(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return b !== 0 ? (a / b).toString() : 'error';
            case '%':
                return (a % b).toString();
            default:
                return '';
        }
    }
});



