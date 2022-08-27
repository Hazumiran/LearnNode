   const Event = function () {
    const event = {
        name: 'Birthday Party',
        guestList: ['Andrew', 'Jen', 'Mike'],
        printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
        console.log(guest + ' is attending ' + this.name)
        //Refactoring using arrow
        console.log(event.guestList.map(guestList => guestList));
        })
        }
       }
       event.printGuestList()
    
   }
   module.exports = Event