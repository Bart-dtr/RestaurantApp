const {Restaurant} = require('./restaurant');

const megaRestaurant = new Restaurant();
let tablesCount = 25;

const decTablesCount = () => {
    tablesCount--;
    console.log(`number of available tables: ${tablesCount}.`)
};

const incTablesCount = () => {
    tablesCount++;
    console.log(`number of available tables: ${tablesCount}.`)
};


/*new Restaurant()*/
megaRestaurant
    .on('Restaurant is closed',() => console.log('Restaurant has been closed.'))
    .on('Restaurant is Open',() => console.log('Restaurant has been opened.'))
    .on('Table reserved',decTablesCount )
    .on('Reservation cancelled',incTablesCount)
    .on('Guests without reservation',decTablesCount)
    .on('Table is broken',decTablesCount)
    .on('Cleaning table',incTablesCount);

megaRestaurant.open()  // "Restaurant has been opened."

megaRestaurant.takeTableWithoutReservation() // "Available tables: 24."

megaRestaurant.takeTableWithoutReservation()  // "Available tables: 23."

megaRestaurant.reserveTable() // "Available tables:: 22."

megaRestaurant.cancelTableReservation(); // "Available tables: 23."

megaRestaurant.reserveTable() // "Available tables: 22."

megaRestaurant.reserveTable() // "Available tables: 21."

megaRestaurant.takeTableWithoutReservation() // "Available tables: 20."

megaRestaurant.takeTableWithoutReservation() // "Available tables: 19."

megaRestaurant.markTableAsBroken() //"Available tables: 16."

megaRestaurant.cleanupTable()// "Available tables: 20."

megaRestaurant.close()// "Restaurant has been closed."