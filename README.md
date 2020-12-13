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
 
  3. Get the *DATA* using *JS* or *Java* 

  4. Try to implement the `source code` to **get/pull** the data.
    - First try to see if it works with the code given, if not, just ask (i guess).

  5. Do a `VIDEO` or `Document` explaining how everything is working.

*If possible read the Guide if there is anything good enough in there.*
    
  
