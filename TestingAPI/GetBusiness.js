// Returns the businesses details for the provided identifier

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/Business/GetBusiness?businessid=1101281',
    //have to check if using this testing URL can work
    headers: {
        'Authorization-Token': '',
        //add the token given
        'ClientID': '',
        //add the client ID given
    },
    success: function (data) {
        if (data != undefined) {
            //we have a business record
        }
        else {
            //we do not have a business record
        }
    },
    error: function (err) {
        //ajax error trap
    }
});

//businessid [in the url part]: it is the Lead Forensics unique business identifier
