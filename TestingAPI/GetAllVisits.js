// GetAllVisits -

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/Visit/GetAllVisits?datefrom=10-05-2016 00:00:00&dateto=19-06-2016 23:59:59&pagesize=5&pageno=1',
    headers: {
        'Authorization-Token': 'xxxxxx',
        'ClientID': 'xxxxx'
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
{
  "SiteVisitList": [
    {
      "BusinessID": 1101281,
      "VisitID": 1258759738,
      "StartDateTime": "2016-05-30T15:58:38",
      "EndDateTime": "2016-06-01T15:58:37",
      "Keywords": "",
      "Pages": 1,
      "Multi": 1,
      "ReferrerName": "Google",
      "ReferrerLink": "http://www.google.co.uk"
    },
    {
      "BusinessID": 1101275,
      "VisitID": 1258759818,
      "StartDateTime": "2016-05-30T15:58:38",
      "EndDateTime": "2016-05-30T15:58:38",
      "Keywords": "keyword",
      "Pages": 2,
      "Multi": 1,
      "ReferrerName": "Google",
      "ReferrerLink": "http://www.google.co.uk"
    }
  ],
  "PageSize": 2,
  "PageCount": 4,
  "RecordCount": 6,
  "CurrentPage": 1
}
*/ 
