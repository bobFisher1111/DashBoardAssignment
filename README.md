# Real Estate Dashboard Assignment

## 2. Fetch API

The data file that was given can be found inside the public folder named house_sales.json.
Fetching the data, can be found under the directory redux inside file named GetHouseSalesData. It is called and saved inside the store of redux that way it can be used globally.
This area took a little bit more time because I decided to store the data inside redux store, as it would make rest of development much easier instead of prop passing or making a new call each time needed.

## 3. Dropdown list

The dropdown list can be found inside the drawer directory inside file named DropDownComponent. It is being used inside two files named DashBoardComponent and DrawerComponent. In desk top mode there is a left
drawer that is open and that is where user can find the dropdown list. The other area is when the desktop screen size because smaller or inside mobile view, the drawer is no longer present and is found at the top below the app bar. The effor in this required a little bit more as new field in redux store was add. Used to pass globally the filter data to the graph and table.

## 4. AG Grid

The AG Grid can be found in a component created under the directory tables named TableComponents. It then imported into DashBoardComponent. I've worked with other tables before and this was the first time with AG Grid. Was not difficult and easy to implement. As it didn't take much time at all.

## 5. Nivo

Nivo can be found under directory graphs named ScatterPlotGraphsComponent. It is also imported into DashBoardComponent. Like AG Grid, first time using Nivo as I've used PlotlyJson before and wrote my own tables. This took little longer than expecting. Had to figure out how to style it and format the data work correctly. The data only had last two digits of year and needed to format it so it would work with four digits. Also some of the properties were missing data. Also needed to address that as they came up in the graph as undefined. 

## Areas for improvement

1. Make improvement to mobile view, find a better way to present the table. As it could be difficult for user to know there are more columns.

2. Apply more styling to the graph. Possible put a legend for each town and a color of dots to match.

3. On the dashboard the Analytics is highlighted but more development is needed if user clicked on Home. That should then be highlighted and no longer Analytics.

4. When selecting property on the table, have that property highlighted on graph.

5. In mobile view, it's hard to click the map points for the tooltip pop up. Make updates there.

## Needed for production ready
1. Write test cases to ensure component work as expected
2. Add SSO authentication
3. Connect to real API
4. Update styles to match company styling
5. Add more graphs and filters
6. Include Light and Dark themes

## Web link:
https://dash-board-assignment.vercel.app/