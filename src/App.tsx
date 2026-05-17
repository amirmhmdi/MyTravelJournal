
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'


function App()
{

  return (
    <>
      <Header />
      <Entry
        img={{ src: 'src/assets/japan.png', alt: 'Japan Image' }}
        countryName="Japan"
        cityName="Tokyo"
        date="2023-10-15"
        description="Amazing experience in the land of the rising sun!"
      />

      <Entry
        img={{ src: 'src/assets/sydney.png', alt: 'Sydney Image' }}
        countryName="Australia"
        cityName="Sydney"
        date="2023-10-16"
        description="Incredible city by the harbor!"
      />

      <Entry
        img={{ src: 'src/assets/geirangerfjord.png', alt: 'Geirangerfjord Image' }}
        countryName="Norway"
        cityName="Geiranger"
        date="2023-10-17"
        description="Breathtaking fjord with stunning waterfalls!"
      />

    </>
  )
}

export default App
