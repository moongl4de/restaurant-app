# restaurant-app

Back-end
1. Create a couple array variables that will hold my data
    - main dining room tables (max 5)
    - waiting list tables (no max)

2. Routes!
    - API routes
        - We need a GET route for our tables array AND for our waiting list array
            - Maybe we can combine them into one route?
        - We need a POST route to send new table info to our server so it can put the new table object in the correct array

3. HTML routes
    -- home page ("/")
    -- table page ("/tables")
    -- reservation page ("/reserve")

4. jQuery
    - use jQuery to post our table information to the server's POST route
    - use jQuery to GET table info when we populate our current table list / wait list
