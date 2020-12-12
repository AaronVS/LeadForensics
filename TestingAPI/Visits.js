// Visits - Returns the number of visits made to a client site of businesses
// assigned to a user in the date range supplied for the number of results required

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/kpi/visits?datetypeid=1&numberOfResults=2&clientuserid=192301',
    headers: {
        'Authorization-Token': 'xxxxxxx',
        'ClientID': 'xxxxxx'
    },
    success: function (data) {
        if (data.VisitsList.length > 0) {
            //we have a visit record 
        }
        else {
            //we do not have a visit record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

/*
 * 
datetypeid
The date type returned. Allowed values are 1: days, 2:weeks, 3:months

numberOfResults
The number of records to return in the call response

clientuserid
The unique identifier of the user to return the funnel for (returned from the GetAssignedToList reference data call)
 * 
 * 
{
  "Description": "The number of visits made to a client site of businesses assigned to a user in the date range supplied for the number of results required",
  "VisitsList": [
    {
      "DateTypeID": 1,
      "Day": "2016-06-28T00:00:00",
      "DateText": "28/06/2016",
      "Hits": 0
    },
    {
      "DateTypeID": 1,
      "Day": "2016-06-27T00:00:00",
      "DateText": "27/06/2016",
      "Hits": 0
    }
  ]
}
 */ 
