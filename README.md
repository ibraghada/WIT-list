# WIT-list

## WHAT:
[WIT List] Women In Tech List, is an application that allows women to look-up and find women supporting organizations that match's there needs.

## Getting Started:
1. You can navigate to: [Heroku live link](https://witlist.herokuapp.com/)

2. Or: Clone this repo:
```bash
$ git clone https://github.com/gazaskygeeks/WIT-list.git
# Or:
$ git clone git@github.com:gazaskygeeks/WIT-list.git
```

3. Go into WIT-List repo's directory:
```bash
$ CD WIT-list
```

4. Install the required npm packages:
```bash
$ npm install
```

5. Create environment variable file:
```bash
$ touch config.env
$ gedit confige.env
# Paste your PostgreSQL Database link as:
# DATABASE_URL=postgres://username:password@localhost:5432/db_name
# Save it.
```


6. Build the compatibla with browser version of the app:
```bash
$ npm run dev:build 
```

7. Run the server:
```bash
$ npm run start
```

8. Navigate to: [Localhost](http://localhost:8000)

-------

## API Routes:
1. `GET /organizations`
2. `GET /cats`
3. `GET /sub-cats`
4. `GET /orgs-sub-cats`
5. `POST /submit-org`
