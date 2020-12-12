//MostPopularPages

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/KPI/MostPopularPages?dateid=4',
    headers: {
        'Authorization-Token': 'xxxxx',
        'ClientID': 'xxxxxx'
    },
    success: function (data) {
        if (data.PagesList.length > 0) {
            //we have a page record 
        }
        else {
            //we do not have a page record 
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

Returns the most popular pages viewed on a client site for the date range supplied
 
 {
  "Description": "The most popular pages viewed on a client site for the date range supplied",
  "PagesList": [
    {
      "CountOfVisits": 2,
      "PageLocation": "http://www.ChaffinchDating.co.uk/About.html",
      "PageTitle": "Chaffinch Dating About",
      "AverageDuration": "00:00:01"
    },
    {
      "CountOfVisits": 2,
      "PageLocation": "http://www.ChaffinchDating.co.uk/Index.html",
      "PageTitle": "Chaffinch Dating Home Page",
      "AverageDuration": "00:00:01"
    }
  ]
}
*/