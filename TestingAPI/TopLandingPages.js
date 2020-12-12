// Top Landing Pages - Returns the top landing pages at a client site for a particular date range

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/KPI/toplandingpages?dateid=14',
    headers: {
        'Authorization-Token': 'xxxxx',
        'ClientID': 'xxxxx'
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
 * {
  "Description": "The top landing pages at a client site for a particular date range",
  "PagesList": [
    {
      "CountOfVisits": 2,
      "PageLocation": "http://www.ChaffinchDating.co.uk/Index.html",
      "PageTitle": "Chaffinch Dating Home Page",
      "AverageDuration": "Single Page"
    },
    {
      "CountOfVisits": 1,
      "PageLocation": "http://www.FaxAndTelexSupplies.co.uk/Index.html",
      "PageTitle": "Fax and Telex Supplies Home Page",
      "AverageDuration": "Single Page"
    },
    {
      "CountOfVisits": 1,
      "PageLocation": "http://www.behold-marketing.com/Index.html",
      "PageTitle": "Behold Marketing Home Page",
      "AverageDuration": "Single Page"
    }
  ]
}
 *
 */ 