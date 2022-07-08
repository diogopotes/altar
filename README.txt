To run the project:

cd client
npm install

cd server
npm run dev

Things that I would change given more time:
Add comments

Homepage:
  -> Make it more concise by:
    -> Change the return of the rows with a for loop
    -> Function emptyGrid() outside homepage (creating a utils folder with helper functions)
    -> Add more components to folder Components like Row component
    -> Input -> Add disable property if value length > 1
 
Change CSS to SASS

Change redux by:
  -> Actually using the fail action type (calling error in the frontend)
  -> Adding Request type and adding a loading variable to call in frontend too

