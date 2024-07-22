The goal of this enhancement project is to understand the existing IPL Dashboard code, and add the given functionalities within the existing IPL Dashboard code.

Your existing IPL Dashboard app, which you have developed, allows users to view a list of IPL teams. Users will be able to view the latest match data and the recent matches data of a team by clicking on a particular IPL team.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif" alt="ipl-dashboard-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-lg-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the app is opened, Home Route should be displayed
- When the Home Route is opened,
  - Make HTTP GET request to the **teamsApiUrl**
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the list of teams should be displayed
- When a team card in Home Route is clicked,
  - Page should be navigated to the Team Matches Route with the URL `/team-matches/:id`
- When the Team Matches Route is opened,
  - Make HTTP GET request to the **teamMatchesApiUrl** with the team id to get the recent matches data of the team
    - Example: `https://apis.ccbp.in/ipl/KKR`
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the team banner, latest match, and list of recent matches should be displayed

</details>

Enhancement Functionalities
Functionality to be added
Add a Back button in the Team Matches Route. When the Back button is clicked, the page should be navigated to Home Route.
Add a Pie Chart feature showing the statistics of a match in the Team Matches Route. The statistics should include the number of matches a team has won, lost, and drawn.
Ensure your application maintains good CSS styling.
