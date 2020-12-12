//GetPagesByVisit - Returns the page information associated with the provided visit identifier

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/Page/GetPagesByVisit?visitid=1258759738&pagesize=10&pageno=1',
    headers: {
        'Authorization-Token': 'xxxxx',
        'ClientID': 'xxxx'
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
 * 
 {
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
