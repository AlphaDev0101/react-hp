import { Banner } from "./components/Banner/Banner"
import { Libros } from "./components/Libros/Libros"
import { Personajes } from "./components/Personajes/Personajes"
import { Frases } from "./components/Frases/Frases"

export const HomePage = () => {
    return (
    <main>
        <Banner/>
        <Libros/>
        <Personajes/>
        <Frases/>
    </main>
)
}
