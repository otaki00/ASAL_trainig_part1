class CustomDate {
    constructor() {
        this.date = new Date()
        this.now = new Date()
    }

    // update this.date object
    updateDate(newDate) {
        this.date = newDate
    }


    // return yesterday's date
    yesterday() {
        return new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() - 1)
    }


    // return yesterday's day
    yesterdayDay() {
        // let mapDay = {
        //     1: "Saturday",
        //     2: "Sunday",
        //     3: "Moneday",
        //     4: "Tuesday",
        //     5: "Wedneday",
        //     6: "Thursday",
        //     7: "Friday"
        // }

        // return mapDay[this.now.getDay() - 1]
        const options = { weekday: "long" }
        this.date.setDate(this.date.getDate() - 1)
        return this.date.toLocaleDateString(undefined, options)
    }


    // return tomorrow's date
    tomorrow() {
        // return [this.now.getDate() + 1, this.now.getMonth(), this.now.getFullYear()]
        return new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() + 1)
    }


    // return tomorrow's day
    tomorrowDay() {
        // let mapDay = {
        //     1: "Saturday",
        //     2: "Sunday",
        //     3: "Moneday",
        //     4: "Tuesday",
        //     5: "Wedneday",
        //     6: "Thursday",
        //     7: "Friday"
        // }

        // return mapDay[this.now.getDay() + 1]
        const options = { weekday: "long"}
        this.date.setDate(this.date.getDate()+1)
        return this.date.toLocaleDateString(undefined,options)
    }


    // add minutes to this.date
    addMinutes(minutes) {
        this.date.setMinutes(this.date.getMinutes() + minutes)
    }


    // add hours to this.date
    addHours(hours) {
        this.date.setHours(this.date.getHours() + hours)
    }


    // add days to this.date
    addDays(days) {
        this.date.setDate(this.date.getDate() + days)
    }


    // Logs the current date-time
    current() {
        // console.log(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), this.now.getHours(), this.now.getMinutes(), this.now.getSeconds());
        console.log(this.now.toLocaleString());
    }


    // return boolean
    isFuture() { 
        return this.date > this.now 
    }


    // Return (bigger, smaller or equal) between the given date and this.date
    compare(newDate) {
        if (this.date == newDate) {
            return "equals"
        }
        return this.date > newDate ? "bigger" : "smaller"
    }


    // Return the difference between the given date and this.date in format (x Days, y hours, z minutes)
    differenceInDays(newDate) {
        // return [this.date.getDate() - newDate.getDate(), this.date.getHours() - newDate.getHours(), this.date.getMinutes() - newDate.getMinutes()]
        return `${this.date.getDate() - newDate.getDate()} Days, ${his.date.getHours() - newDate.getHours()} hours, ${this.date.getMinutes() - newDate.getMinutes() } minutes`
    }

    // Returns minutes in hours format, eg: convertMinutesToTextualHour(200) = 3 hour(s) and 20 minute(s)
    convertMinutesToTextualHour(minutes) {
        // return [Math.floor(minutes / 60), minutes % 60]
        return `convertMinutesToTextualHour(${minutes}) = ${Math.floor(minutes / 60)} hour(s) and ${minutes % 60} minute(s)`
    }


    // Returns the quarter (1 to 4) of the year for the given date, else use this.date
    getQuarter(newDate=this.date) {
        console.log(Math.ceil((this.now.getMonth() / 3)) );
    }


    // Returns current day (three letters, Mon through Sun) for the given date, else use this.date
    shortDay(newDate = this.date) { 
        // let mapDay = {
        //     1: "Sat",
        //     2: "Sun",
        //     3: "Mon",
        //     4: "Tus",
        //     5: "Wed",
        //     6: "Thu",
        //     7: "Fri"
        // }

        // return mapDay[newDate.getDay() + 1]
        const options = { weekday: "short" }
        this.date.setDate(this.date.getDate() + 1)
        return this.date.toLocaleDateString(undefined, options)
    }

}


let dateClass = new CustomDate()

// dateClass.addDays(4)

console.log(dateClass.isFuture());