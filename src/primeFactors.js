
module.exports = {
    generate: function(number) {
        primes = []
        
        prime = 2
        while (prime < number)
        {
            while (number % prime == 0)
            {
                primes.push(prime)
                number = number / prime
            }
            prime++
        }

        if (number > 1) {
            primes.push(number)
        }

        return primes
    }
}
