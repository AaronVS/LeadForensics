# Lead Forensics
### Pulling information out of Lead Forensics.

## MOST RELEVANT APIs
As the main thing is getting the information, the name of the company, the date, the time and the web if possible, these APIs are the ones that do it the best way. (Even having similar abilities).

  - [`GetVisitDetails`](https://github.com/AaronVS/LeadForensics/blob/main/TestingAPI/GetVisitDetails.js) - returns unique identifier for the visit details to be returned.

  - [`GetVisitByBusiness`](https://github.com/AaronVS/LeadForensics/blob/main/TestingAPI/GetVisitByBusiness.js) - returns the visits made by a provided business within a *date* range

  - [`GetAllVisits`](https://github.com/AaronVS/LeadForensics/blob/main/TestingAPI/GetAllVisits.js) - gets all the visits in a range of time, getting the IDs, plus extra info.

  - [`Visits`](https://github.com/AaronVS/LeadForensics/blob/main/TestingAPI/Visits.js) - returns the number of visits made to a client site of businesses assigned to a user in the
               date range supplied for the number of results required.

  - [`LatestVisits`](https://github.com/AaronVS/LeadForensics/blob/main/TestingAPI/LatestVisits.js) - returns the latest visits, limited by the number of results required.

  - [`TopLandingPages`](https://github.com/AaronVS/LeadForensics/blob/main/TestingAPI/TopLandingPages.js) - returns the top landing pages at a client site for a particular date

  - [`ReferringSites`](https://github.com/AaronVS/LeadForensics/blob/main/TestingAPI/ReferringSites.js) - returns the referring sites for a client site in a particular date range

  - [`PageViews`](https://github.com/AaronVS/LeadForensics/blob/main/TestingAPI/PageViews.js) - returns the page views which have been made by businesses assigned to a user

## USE FOR CLIENT ID AND TOKEN
So, LeadForensics gives you a unique `ClientID` and a unique `Authorization Token`.
  - Both are used for identifying yourself for getting the information out of the webpage that has relation
    with LF.
  - The only thing you need to have is a literal webpage or business with relation to it, and then put the URL     of the webpage you want to get the information from and obviously using the different APIs for it. 


--------------------------------------------------------------------------------------------------------------

**Main line of work:**
  > Get the most relevant APIs
  
  > Check who has been in `our` web 
      -> If we have a web, obtain the information of who has been inside.

  > How much time has this 'company' or 'person' stayed in our page
  
  > What exactly has he clicked.
  
  > In what instances are the Client ID and the KEY used.
  
  > GET `NAME`, `POSITION` (__meaning the location__), `IP`,  `WEB` (__from which web do they come from if there is any case of that__), `DATE`, `TIME`, `etc`.

**Issues to deal with:**

  1. Create a code out of these APIs
    - Try and check them on `Javascript`
     - *probably* has to **work**
    - Need to **pull** the information in a *clear and easy* way to understand it.

  2. Choose the correct APIs
   - There are more than 20 APIs, choose the ones that are the most **relevant** for this project.
 
  3. Get the *DATA* 
      **SOLUTION** - Use `Postman`, good SW to get and pull the information out of these APIs in an accurate way.
      Steps to follow for `Postman`:
      1. [Download](https://www.postman.com/) the App or use the [Browser](https://www.postman.com/) option
      2. Create your own account.
      3. Once you have created your own account, you have different options of creating a group or whatever. You can **SKIP** that part.
      4. After this, you will be in the main page. In the top left corner you can see 4 different **tabs**, *click* the `Workspace` tab.
      5. In `Workspace` you will see several things, just *click* the `+` for opening a new tab and in there all the magic happens.
      6. You **enter** the requested URL with the `GET` as every API from LF is a `GET`. 
      7. After that, below the URL entering space, you can see `Params`; `Authorization`; `Headers`...
      8. Firstly, in Authorization in `TYPE` you choose `API KEY`, and on the right `KEY` and `VALUE` will appear. In `KEY` you just enter the name of it, in this case         `Authorization-Key` and in `VALUE` you enter the value of this key, it can be the one given as an example or the one given by Lead Forensics.
      9. After this, you go to the `HEADERS` tab, and in `KEY` you write `ClientID` and in `VALUE` the value of this ID, you can use the example or the one given to you.
      10. Following these two last steps, you click `SEND` and the below a *RESPONSE* will appear, giving the values or the information from that API, if there is any kind of  information.
      11. You can repeat this process mainly with every API given by LF.
      12. Mainly you can see it gives an answers but without any information inside because there is no information inside the webpage or anything similar.

The response with any given token is:
`GetVisitDetails` Response:

{

    "Conversions": [],
    "Assignees": [],
    "Duration": "",
    "Browser": "",
    "OperatingSystem": "",
    "Device": ""

}

Response it *should* have according to LF:

{

    "SiteVisitList": [

    {
      "BusinessID": 1101281,
      "VisitID": 1258759738,
      "StartDateTime": "2016-05-30T15:58:38",
      "EndDateTime": "2016-06-01T15:58:37",
      "Keywords": "",
      "Pages": 1,
      "Multi": 1,
      "ReferrerName": "Google",
      "ReferrerLink": "http://www.google.co.uk"
    }

    "PageSize": 5,
    "PageCount": 1,
    "RecordCount": 1,
    "CurrentPage": 1
}

This goes for any of the other APIs, as the URL they give is empty or not having good access to get the information 
     


  4. Do a `VIDEO` or `Document` explaining how everything is working.

*If possible read the Guide if there is anything good enough in there.*
    
  
