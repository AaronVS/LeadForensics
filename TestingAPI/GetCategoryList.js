//GetCategoryList - Returns a list of the
//categories created by the client which are used to classify businesses.

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://interact.leadforensics.com/WebApi_v2/Reference/GetCategoryList?pagesize=5&pageno=1',
    headers: {
        'Authorization-Token': 'xxxxxxxxxxxxxxxxxxxx',
        'ClientID': 'xxxx'
    },
    success: function (data) {
        if (data.List.length > 0) {
            //we have a category record 
        }
        else {
            //we do not have a category record 
        }
    },
    error: function (err) {
        //ajax error trap  
    }
});

/* QUERY PARAMETERS
pagesize: number of records to return in a page of results
pageno:the particular page of results to return

*/
