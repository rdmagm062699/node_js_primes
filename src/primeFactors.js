
module.exports = {
    generate: function(number) {
        primes = []
        
        if (number % 2 == 0)
        {
            primes.push(2)
            number = number / 2
        }

        if (number > 1) {
            primes.push(number)
        }

        return primes
    }
}
