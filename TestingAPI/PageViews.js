//PageViews - Returns the page views which have been made by businesses assigned to a user in a date range for the number of results returned

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/KPI/PageViews?datetypeid=2&numberOfResults=2&clientuserid=192301',
    headers: {
        'Authorization-Token': 'xxxxx',
        'ClientID': 'xxxxx'
    },
    success: function (data) {
        if (data.PageViewsList.length > 0) {
            //we have a page view record 
        }
        else {
            //we do not have a page view record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

/*
 * 
 * datetypeid
The date type returned. Allowed values are 1: days, 2:weeks, 3:months

numberOfResults
The number of records to return in the call response

clientuserid
The unique identifier of the user to return the funnel for (returned from the GetAssignedToList reference data call)
 * 
 * 
 * {
  "Description": "The page views which have been made by businesses assigned to a user in a date range for the number of results returned",
  "PageViewsList": [
    {
      "DateTypeID": 2,
      "Day": "2016-06-27T00:00:00",
      "DayEnd": "0001-01-01T00:00:00",
      "DateText": "27 - 3 July",
      "PageViews": 0
    },
    {
      "DateTypeID": 2,
      "Day": "2016-06-20T00:00:00",
      "DayEnd": "0001-01-01T00:00:00",
      "DateText": "20 - 26 June",
      "PageViews": 0
    }
  ]
}
*/