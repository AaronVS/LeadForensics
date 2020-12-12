//GetVisitByBusiness - Returns the visits made by a provided business within a date range

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/Visit/GetVisitsByBusiness?businessid=1101279&datefrom=10-05-2016 00:00:00&dateto=19-06-2016 23:59:59&pagesize=5&pageno=1',
    headers: {
        'Authorization-Token': 'xxxxxx',
        'ClientID': 'xxxxxx'
    },
    success: function (data) {
        if (data.SiteVisitList.length > 0) {
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
 * businessid: unique identifier for the business to return the visits for
 * 
 * 
 * {
  "SiteVisitList": [
    {
      "BusinessID": 1101279,
      "VisitID": 1258759732,
      "StartDateTime": "2016-05-30T15:58:35",
      "EndDateTime": "2016-05-30T15:58:35",
      "Keywords": "",
      "Pages": 1,
      "Multi": 1,
      "ReferrerName": "Google",
      "ReferrerLink": "http://www.google.co.uk"
    }
  ],
  "PageSize": 2,
  "PageCount": 1,
  "RecordCount": 1,
  "CurrentPage": 1
}
 */ 