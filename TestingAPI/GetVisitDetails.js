//GetVisitDetails - returns unique identifier for the visit details to be returned

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/Visit/GetVisitDetails?visitid=1258759738',
    headers: {
        'Authorization-Token': 'xxxxxx',
        'ClientID': 'xxxxxx'
    },
    success: function (data) {
        if (data != undefined) {
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
 * {
    "Conversions": [
        {
            "Name": "Example Conversion 1"
        },
        {
            "Name": "Example Conversion 2"
        }
    ],
    "Assignees": [
        {
            "ClientUserID": "123456",
            "Name": "User Name 1"
        },
        {
            "ClientUserID": "654321",
            "Name": "User Name 2"
        },
        {
            "ClientUserID": "615243",
            "Name": "User Name 3"
        }
    ],
    "Duration": "00:01:13",
    "Browser": "Firefox",
    "OperatingSystem": "Windows",
    "Device": "PC"
}
 */ 
