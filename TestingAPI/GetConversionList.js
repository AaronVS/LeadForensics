// GetConversionList - Returns a list of conversions that have been set up by the client on the Lead Forensics portal.

$.ajax({
    type: 'GET',
    dataType: 'json',
    url:'.../GetConversionList?pagesize=5&pageno=1',
    headers: {
        'Authorization-Token': 'xxxx',
        'ClientID': 'xxxx'
    },
    success: function (data) {
        if (data.List.length > 0) {
            //we have a conversion record 
        }
        else {
            //we do not have a conversion record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

/* RESULT
{
  "List": [
    {
      "ID": 248182,
      "Name": "About",
      "Condition": "contains",
      "URL": "about"
    },
    {
      "ID": 248184,
      "Name": "Our Process",
      "Condition": "contains",
      "URL": "our-process"
    },
    {
      "ID": 248186,
      "Name": "Contact Us",
      "Condition": "contains",
      "URL": "form"
    }
  ],
  "PageSize": 3,
  "PageCount": 3,
  "RecordCount": 6,
  "CurrentPage": 1
}

*/
