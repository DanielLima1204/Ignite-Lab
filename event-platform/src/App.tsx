import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
//Fazendo Requisição
const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
      }
    }
`
interface Lesson { // Tipificar o Lesson
  id: string;
  title: string;
}

function App() { //Hook do React
  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)
  
  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
