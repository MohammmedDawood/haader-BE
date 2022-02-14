# haader-BE

Search and get the results from each supplier and merge the data together to get hotels in one response.

# backend-task

https://gist.github.com/ahmed3mar/483fa6bf1f5bdb8bf58f37fcd538d068

## How to run it

- clone the repo.
- open the folder in terminal cd <your project files>.
- enter this command 'npm i'.
- enter this command 'npm run server'.

- - for test go to (http://localhost:3000/).

- - for get all supplier_a_data go to (http://localhost:3000/api/supplier_a/get_supplier_a_all).
- - for get all supplier_b_data go to (http://localhost:3000/api/supplier_b/get_supplier_b_all).

- - for get create supplier_a go to (http://localhost:3000/api/supplier_a/create_supplier_a).
- - it's a POST request and the body will be the an hotel object from supplier_a.json.

- - for get create supplier_b go to (http://localhost:3000/api/supplier_b/create_supplier_b).
- - it's a POST request and the body will be the an hotel object from supplier_b.json.

- P.S : I'm using cloud mongoDB so the data of the json files is stored on it so you can test eaisly.
