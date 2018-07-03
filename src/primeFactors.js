
module.exports = {
    generate: function(number) {
        primes = []
        
        while (number % 2 == 0)
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
