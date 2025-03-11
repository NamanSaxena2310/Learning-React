import Accordion from "./components/Accordion"

function App() {
  const items = [
    {
      id: '12hjbhjk',
      label:'Can i use react ona Project',
      content: 'You can use React on Any project.You can use React on Any project.You can use React on Any project'
    },
    {
      id:'jkbjkb12',
       label:'Can i use javascript ona Project',
      content: 'You can use React on Any project.You can use React on Any project.You can use React on Any project'
    },
    {
      id:'lkjad245',
       label:'Can i use PHP ona Project',
      content: 'You can use React on Any project.You can use React on Any project.You can use React on Any project'
    }
  ]
 return (
  <Accordion items={items} />
 )
}

export default App
