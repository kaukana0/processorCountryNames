export function process(inputData, output) {
    if(output && output.categories && output.categories.countries) {
        const names = {
            DE: "Germany",
            EU: "European Union",
            EA19: "Euro Area"
        }
        for (const key in names) {
            if(output.categories.countries.has(key)) {
                output.categories.countries.set(key,names[key])
            }
        }
    } else {
        console.error("processor countryNames: invalid input")
    }
}