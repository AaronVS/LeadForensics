// Latest Visits - Returns the latest visits, limited by the number of results required

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/KPI/latestvisits?numberOfResults=10',
    headers: {
        'Authorization-Token': 'Zax4qjY5w3tmAlqJUajROgW',
        'ClientID': '45656'
    },
    success: function (data) {
        if (data.LatestVisitsList.length > 0) {
            //we have a latest visit record 
        }
        else {
            //we do not have a latest visit record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

// numberOfResults
//The number of records to return in the call respond
/*
{
  "Description": "The latest visits, limited by the number of results required",
  "LatestVisitsList": [
    {
      "VisitID": 1258759738,
      "BusinessID": 1101281,
      "Name": "Bonafide Bones The Butcher",
      "StartDateTime": "2016-06-27T15:58:38"
    },
    {
      "VisitID": 1258759818,
      "BusinessID": 1101275,
      "Name": "Ferret Acupuncture",
      "StartDateTime": "2016-06-27T15:58:38"
    }
  ]
}
*/
