let account = ''

$('#keyboard>div').click(function (a) {
    if(a.target.innerText == 'delete' || a.target.innerText == 'clear'){
        if(a.target.innerText == 'delete'){
            account = account.substring(0, account.length-1)
            console.log(account);
        }else{
            account = ''
        }
    }else{
        account += a.target.innerText
    }
    $('#account').text(account)
    $('#result').text(eval(account) == undefined? '=':`=  ${eval(account)}`)
})