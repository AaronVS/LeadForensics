//GetCountryList - Returns a list of the countries that are used by Lead Forensics.

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: '.../GetCountryList?pagesize=5&pageno=1',
    headers: {
        'Authorization-Token': 'xxxxxx',
        'ClientID': 'xxxxxx'
    },
    success: function (data) {
        if (data.List.length > 0) {
            //we have a country record 
        }
        else {
            //we do not have a country record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});
