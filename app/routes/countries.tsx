import { Link } from "react-router"
import { useState } from "react"
import type { Route } from "./+types/countries"

export function meta({}: Route.MetaArgs) {
    return [{ title: "List Countries" }, { name: "Check out countries list!", content: "List of countries" }]
}

const API_URL = import.meta.env.VITE_API_URL

export async function clientLoader() {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}

// Function to hit api after completely typing the search
function searchDebounce(func: Function, delay: number) {
    let timeout: any
    return function (value: string) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(value)
        }, delay)
    }
}

export default function Countries({ loaderData }: Route.ComponentProps) {
    const [search, setSearch] = useState<string>("")
    const [region, setRegion] = useState<string>("")

    const changeHandler = searchDebounce((value: string) => {
        setSearch(value)
    }, 20)

    const filteredCountries = loaderData.filter((country: CountriesType) => {
        const matchesRegion = !region || country.region.toLowerCase() === region.toLowerCase()
        const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase())
        return matchesRegion && matchesSearch
    })

    return (
        <div className="px-4 sm:px-[72px] max-sm:pt-24 pt-[69px] pb-16">
            <div className="fixed bg-white w-full">
                <h2 className="text-2xl font-semibold max-sm:mb-1 max-sm:mt-8 mt-1 text-gray-900">Countries</h2>
                <div className="flex flex-col max-w-[390px] sm:max-w-4xl sm:flex-row gap-4 py-4">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={(event) => changeHandler(event.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:ring focus:border-indigo-500"
                    />
                    <select
                        name="region"
                        id="region"
                        value={region}
                        onChange={(event) => setRegion(event.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:ring focus:border-indigo-500"
                    >
                        <option value="">All Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>

            {filteredCountries.length === 0 ? (
                <div className="max-sm:pt-24"> No countries match your filters. </div>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-sm:pt-52">
                    {filteredCountries.map((country: CountriesType) => (
                        <li
                            key={country.cca3}
                            className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
                        >
                            <Link
                                to={`/countries/${country.name.common}`}
                                className="text-indigo-600 hover:underline text-lg font-semibold"
                            >
                                {country.name.common}
                            </Link>
                            <div className="text-gray-600 text-sm mt-1">
                                Region: {country.region} <br />
                                Population: {country.population.toLocaleString()}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
