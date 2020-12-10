//Returns all of the businesses who have visited the client site between the date range provided.

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/Business/GetAllBusinesses?datefrom=10-05-2016 00:00:00&dateto=12-06-2016 23:59:59&pagesize=5&pageno=1',
    // this url is an example
    headers: {
        'Authorization-Token': '',
        //add the token given, if not, it wont work
        'ClientID': ''
        //add the ID given
    },
    success: function (data) {
        if (data.BusinessList.length > 0) {
            //we have business record (somewhere i guess?)
        }
        else {
            //we do not have a business record
        }
    },
    error: function (err) {
        //ajax error trap
    }
});

// This is all in the URL part
//datefrom: it is the date from which businesses have visited
//dateto: the date to which the businesses have visited
//pagesize: number of records to return in a page of results
//pageno: the particular page of results

