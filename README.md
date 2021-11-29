"# Zendesk-Intern-Coding-Challenge" 

**System Requirements:**
1. Python
2. NodeJs
3. Internet Browser

**Installation Instructions:**
1. Clone the git repository to your local terminal(https://github.com/jeniljain358/Zendesk-Intern-Coding-Challenge)
2. Open your terminal and navigate to the project's root directory
3. In the Zendesk folder, run `python main.py`
4. Open another terminal and navigate to the zendesk_react folder.
5. Run command `npm install` to install all dependencies.
6. Run command `npm start` to start the server
7. Go to `localhost:3000` on your internet browser.

**Usage Instructions:**

**Overview:**

-> The Ticket viewer will automatically load tickets from the Zendesk API assigned to the user.

-> Clicking on the ticket id gives single ticket view. 

-> The clickable item has a clue as the mouse pointer changes over it.

**Application Features:**

**1. Ticket item->The ticket item contains 4 types of information: the ticket id, subject, creation date, creation time and the status.**

![2021-11-28 (5)](https://user-images.githubusercontent.com/54282175/143800588-dd326fc8-a9cc-4012-881e-6c031f537a05.png)

**2. Single ticket view ->The ticket view component shows the description and the requester id.**

![2021-11-28 (4)](https://user-images.githubusercontent.com/54282175/143800888-d834ea13-5034-4192-b9e5-4edcad20a953.png)

**3. Pagination: Pages through tickets when more than 25 are returned**

![2021-11-28 (6)](https://user-images.githubusercontent.com/54282175/143800645-774b4861-8345-421d-a01f-e96ca85a0b2a.png)

**4.Error Handling-> Displays a friendly error message if the API is unavailable or the response is invalid.**

![2021-11-28 (3)](https://user-images.githubusercontent.com/54282175/143801103-86845b83-acaf-4ee4-a60f-9c5164ded8ef.png)

**5.Unit Testing-> Used React unit testing Jest and React testing library.**

There are two tests written for the application:

1.The first test (Ticket View Test) tests if by clicking on a ticket item the ticket is loaded properly in the ticket view.

2.The second tests the single ticket view button, whether it displays the information correctly or not.

![2021-11-28 (7)](https://user-images.githubusercontent.com/54282175/143801266-3935f50f-5e60-4f60-a37f-1628b9b8d9a8.png)

**Implemention Details:**

**-> Fetch Data using Python requests and Flask:**

Web applications frequently require processing incoming request data from users. This payload can be in the shape of query strings, form data, and JSON objects. Flask, like any other web framework, allows you to access the request data.

**-> Browse-based UI: Used React as a view engine**

-React is a JavaScript library that is used for building user interfaces. React is used for the development of single-page applications and mobile applications because of its ability to handle rapidly changing data. React allows users to code in JavasScript and create UI components.







