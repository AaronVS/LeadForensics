//Referring Sites - Returns the referring sites for a client site in a particular date range supplied
$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/KPI/ReferringSites?dateid=2',
    headers: {
        'Authorization-Token': 'xxxxx',
        'ClientID': 'xxxxx'
    },
    success: function (data) {
        if (data.ReferringSiteList.length > 0) {
            //we have a referring site record 
        }
        else {
            //we do not have a referring site record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});


/*
 *{
  "Description": "The referring sites for a client site in a particular date range",
  "ReferringSiteList": [
    {
      "Name": "Google (Other)",
      "Hits": 5,
      "Image": "Google.png",
      "Percentage": 100
    },
    {
      "Name": "Google (PPC)",
      "Hits": 0,
      "Image": "GooglePPC.png",
      "Percentage": 0
    }
  ]
}
 *
 */ 
