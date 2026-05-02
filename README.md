# Simple Supply - warehouse management system

<img width="863" height="394" alt="supply_simple_goal" src="https://github.com/user-attachments/assets/23be9e12-61f7-414d-94b4-8a95624922b2" />
Figma template of future frontend, simplified. 

### User Stories: 
Young Entrepreneur looking for managing products storage application. 
Small warehouse owner/employee with need for a simple inventory system.
Collector who need to track valuable belongings. 

### First commit #1
This is the initialization of the application with git.

Two entities were created : 
* category - child
* item - child

Milestone of OneToMany and ManyToOne relation is established by category_id;
### Second commit #2

Backend Core of the project is created with basic logic.
* DTO
* REPOSITORY
* SERVICE
* CONTROLLER

For this step successful connectivity with PostgreSQL is established.

Service layer retrieves all rows, which is one of main functions.

For now DTO is not used, but it will be implemented in the next step of creating new Items.
### Third Commit #3 
Service functionality improved:

* Item creation function is added Service.
* Logic of creating a new category along with an item if this category didn't exist before.
* Category Repository.
* AddItem controlled which takes 3 parameters. 



