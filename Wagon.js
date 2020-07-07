class Wagon {

    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        let AvailableSeatCount = this.capacity -= this.passengers.length
        return AvailableSeatCount
    }

    join(Traveler) {
        // if (this.capacity > 0){
        //     this.passengers.push(Traveler)
        // }

        if (this.passengers.length !== this.capacity) {
            this.passengers.push(Traveler)
        }
    }

    shouldQuarantine() {
        if (this.passengers.some(function (passenger) {
            return passenger.isHealthy === true
        })) {
            return true
        }
        else {
            return false
        }
    }

    totalFood() {
        let totalFood = this.passengers.map(function (passenger) {
            return passenger.food
            })        
            return totalFood.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)
    }
}