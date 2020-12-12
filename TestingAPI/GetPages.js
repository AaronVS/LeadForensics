//GetPages - Returns the page information associated with the provided date range

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/Page/GetPages?datefrom=07/08/2016 00:00:00&dateto=08/08/2016 23:59:59&pagesize=10&pageno=1',
    headers: {
        'Authorization-Token': 'xxxxxx',
        'ClientID': 'xxxxxx'
    },
    success: function (data) {
        if (data.PageVisitList.length > 0) {
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
 * QUERY PARAMS
 * datefrom
The date from which the visit pages will be returned.
If no value is supplied,
the current day will be used.

dateto*
The date to which the visit pages will be returned. 
If no value is entered,
a value of a day later than the date from will be used.

pagesize*
Number of records to return in a page of results

pageno*
The particular page of results to return
 * 
 * {
  "PageVisitList": [
    {
      "BusinessID": 1101281,
      "VisitID": 1258759738,
      "PageVisitDateTime": "2016-06-01T15:58:35",
      "PageLocation": "http://www.FaxAndTelexSupplies.co.uk/Index.html",
      "PageTitle": "Fax and Telex Supplies Home Page",
      "ReferringSite": ""
    },
    {
      "BusinessID": 1101281,
      "VisitID": 1258759738,
      "PageVisitDateTime": "2016-06-01T15:58:37",
      "PageLocation": "http://www.FaxAndTelexSupplies.co.uk/About.html",
      "PageTitle": "About Fax and Telex Supplies",
      "ReferringSite": ""
    }
  ],
  "PageSize": 10,
  "PageCount": 1,
  "RecordCount": 2,
  "CurrentPage": 1
}
 */ 