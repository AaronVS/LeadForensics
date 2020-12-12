// GetDateList - Returns a list of the date ranges that are used by LF
$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interacaat.leadforensics.com/WebApi_v2/Reference/GetDateList',
    headers: {
        'Authorization-Token': 'xxxxxx',
        'ClientID': 'xxxxxx'
    },
    success: function (data) {
        if (data.List.length > 0) {
            //we have a date record 
        }
        else {
            //we do not have a date record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

/*RESULT
{
  "List": [
    {
      "ID": 1,
      "Name": "Today"
    },
    {
      "ID": 2,
      "Name": "Last 2 Days"
    },
    {
      "ID": 3,
      "Name": "Last 3 Days"
    },
    {
      "ID": 4,
      "Name": "Last 4 Days"
    },
    {
      "ID": 5,
      "Name": "Last 5 Days"
    },
    {
      "ID": 6,
      "Name": "Last 6 Days"
    },
    {
      "ID": 7,
      "Name": "Last 7 Days"
    },
    {
      "ID": 14,
      "Name": "Last 14 Days"
    }
  ],
  "PageSize": 100,
  "PageCount": 1,
  "RecordCount": 8,
  "CurrentPage": 1
}
 */ 
