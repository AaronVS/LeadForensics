// Latest Visits - Returns the latest visits, limited by the number of results required

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/KPI/latestvisits?numberOfResults=10',
    headers: {
        'Authorization-Token': 'Zax4qjY5w3tmAlqJUajROgW',
        'ClientID': '45656'
    },
    success: function (data) {
        if (data.LatestVisitsList.length > 0) {
            //we have a latest visit record 
        }
        else {
            //we do not have a latest visit record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

// numberOfResults
//The number of records to return in the call respon
