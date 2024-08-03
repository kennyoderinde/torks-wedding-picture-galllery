import Header from './Header.js'
import Cards from './Cards.js'
import { data } from './data.js'
import Footer from './Footer.js'
import './styles.css'
 
function App() {
    const mappedData = data.map((item) => {
        return (
            <Cards key={item.id} item={item} />
        )
    })
    return (
        <div className="App mt-20">
            <Header />
            {mappedData}
            <Footer />
        </div>
    );
}
 
export default App;
