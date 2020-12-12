//GetIndsutryList - Returns a list of all the industries which are used by LF

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: '';
    headers: {
        'Authorization-Token': '',
        'ClientID': '',
    },
    success: function (data) {
        if (data.List.length > 0) {
            //we have an industry record
        }
        else {
            //we do not have an industry record
        }
    },
    error: function (err) {
        //ajax error trap
    }
});

/* QUERY PARAMETERS
pagesize: number of records to return in a page of results
pageno: the particular page of results to return
*/