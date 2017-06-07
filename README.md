# Matches Fashion Tech Test

Add below commands to terminal in order to download the repo, install related packages and run the server

	$ git clone https://github.com/ercekal/mf_TT
	$ cd gousto_tt
	$ yarn install
	$ yarn start

After the server run and compile is done run
	$ open http://localhost:3000

Redux fetches the JSON data via axios and it is passed as props to items component.

Items category gets the items props and once it is loaded it maps the data as itemInfo component for each item.
