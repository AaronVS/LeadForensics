//MostActiveCompanies - Returns the most active companies on a client site for the date range supplied limited to the number of results required

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/KPI/MostActiveCompanies?dateid=14&numberOfResults=2',
    headers: {
        'Authorization-Token': 'xxxxx',
        'ClientID': 'xxxx'
    },
    success: function (data) {
        if (data.MostActiveCompaniesList.length > 0) {
            //we have an active company record 
        }
        else {
            //we do not have an active company record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

/*
 * dateid
int32
The date range to return the results for (detailed in the GetDateList reference call)
 * 
 * 
 * {
  "Description": "The most active companies on a client site for the date range supplied limited to the number of results required",
  "MostActiveCompaniesList": [
    {
      "NumberOfVisits": 2,
      "BusinessID": 1101286,
      "Name": "Mostly Moss Limited",
      "Town": "Swansea",
      "Country": "United Kingdom",
      "Telephone": "01792 563 1232",
      "Website": "http://mostlymosslimited.com",
      "URL": "http://http://mostlymosslimited.com"
    },
    {
      "NumberOfVisits": 1,
      "BusinessID": 1101275,
      "Name": "Ferret Acupuncture",
      "Town": "Thretford",
      "Country": "United Kingdom",
      "Telephone": "01842 2323346",
      "Website": "http://www.Ferret-Acupuncture.org",
      "URL": "http://http://www.Ferret-Acupuncture.org"
    }
  ]
}
*/