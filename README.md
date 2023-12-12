# News App Assignment

## Overview
This project aims to create a responsive and user-friendly news application with features such as user registration and login, news API integration, grid view, detailed news view, favorite articles, state management, offline support, and attention to design and UI/UX.

![Alt text](https://githubpurpose.s3.ap-south-1.amazonaws.com/Screenshot%202023-12-06%20at%205.05.09%E2%80%AFPM%20%282%29.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCmFwLXNvdXRoLTEiRzBFAiEApu68SgBDlUErqpyKlX3Ul9MCR2wvDW5uqiUuf7fwejoCIBUI9WO8zXRTG3ufVBS8LjeSg%2FHiX%2FziJczSknzmpd7UKu0CCIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMMzI2MTY0NDk1NjA2IgypaYbHLeGVySuyzCkqwQJFphsv42HGBzcXCwl2ASn4tfGhRggJeWoVHrQ%2F4XVC8mHKKloF5QKkGN2NUneImxUoF8rjs%2FKsxNe5EI%2Bm7%2F8odGqGnpAUZXV%2BhD%2Brdcwt4SPBbCShxx3MbuGL%2FHEyaay6lGpdh9w3q%2FLSyhZwy4BPrHOH2hQEpud8ga4skbj1%2FPQy1TOK7NzBLVhZOMcsz%2BhMoNrAs7C4aB8UWLKzsbvzKj%2FjExIG42AZg2HFCPeYY1XOzJCI5GBHsHBC3C3g8O5VSEqekdLSZwBGVmsdCn5zO6Wz81N0HSnsweRp2VAS7fIq5fbNRqAvk3IcuCcue9kH%2FDzstipN5JA8iuTI9acNo%2FyG8q2hL7QxrfQd7xQ40aHbuXl%2B0c%2FIrn3HKG3IVmx4dN48AUkQQl5ShLs1LXRIg8sNvj3%2B37o1lndh53jUSgEw3KTAqwY6swIcajbV3lGUj16DRHbUKOic9%2BVHGd6nfwM2CCLFezTKxtQGW65py8P6B%2F4JR14jEUPv2oGdktqmDqx0I1d91G6zIDV5PdIwvo9MFMk04BjKBQbQpX59EMZPuk4u063qc6KTVF%2FA9jHk7GG6arZGI81U4VdrCsme2ssyHGpu6AWcwt9I657B3JZ3NTDWR82%2BKyGk%2BYXPg4gYp39WZdTkAnIxu6uj%2FY%2FXXXZ6sRFWltNAJccAmtI6k8zFA0Y4ro2Xc%2Fvu8FW6W1EjHydmeF8utU5zVfP7%2BLrrkwcDU9YTp3Jdd2987tFW29IEoZMMqgsS3zWHjlqYmzBuQJLYXQZvzOnBa%2B8t8gFsWuAJd0suWlIx%2BI4ZXZKbHSYnQ9ngKpuAjlufnwJ5qiv1ElrlgmizClZ2oEkd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231206T113606Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUX4HLHT3FKK45FPB%2F20231206%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=a1564fd4e2f0647cc83e512047b4bc3f97747cbec655b84a626585abdac9e3aa)

## Project Live
link: (https://triveous-assignment-eight.vercel.app/)

## Video Demo
link:  (https://www.loom.com/share/ad00c57a930048b9bf6379f4b969b11b?sid=f9c19934-6ebb-43a5-b90f-5bcdaad33620)

## Features

1. **User Registration and Login:**
   - Users can create accounts and log in to access personalized news preferences.
   - Firebase used for authentication.
   - **Dummy Login Credentials:**
   - **Email ID:** triveous@gmail.com
   - **Password:** 123456

2. **News API Integration:**
   - Utilize an open-source news API (https://newsapi.org/) to fetch the latest news articles.
   - Display articles in a list and Grid view.

3. **Grid View:**
   - Implemented a toggle button to switch between list and grid views.
   - 
4. **News Detail View:**
   - When users tap on a news article item, Displaying detailed view of the article in full page.
   - This Include the title, description, image, and a link to the full article.

5. **Favorite Articles:**
   - Implemented alow users to mark articles as favorites.
   - Store user preferences in redux and for persistence localstorage.
   - Implemented a button to see favourite in details view.

6. **State Management:**
   - Use Redux state management tools to efficiently manage the application's state.

7. **Offline Support:**
   - Implemented Local Storage for caching mechanisms that allow users to store and access previously fetched news articles even when they are offline.

8. **Design and UI/UX:**
   - Created a best possible user-friendly interface that is responsive and provides a smooth user experience.

## Getting Started
To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/news-app.git
   cd news-app
2. Install dependencies:
    ```bash
    npm install

2. Run the application:
    ```bash
    npm start

