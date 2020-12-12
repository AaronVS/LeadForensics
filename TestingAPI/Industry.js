//Industries - returns the number of visits made by business industry for the date range supplied

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/KPI/Industries?dateid=14',
    headers: {
        'Authorization-Token': 'xxxxxxx',
        'ClientID': 'xxxxx'
    },
    success: function (data) {
        if (data.IndustryList.length > 0) {
            //we have an industry record 
        }
        else {
            //we do not have an industry record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

/*
 * 
 * dateid
The date range to return the results for (detailed in the GetDateList reference call)

  * {
  "Description": "The number of visits made by business industry for the date range supplied",
  "IndustryList": [
    {
      "EasyDescription": "Moss Management",
      "Visits": 2
    },
    {
      "EasyDescription": "Pricking Fettets",
      "Visits": 1
    },
    {
      "EasyDescription": "Public House",
      "Visits": 1
    },
    {
      "EasyDescription": "Butcher",
      "Visits": 1
    }
  ]
}
 */ 
