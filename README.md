# Ryanair FE Test Solution

This project has been created by `Pedro Solis Garcia`, who applies for the position `Junior Front End Developer` with Ryanair.

`NOTE:`
Before I start, I should point out something:
First, I apologies for the delay in delivering this assignment. As I already mentioned to the Recruitment Officer Paulina Pęczkowska in my emails, 
I had my time very limited to achieve this task, as last week was bank holiday here in Poland and I had family visit during the whole week. I received 
this assignment a day before their arrival, so I barely had time until two days ago. I apologies once again for the delay and inconvenience.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development

In order to run the project in localhost 4200, please type the following command:

  $ ng serve

## Tasks

As requested in the assignment, the project's goal is to find the cheapest flights that connect two airports during the dates provided.

The webapp has the following structure:

### Components

#### AirportSelector

* An airport selector which displays a list of airports, allowing the user to select the desired departure airport.

* Considering the airport selected, the user will have the possibility to select only the airports reachables from the one he chose.

* The user can either select the airport from the list or type the name to filter the airport list, making it faster to find.

* Once the airports are selected, the user will have to select the initial and final date for his flights, which will be picked from a date calendar.

#### Flight List

* Once the user has chosen the airports and dates, the system will search for all the available flights between the airports within the date range provided.

* The flight list is sorted showing from the cheapest to the most expensive.

* The URL resulting from the flights search can be copied to be used later on, as the system will directly show the flight list once loaded the link.


##### Note:
```
The components Date Selector and Date Wrapped have been replaced by the Angular Material Module MatDatePicker, which simplifies the process.
```

### Services

#### AirportsService

* A service which gets the data from the API below, retrieving the airports for the user to choose.

```
https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/
```

* The server will filter the IATA Code of the airports and its name in all scenarios.

* The server will take from the API the airports reachable from the airport selected by the user, filtering by IATA Code in the routes tree.

#### CheapFlightsService

* This server gathers the airports and dates introduced by the user and enters the flights root of the API below. In this case it would show the flights available
from Dublin to London Stansted with the dates 02/12/2014 and 02/02/2015.

```
https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/DUB/to/STN/2014-12-02/2015-02-02/250/unique/?limit=15&offset-0
```

### Routing

* The flight list page is a child route of the home page.

* The search area from Airport selector is always reachable

* As indicated above, the flight list is deep linked, so  URL can be reused to check faster the flights available.

* If the user types an unknown path for the router, it will be redirected to a Page Not Found screen.

### Refactor

* As pointed before, the `DateWrapper` and `DateSelector` components have been replaced by the MatDatePicker Module from Angular Material.

* The functionality and code is implemented inside the AirportSelector component.

#### Extra points achieved:

* The syleguide follows the Ryanair branding colors as requested
* No third party libraries have been used for this project
* The project presents responsive design, getting adapted for both desktop and mobile screens

#### This which can be improved

* Unit Tests not performed.
* The flight list URL, even if achieves its functionality, is including the data in its link as pure path, not as variables.
* The design is responsive, but it is not mobile responsive first, as the styling has been designed first for big screens.