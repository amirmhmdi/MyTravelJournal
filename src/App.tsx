
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'



function App()
{
  let entries = data.map((entry) => (
    <Entry
      id={entry.id}
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  ));
  return (
    <>
      <Header />
      {entries}

    </>
  )
}

export default App
