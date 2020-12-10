// Returns all the businesses assigned to the provided client user identity within the provided date range

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/Business/GetBusinessesByAssignedTo?clientuserid=192301&datefrom=18-11-2015 00:00:00&dateto=19/11/2016 23:59:59&pagesize=5&pageno=1',
    //url with the specific clientid given, also getting the date, adding the size of the page and numbers of it
    headers: {
        'Authorization-Token': '',
        //token given to us
        'ClientID': '',
        //ID given to us
    },
    success: function (data) {
        if (data.BusinessList.length > 0) {
            //we have a business record
        }
        else {
            //we do not have a business record
        }
    },
    error: function (err) {
        //ajax error trap
    }
})

//Parameters used in the URL section
//clientuserid: the unique identifier for the user that the businesses are assigned to
//datefrom: the date from which the businesses have visited
//dateto: the date to which the businesses have visited
//pagesize: number of records to return in a apge of results
//pageno: the particular page of results to return
