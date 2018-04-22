class SmallestIntegerFinder {
    findSmallestInt(args) {
        function compareNumbers(a, b) {
            return a - b
        }
        var get = args.sort(compareNumbers)
        return get[0];
    }
}