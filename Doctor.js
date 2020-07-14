class Doctor extends Traveler{
    constructor (name) {
        super(name)
    }

    heal(Traveler){
        Traveler.isHealthy = true
    }
}