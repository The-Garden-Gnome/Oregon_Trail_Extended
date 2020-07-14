class Hunter extends Traveler{
    constructor (name) {
        super(name)
        this.food = 2
    }

    hunt(){
        this.food += 5
    }

    eat(){
        if(this.food > 2){
        this.food -= 2
        }
        
        else{
            this.food -= this.food
            this.isHealthy = false
        }
    }

    giveFood(Traveler, numOfFoodUnits){
        this.food -= numOfFoodUnits
        Traveler.food += numOfFoodUnits
}
}