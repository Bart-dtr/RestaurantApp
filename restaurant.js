const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
    /**
     * Otwarcie restauracji.
     */


        open()
        {
          this.emit('Restaurant is Open');
        }

    /**
     * Zamknięcie restauracji.
     */


        close()
        {
            this.emit('Restaurant is closed');
        }


    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable()
        {
            this.emit('Table reserved');
        }


    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation()
        {
            this.emit('Reservation cancelled');
        }

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation()
        {
            this.emit('Guests without reservation');
        }


    /**
     * Stolik się popsuł, odpadła noga :/
     */


        markTableAsBroken()
        {
            this.emit('Table is broken');
        }


    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */


        cleanupTable()
        {
            this.emit('Cleaning table');
        }

        }
        module.exports = {
        Restaurant,
        };
