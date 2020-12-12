// GetClientPortalLogins - Returns a list of all Logins into the Lead Forensics Portal. This call replicates the result produced by the Login Report available within the Portal.

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'url /GetClientPortalLogins?datefrom=18-09-2018 00:00:00&dateto=19-09-2018 23:59:59&pagesize=5&pageno=1',
    headers: {
        'Authorization-Token': 'xxxxxxxxxxxxxxx',
        'ClientID': 'xxxxx'
    },
    success: function (data) {
        if (data.List.length > 0) {
            //we have Login records
        }
        else {
            //we do not have any Login records
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

/* QUERY PARAMETERS
datefrom: the date from where the records are included. Only the date part will be considered.
dateto: the date where records are included. Only the date part will be considered.
The parameters DateFrom and DateTo only consider the date part of the value, ignoring the time.

[Example:
DateFrom = '11-09-2018 08:00:00'
DateTo = '12-09-2018 17:59:59'
Result = Will return all Login results from '11-09-2018 00:00:00' 
to '12-09-2018 23:59:59'
,matching the results shown in the Portal for that custom date range]

pagesize: number of records to return in a page of results.
pageno: the particular page of results to return

*/ 
