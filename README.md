# Wolt Summer 2024 Engineering Internships Pre-Assignment: Frontend source code
See [original repository](https://github.com/woltapp/engineering-internship-2024) for details.

Technologies used:
* React + TypeScript

## Delivery Fee Calculator

The goal of the assignment was to showcase my coding skills and ability to develop features. This is a highly important part of the hiring process so it's crucial to put effort into this without making it too bloated. Reviewers should put weight on three main aspects: code quality, maintainability, and testing. The task was to write a delivery fee calculator. This code is needed when a customer is ready with their shopping cart and we’d like to show them how much the delivery will cost. The delivery price depends on the cart value, the number of items in the cart, the time of the order, and the delivery distance.

#### Input fields

| Field             | Type      | Description                                                                                             | Example value                             |
|:---               |:---       |:---                                                                                                     |:---                                       |
|Cart value         |Float      |Value of the shopping cart in euros.                                                                     |__20__                                     |
|Delivery distance  |Integer    |The distance between the store and customer’s location __in meters__.                                    |__2235__ (2235 meters = 2.235 km)          |
|Cart items         |Integer    |The __number of items__ in the customer's shopping cart.                                                 |__4__ (customer has 4 items in the cart)   |
|Order time         |Date + Time|The date/time when the order is being made (see rules-section how rush hours affect the delivery price)  |ISO format                                 |
