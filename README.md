# Corona Database Management-HMO

This project is aimed at managing a health maintenance organization's database, including details related to the COVID-19 disease, such as vaccinations, infection dates, and recovery dates.

## Technologies Used

- Server-side:
  - C# with ASP.NET Web API
  - Visual Studio 2022

- Client-side:
  - Angular
  - Visual Studio Code

- Database:
  - SQL Server

## Installation Guide

1. **Download the Code from GitHub**:
   - Open the project page on GitHub: [Corona Database Management-HMO](link-to-project-page-on-GitHub).
   - Click on the "Code" button and then on "Download ZIP" to download the code to your computer.

2. **Installation with Visual Studio 2022**:
   - Extract the ZIP file you downloaded.
   - Open Visual Studio 2022 and import the project into the environment.

3. **Installation with Visual Studio Code**:
   - Extract the ZIP file you downloaded.
   - Open Visual Studio Code and select "File" > "Open Folder", then choose your project folder.

4. **Setting Up the Database**:
   - Have you created a database in SQL? Follow the appropriate instructions to import the project's database schema.

5. **Running the Local Server**:
   - If you're using a C# Web API, start the local server to begin working with the API.

6. **Running the Local Client**:
   - If you're using an Angular application, start the local client to begin working with the application.

## Contribution Guidelines

1. **Read Existing Source Code**: Before you start coding, read the existing code thoroughly to understand the project's structure, functionality, and existing features.

2. **Refer to Documentation**: Make sure to read and understand the documentation written for the project, including installation instructions, usage, and documentation on APIs and existing functions.

3. **Working with Git**: Make sure you're familiar with the correct workflow for working with Git and GitHub, including how to pull, push, commit, and resolve conflicts.

4. **Using Tools and Technologies**: Familiarize yourself with the tools and technologies used in the project, such as Visual Studio, Visual Studio Code, Angular, C#, SQL, and so on.

5. **Coding Styles and Design**: Ensure you're equipped with knowledge of proper coding styles and code design, such as MVC (Model-View-Controller) pattern and Clean Code principles.

6. **Unit and Integration Testing**: Make sure to perform unit tests and integration tests before each new release.

7. **Bug Fixes and Enhancements**: Try to integrate into the existing development process and contribute bug fixes and feature enhancements according to the existing list of tasks and issues.

8. **Collaboration**: Don't hesitate to ask questions and seek help from the existing team, and also contribute to discussions in the documentation and forums of the project.

## License

This project is distributed under the MIT License. See the LICENSE file for more information.

## Support

For questions, issues, or suggestions, please open an issue on GitHub.

## Installation Guide

1. **Download the Code from GitHub**:
   - Open the project page on GitHub: [Corona Database Management-HMO](https://github.com/Hadassa-E/HomeTest-H04).
   - Click on the "Code" button and then on "Download ZIP" to download the code to your computer.

2. **Installation with Visual Studio 2022**:
   - Extract the ZIP file you downloaded.
   - Open Visual Studio 2022 and import the project into the environment.

3. **Installation with Visual Studio Code**:
   - Extract the ZIP file you downloaded.
   - Open Visual Studio Code and select "File" > "Open Folder", then choose your project folder.

4. **Setting Up the Database**:
   - Have you created a database in SQL? Follow the appropriate instructions to import the project's database schema.

5. **Running the Local Server**:
   - If you're using a C# Web API, start the local server to begin working with the API.

6. **Running the Local Client**:
   - If you're using an Angular application, start the local client to begin working with the application.


הטבלאות במסד הנתונים:
1
2
3
4
5

בשכבת הdalחיברתי את מסד הנתונים לפרויקט ויצרתי פונקציות crud  של שליפת נתונים מכל מחלקה - טבלה במסד נתונים

BLL- בשכבה זו עשיתי בדיקות תקינות לנתונים שהוזנו להוספה או לעדכון רשומות בדאטה בייס. וכן כתבתי פונקציות מקבילות לפונקציות בשכבתהdal רק שכאן הפונקציה מקבלת ומחירה אובייקטים מסוג dto, כלומר האוביקטים שעוברים בשרת.

שכבת dto, בשכבה זו מתבצעת ההמרה בין המחלקות הרגילות במסד הנתונים, ובין המחלקות המועברות ברשת- שהן ללא קשרי הגומלין.

ובשכבת api מתבצעות קריאות השרת וכל הcrud  והוא מזמן את הפונקציות מBLL
