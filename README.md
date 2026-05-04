# Simple Supply - warehouse management system

<img width="1439" height="650" alt="bootstrap_dashboard" src="https://github.com/user-attachments/assets/2362f9ce-b18f-44d1-bb3f-7f3d4c27b10e" />
Current version

### User Stories: 

* Young Entrepreneur looking for managing products storage application. 
* Small warehouse owner/employee with need for a simple inventory system.
* Collector who need to track valuable belongings. 

### Commit #1

This is the initialization of the application with git.
Two entities were created : 
* category - child
* item - child

Milestone of OneToMany and ManyToOne relation is established by category_id;

### Commit #2

Backend Core of the project is created with basic logic.
* DTO
* REPOSITORY
* SERVICE
* CONTROLLER

For this step successful connectivity with PostgreSQL is established.

Service layer retrieves all rows, which is one of main functions.

For now DTO is not used, but it will be implemented in the next step of creating new Items.

### Commit #3 

Service functionality improved:

* Item creation function is added Service.
* Logic of creating a new category along with an item if this category didn't exist before.
* Category Repository.
* AddItem controlled which takes 3 parameters. 

### Commit #4

<img width="554" height="284" alt="demo_display" src="https://github.com/user-attachments/assets/5f6471e8-5871-43af-9738-96d7b78005be" />


Core frontend functonality is implemented. It is able to request data from backend and showing it on the page. 
* ItemSerive - fetches api from backend
* table - table for web
* Dashboard - combines fetched data and displays it

For now it is missing UI and button functionality, but it will be implemented in the next steps.

### Commit #5

<img width="516" height="170" alt="add_page_react" src="https://github.com/user-attachments/assets/6087c60c-c683-4dcf-8c36-07763f18b5cd" />


Add - fuction to add new item to the table
Then button is pressed new page appears. It calls post method from springboot and passes the parameters inputed from the web page /add. 
Changes are displayed in the dashboard.

### Commit #6

<img width="446" height="191" alt="edit_page_react" src="https://github.com/user-attachments/assets/b6a23cbe-7bb1-450a-a249-eec035a3629a" />


Edit - change existing item's values. 
By clicking on a row in a dashboard a new page is opened. On this page is shown
* Current values of item in the input field
* Input field to edit item
* edit button to submit
By clicking edit button PUT method is called, which was implemented in itemSerivce in both frontend and backend.

### Commit #7

In this step design was implemented with react-bootstrap and css. 
Almost everything was wrapped in a container and made visually pleasing. 

Was edited
*Add page
*Edit page
*Main dashboard 

Results :
<img width="450" height="385" alt="edit_bootstrap" src="https://github.com/user-attachments/assets/5d86b6ed-77db-4f18-8bf9-6c3207ca34a4" />
<img width="442" height="389" alt="add_bootstrap" src="https://github.com/user-attachments/assets/5c688a8f-8193-4478-8668-b034be203a8d" />

Future tasks:

* Add pagination 
* Add sorting by category functionality for table
* Add more parameters as Status, Description, etc

### Commit #8

The delete-item logic is added to the editItem and itemService classes in the frontend. As well as in the backend.





  

